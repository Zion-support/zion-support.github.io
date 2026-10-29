import importlib.util
from datetime import datetime, timezone
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location("health", Path(__file__).with_name("actions_queue_health.py"))
health = importlib.util.module_from_spec(spec)
spec.loader.exec_module(health)
NOW = datetime(2026, 10, 29, 16, tzinfo=timezone.utc)
SHA = "a" * 40


def run(number=1, status="queued", **kwargs):
    return dict(id=number, status=status, created_at="2026-10-29T15:00:00Z",
                updated_at="2026-10-29T15:00:00Z", **kwargs)


def coverage():
    return {s: {"complete": True, "pages": 1, "observed": 0, "reported_total": 0} for s in health.ACTIVE}


class HealthTests(unittest.TestCase):
    def test_old_queue_not_hidden_by_recent_completed_runs(self):
        old = run()  # Separate status queries preserve this old run.
        data, meta = health.collect(lambda q: {"total_count": 1, "workflow_runs": [old]}, "queued")
        recent = [run(i, "completed", conclusion="success") for i in range(100, 200)]
        report = health.analyze(data, recent, coverage(), NOW)
        self.assertTrue(meta["complete"])
        self.assertEqual(report["queue_assessment"], "critical")

    def test_pagination_cap_is_unknown_not_healthy(self):
        _, meta = health.collect(lambda q: {"total_count": 400, "workflow_runs": [run(i) for i in range((q['page']-1)*100,q['page']*100)]}, "queued")
        self.assertFalse(meta["complete"])
        c = coverage(); c["queued"] = meta
        self.assertEqual(health.analyze([], [], c, NOW)["queue_assessment"], "unknown")

    def test_duplicates_do_not_claim_completeness(self):
        data, meta = health.collect(lambda q: {"total_count": 2, "workflow_runs": [run(), run()]})
        self.assertEqual(len(data), 1)
        self.assertFalse(meta["complete"])

    def test_changing_total_is_incomplete(self):
        def fetch(q):
            if q["page"] == 1:
                return {"total_count": 101, "workflow_runs": [run(i) for i in range(100)]}
            return {"total_count": 100, "workflow_runs": []}
        self.assertFalse(health.collect(fetch)[1]["complete"])

    def test_threshold_boundaries(self):
        for minute, expected in [("15:36", "within_threshold"), ("15:35", "warning"), ("15:15", "critical")]:
            a = run(); a["created_at"] = "2026-10-29T" + minute + ":00Z"
            self.assertEqual(health.analyze([a], [], coverage(), NOW)["queue_assessment"], expected)

    def test_later_success_is_reported_without_erasing_failure(self):
        a = run(1, "completed", name="Build", workflow_id=99, head_branch="main", event="push", conclusion="failure")
        b = dict(a, id=2, created_at="2026-10-29T15:30:00Z", conclusion="success")
        result = health.analyze([], [b,a], coverage(), NOW)["recent_failures"][0]
        self.assertEqual(result["latest_run_id"], 2)
        self.assertEqual(result["latest_conclusion"], "success")
        self.assertEqual(result["failures"], 1)

    def test_status_transition_deduplicates(self):
        a = run(); b = run(status="in_progress"); b["updated_at"] = "2026-10-29T15:05:00Z"
        r = health.analyze([a,b], [], coverage(), NOW)
        self.assertEqual(r["queue_count"], 0)
        self.assertEqual(r["counts"]["in_progress"], 1)

    def test_waiting_is_separate_from_runner_queue(self):
        r = health.analyze([run(status="waiting")], [], coverage(), NOW)
        self.assertEqual(r["waiting_count"], 1)
        self.assertEqual(r["queue_count"], 0)

    def test_historical_queue_is_not_current_runner_congestion(self):
        a = run(); a["created_at"] = "2025-11-05T19:43:35Z"
        r = health.analyze([a], [], coverage(), NOW)
        self.assertEqual(r["queue_assessment"], "review_stale_records")
        self.assertEqual(r["stale_queue_count"], 1)
        self.assertEqual(r["recent_queue_count"], 0)

    def test_recent_congestion_remains_visible_with_stale_records(self):
        a = run(); a["created_at"] = "2025-11-05T19:43:35Z"
        self.assertEqual(health.analyze([a,run(2)], [], coverage(), NOW)["queue_assessment"], "critical")

    def test_missing_future_and_naive_dates_are_unknown(self):
        for value in [None, "invalid", "2026-10-29T17:00:00Z", "2026-10-29T15:00:00"]:
            with self.subTest(value=value):
                a = run(); a["created_at"] = value
                self.assertEqual(health.analyze([a], [], coverage(), NOW)["queue_assessment"], "unknown")

    def test_failure_types_and_branches_stay_separate(self):
        samples = [run(i,"completed",workflow_id=99,head_branch=branch,event="push",conclusion=outcome)
                   for i,(branch,outcome) in enumerate([("main","timed_out"),("fix","failure"),("main","action_required"),("main","cancelled")])]
        r = health.analyze([], samples, coverage(), NOW)
        self.assertEqual({g["branch"]:g["failures"] for g in r["recent_failures"]}, {"main":2,"fix":1})

    def test_malformed_api_fails_instead_of_zero_results(self):
        for data in [{}, {"total_count":0,"workflow_runs":None}, {"total_count":1,"workflow_runs":[{}]}]:
            with self.assertRaises(ValueError):
                health.collect(lambda q:data)

    def test_api_error_propagates(self):
        def broken(q): raise OSError("rate limited")
        with self.assertRaises(OSError): health.collect(broken)

    def test_summary_escapes_names_and_ignores_api_urls(self):
        a = run(name="<script>[x](evil)|\n::error::",html_url="https://evil.invalid")
        text = health.markdown(health.analyze([a], [], coverage(), NOW), "owner/repo")
        self.assertNotIn("<script>",text)
        self.assertNotIn("https://evil.invalid",text)
        self.assertIn("https://github.com/owner/repo/actions/runs/1",text)

    def test_cancelled_neutral_and_skipped_are_visible_not_success(self):
        for outcome in ["cancelled", "neutral", "skipped", None]:
            with self.subTest(outcome=outcome):
                a = run(status="completed", conclusion=outcome, head_sha=SHA)
                report = health.analyze([], [a], coverage(), NOW)
                key = outcome or "unknown"
                self.assertEqual(report["recent_outcomes"][key], 1)
                self.assertEqual(report["recent_unverified"][0]["outcome"], key)
                evidence = health.commit_evidence([a], {"complete":True}, SHA)
                self.assertNotEqual(evidence["assessment"], "observed_success")

    def test_no_checks_incomplete_and_pending_never_approve(self):
        cases = [([], True, "no_evidence"), ([run(head_sha=SHA)], True, "pending"),
                 ([run(status="completed", conclusion="success", head_sha=SHA)], False, "incomplete")]
        for runs, complete, expected in cases:
            self.assertEqual(health.commit_evidence(runs, {"complete":complete}, SHA)["assessment"], expected)

    def test_diagnostic_cannot_supply_its_own_success(self):
        a = run(status="completed", conclusion="success", head_sha=SHA)
        result = health.commit_evidence([a], {"complete":True}, SHA, own_run_id="1")
        self.assertEqual(result["assessment"], "no_evidence")
        self.assertEqual(result["self_excluded"], 1)

    def test_wrong_revision_fails_closed(self):
        with self.assertRaises(ValueError):
            health.commit_evidence([run(head_sha="b"*40)], {"complete":True}, SHA)

    def test_failure_preserved_even_with_incomplete_commit_coverage(self):
        a = run(status="completed", conclusion="failure", head_sha=SHA)
        self.assertEqual(health.commit_evidence([a], {"complete":False}, SHA)["assessment"], "attention_required")

    def test_green_observations_still_require_external_policy_review(self):
        a = run(status="completed", conclusion="success", head_sha=SHA)
        result = health.commit_evidence([a], {"complete":True}, SHA)
        self.assertEqual(result["assessment"], "observed_success")
        self.assertIn("not merge approval", result["policy"])

    def test_commit_filter_is_in_every_request(self):
        seen = []
        def fetch(q):
            seen.append(q)
            return {"total_count":0, "workflow_runs":[]}
        health.collect(fetch, head_sha=SHA)
        self.assertEqual(seen[0]["head_sha"], SHA)


if __name__ == "__main__":
    unittest.main()
