"""Exercise the actual rollback validator with synthetic, offline API responses."""

import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import textwrap
import unittest


WORKFLOW = Path(__file__).resolve().parents[2] / ".github/workflows/apps-rollback-readiness.yml"
REPO = "example/site"
PREFIX = f"repos/{REPO}"
VERIFIERS = f"{PREFIX}/actions/workflows/ai-post-push-route-verify.yml/runs?branch=main&status=success&per_page=50"
PUBLISHERS = ("gh-pages.yml", "static-deploy.yml", "deploy-on-push.yml")
DEPLOYED_SHA = "a" * 40
MAIN_SHA = "b" * 40


def publisher_path(workflow):
    return f"{PREFIX}/actions/workflows/{workflow}/runs?branch=main&status=success&per_page=20"


def jobs_path(run_id):
    return f"{PREFIX}/actions/runs/{run_id}/jobs?filter=latest&per_page=100"


def fixtures():
    run = {
        "id": 10,
        "path": ".github/workflows/gh-pages.yml",
        "head_sha": DEPLOYED_SHA,
        "head_branch": "main",
        "status": "completed",
        "conclusion": "success",
        "updated_at": "2026-11-20T10:00:00Z",
        "run_attempt": 1,
    }
    verifier = dict(run, id=20, updated_at="2026-11-20T10:03:00Z")
    deploy_job = {
        "id": 100,
        "name": "deploy",
        "status": "completed",
        "conclusion": "success",
        "steps": [{
            "name": "Deploy to GitHub Pages",
            "status": "completed",
            "conclusion": "success",
            "completed_at": "2026-11-20T10:00:00Z",
        }],
    }
    probe_job = {
        "id": 200,
        "name": "verify",
        "status": "completed",
        "conclusion": "success",
        "steps": [{
            "name": "Verify critical Apps release routes",
            "status": "completed",
            "conclusion": "success",
            "started_at": "2026-11-20T10:01:00Z",
            "completed_at": "2026-11-20T10:02:00Z",
        }],
    }
    data = {
        VERIFIERS: {"workflow_runs": [verifier]},
        f"{PREFIX}/commits/main": {"sha": MAIN_SHA},
        jobs_path(10): {"jobs": [deploy_job], "total_count": 1},
        jobs_path(20): {"jobs": [probe_job], "total_count": 1},
    }
    for workflow in PUBLISHERS:
        data[publisher_path(workflow)] = {"workflow_runs": [], "total_count": 0}
    data[publisher_path(PUBLISHERS[0])] = {"workflow_runs": [run], "total_count": 1}
    return data


class RollbackEvidenceTests(unittest.TestCase):
    def run_validator(self, responses):
        raw = WORKFLOW.read_text(encoding="utf-8")
        source = textwrap.dedent(raw.split("python3 - <<'PY'\n", 1)[1].split("          PY", 1)[0])
        bootstrap = textwrap.dedent("""
            import io, json, os, subprocess, urllib.request
            responses = json.loads(os.environ['OFFLINE_RESPONSES'])
            def fake_gh(args, **kwargs):
                assert args[:2] == ['gh', 'api'], args
                value = responses[args[2]]
                if value == 'API_FAILURE':
                    raise subprocess.CalledProcessError(1, args)
                return json.dumps(value)
            def fake_urlopen(request, **kwargs):
                assert '/compare/' in request.full_url
                return io.BytesIO(json.dumps({'status':'ahead','ahead_by':1,'behind_by':0,'total_commits':1}).encode())
            subprocess.check_output = fake_gh
            urllib.request.urlopen = fake_urlopen
        """)
        with tempfile.TemporaryDirectory() as directory:
            report = Path(directory) / "automation/reports/apps-rollback-readiness.json"
            report.parent.mkdir(parents=True)
            result = subprocess.run(
                [sys.executable, "-c", bootstrap + "\n" + source],
                cwd=directory,
                env={**os.environ, "GITHUB_REPOSITORY": REPO, "GH_TOKEN": "synthetic-test-token", "OFFLINE_RESPONSES": json.dumps(responses)},
                text=True,
                capture_output=True,
                timeout=10,
            )
            self.assertTrue(report.exists(), result.stderr)
            return result, json.loads(report.read_text(encoding="utf-8"))

    def assert_blocked(self, result, report, status):
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(report["validation_status"], status)
        self.assertIsNone(report["rollback_candidate_sha"])
        self.assertFalse(report["automatic_rollback_allowed"])

    def test_initial_api_failure_preserves_error_ledger(self):
        data = fixtures()
        data[VERIFIERS] = "API_FAILURE"
        result, report = self.run_validator(data)
        self.assert_blocked(result, report, "validator_error")
        self.assertEqual(report["validation_stage"], "listing_verifiers")

    def test_missing_publication_preserves_hold_ledger(self):
        data = fixtures()
        data[publisher_path(PUBLISHERS[0])] = {"workflow_runs": [], "total_count": 0}
        result, report = self.run_validator(data)
        self.assert_blocked(result, report, "hold")
        self.assertIn("No executed successful Pages deployment", report["failure_reason"])

    def test_skipped_deploy_never_becomes_candidate(self):
        data = fixtures()
        data[jobs_path(10)]["jobs"][0]["conclusion"] = "skipped"
        result, report = self.run_validator(data)
        self.assert_blocked(result, report, "hold")

    def test_missing_probe_preserves_observed_deploy_without_candidate(self):
        data = fixtures()
        data[VERIFIERS] = {"workflow_runs": []}
        result, report = self.run_validator(data)
        self.assert_blocked(result, report, "hold")
        self.assertEqual(report["observed_deploy_sha"], DEPLOYED_SHA)
        self.assertIn("No successful critical Apps route probe", report["failure_reason"])

    def test_probe_before_publication_cannot_certify_release(self):
        data = fixtures()
        data[jobs_path(20)]["jobs"][0]["steps"][0]["started_at"] = "2026-11-20T09:59:00Z"
        result, report = self.run_validator(data)
        self.assert_blocked(result, report, "hold")

    def test_incomplete_jobs_remain_validator_error(self):
        data = fixtures()
        data[jobs_path(10)]["total_count"] = 2
        result, report = self.run_validator(data)
        self.assert_blocked(result, report, "validator_error")
        self.assertEqual(report["validation_stage"], "resolving_deployment")

    def test_verified_probe_retains_success_semantics(self):
        result, report = self.run_validator(fixtures())
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(report["validation_status"], "verified")
        self.assertEqual(report["rollback_candidate_sha"], DEPLOYED_SHA)
        self.assertEqual(report["post_deploy_verifier"]["run_id"], 20)
        self.assertFalse(report["automatic_rollback_allowed"])


if __name__ == "__main__":
    unittest.main()
