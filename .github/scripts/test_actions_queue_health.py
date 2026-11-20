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


class JobEvidenceTests(unittest.TestCase):
    def sample(self, outcome="cancelled", steps=None):
        run_data = run(status="completed", conclusion=outcome, head_sha=SHA, run_attempt=2)
        job = dict(id=10, run_id=1, name="Build", status="completed", conclusion=outcome,
                   steps=[] if steps is None else steps)
        return run_data, {"total_count":1, "jobs":[job]}

    def test_checkout_cancellation_survives_successful_cleanup(self):
        a, data = self.sample(steps=[
            dict(number=1, name="Checkout", conclusion="cancelled"),
            dict(number=2, name="Test", conclusion="skipped"),
            dict(number=3, name="Complete job", conclusion="success")])
        seen = []
        def fetch(run_id, attempt):
            seen.append((run_id, attempt)); return data
        result = health.job_evidence([a], fetch)
        job = result["runs"][0]["jobs"][0]
        self.assertEqual(seen, [(1,2)])
        self.assertEqual(job["first_problem_step"]["name"], "Checkout")
        self.assertEqual(job["skipped_steps"], 1)

    def test_first_problem_uses_step_order_not_response_order(self):
        a, data = self.sample("failure", steps=[
            dict(number=8, name="Upload", conclusion="failure"),
            dict(number=4, name="Tests", conclusion="failure"),
            dict(number=1, name="Checkout", conclusion="success")])
        result = health.job_evidence([a], lambda *_:data)
        self.assertEqual(result["runs"][0]["jobs"][0]["first_problem_step"]["name"], "Tests")

    def test_no_steps_does_not_invent_a_cause(self):
        a, data = self.sample()
        result = health.job_evidence([a], lambda *_:data)
        self.assertIsNone(result["runs"][0]["jobs"][0]["first_problem_step"])

    def test_run_cap_and_self_exclusion_are_explicit(self):
        runs = [run(i,"completed",conclusion="cancelled",run_attempt=1) for i in range(10)]
        calls = []
        def fetch(run_id, attempt):
            calls.append(run_id); return {"total_count":0,"jobs":[]}
        result = health.job_evidence(runs, fetch, own_run_id="9")
        self.assertEqual(result["eligible_runs"], 9)
        self.assertEqual(len(calls), 8)
        self.assertNotIn(9, calls)
        self.assertFalse(result["complete"])

    def test_successful_pending_and_skipped_runs_do_not_add_api_calls(self):
        def unexpected(*_): self.fail("Unexpected jobs request")
        samples = [run(), run(2,"completed",conclusion="success"), run(3,"completed",conclusion="skipped")]
        self.assertEqual(health.job_evidence(samples, unexpected)["inspected_runs"], 0)

    def test_jobs_page_cap_and_duplicates_do_not_claim_complete(self):
        a, data = self.sample()
        data["total_count"] = 101
        data["jobs"] *= 2
        result = health.job_evidence([a], lambda *_:data)
        self.assertFalse(result["complete"])
        self.assertEqual(result["runs"][0]["observed_jobs"], 1)

    def test_wrong_run_malformed_jobs_and_steps_fail_closed(self):
        a, data = self.sample()
        bad_job = dict(data["jobs"][0],run_id=99)
        bad_steps = dict(data["jobs"][0],steps=["bad"])
        for response in [None, {}, {"total_count":1,"jobs":[bad_job]},
                         {"total_count":1,"jobs":[bad_steps]}]:
            with self.subTest(response=response), self.assertRaises(ValueError):
                health.job_evidence([a], lambda *_:response)

    def test_missing_attempt_does_not_fall_back_to_latest(self):
        a, data = self.sample()
        a.pop("run_attempt")
        with self.assertRaises(ValueError): health.job_evidence([a], lambda *_:data)

    def test_job_step_markdown_is_escaped_and_urls_constructed(self):
        a, data = self.sample(steps=[dict(number=1, name="<img>[x](evil)|", conclusion="failure")])
        data["jobs"][0]["html_url"] = "https://evil.invalid"
        report = health.analyze([], [], coverage(), NOW)
        report["job_evidence"] = health.job_evidence([a], lambda *_:data)
        rendered = health.markdown(report,"owner/repo")
        self.assertNotIn("<img>", rendered)
        self.assertNotIn("https://evil.invalid", rendered)
        self.assertIn("actions/runs/1/job/10", rendered)

    def test_jobs_api_error_is_not_silently_complete(self):
        a, _ = self.sample()
        def broken(*_): raise OSError("unavailable")
        with self.assertRaises(OSError): health.job_evidence([a], broken)


if __name__ == "__main__":
    unittest.main()
