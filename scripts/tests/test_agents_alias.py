"""Offline source and regression tests for the agents compatibility alias."""

import importlib.util
import os
from pathlib import Path
import re
import subprocess
import tempfile
import textwrap
import unittest

REPO = Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location("agents_alias", REPO / "scripts/check-agents-alias.py")
checker = importlib.util.module_from_spec(spec)
spec.loader.exec_module(checker)


class AgentsAliasTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix="agents-alias-test-")
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.alias = self.root / "agents/index.html"
        self.alias.parent.mkdir(parents=True)
        self.alias.write_text((REPO / "public/agents/index.html").read_text(), encoding="utf-8")
        self.target = self.root / "autonomous-ai-agents/index.html"
        self.target.parent.mkdir(parents=True)
        self.target.write_text('<html><head><link rel="canonical" href="' + checker.CANONICAL + '"></head><body>Hub</body></html>')

    def test_repository_source(self):
        checker.check(REPO / "public")

    def test_valid_alias(self):
        checker.check(self.root)

    def test_missing_alias(self):
        self.alias.unlink()
        with self.assertRaisesRegex(ValueError, "Missing published alias"):
            checker.check(self.root)

    def test_missing_target(self):
        self.target.unlink()
        with self.assertRaisesRegex(ValueError, "target is missing"):
            checker.check(self.root)

    def test_wrong_canonical(self):
        self.alias.write_text(self.alias.read_text().replace(checker.CANONICAL, "https://example.com/"))
        with self.assertRaisesRegex(ValueError, "intended canonical"):
            checker.check(self.root)

    def test_self_redirect(self):
        self.alias.write_text(self.alias.read_text().replace("0;url=/autonomous-ai-agents/", "0;url=/agents/"))
        with self.assertRaisesRegex(ValueError, "refresh immediately"):
            checker.check(self.root)

    def test_missing_fallback(self):
        self.alias.write_text(self.alias.read_text().replace('href="/autonomous-ai-agents/"', 'href="/"'))
        with self.assertRaisesRegex(ValueError, "fallback link"):
            checker.check(self.root)

    def test_target_redirect_loop(self):
        self.target.write_text(self.target.read_text().replace("</head>", '<meta http-equiv="refresh" content="0;url=/agents/"></head>'))
        with self.assertRaisesRegex(ValueError, "redirect loop"):
            checker.check(self.root)

    def test_javascript_dependency(self):
        self.alias.write_text(self.alias.read_text().replace("</body>", '<script src="/legacy.js"></script></body>'))
        with self.assertRaisesRegex(ValueError, "JavaScript"):
            checker.check(self.root)

    def test_missing_noindex(self):
        self.alias.write_text(self.alias.read_text().replace('content="noindex,follow"', 'content="index,follow"'))
        with self.assertRaisesRegex(ValueError, "noindex"):
            checker.check(self.root)


class CheckoutTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix="agents-checkout-test-")
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.seed = self.root / "seed"
        self.seed.mkdir()
        self.checkout = self.root / "checkout"
        self.checkout.mkdir()
        self.env = {"PATH": os.environ.get("PATH", "/usr/bin:/bin"), "HOME": str(self.root),
                    "GIT_CONFIG_NOSYSTEM": "1", "GIT_CONFIG_GLOBAL": os.devnull,
                    "GIT_TERMINAL_PROMPT": "0"}
        self.git("init", "--quiet")
        self.git("config", "user.name", "Test fixture")
        self.git("config", "user.email", "test@example.invalid")
        (self.seed / "README").write_text("Offline fixture\n")
        self.git("add", "README")
        self.git("commit", "--quiet", "-m", "fixture")
        sha = self.git("rev-parse", "HEAD")
        self.git("update-index", "--add", "--cacheinfo", f"160000,{sha},.pageploy")
        self.git("commit", "--quiet", "-m", "orphan gitlink")
        self.sha = self.git("rev-parse", "HEAD")
        source = (REPO / ".github/workflows/agents-alias-contract.yml").read_text()
        section = source.split("      - name: Checkout public candidate\n", 1)[1]
        block = re.search(r"        run: \|\n((?:          [^\n]*(?:\n|$)|\n)*)", section).group(1)
        self.script = textwrap.dedent(block)
        remote = "https://github.com/Zion-support/zion-support.github.io.git"
        self.assertEqual(self.script.count(remote), 1)
        self.script = self.script.replace(remote, str(self.seed))

    def git(self, *args):
        return subprocess.check_output(["git", *args], cwd=self.seed, env=self.env,
                                       text=True, stderr=subprocess.DEVNULL).strip()

    def run_checkout(self, sha):
        return subprocess.run(["bash", "-c", self.script], cwd=self.checkout,
                              env={**self.env, "CANDIDATE_SHA": sha}, capture_output=True,
                              text=True, timeout=20)

    def test_orphan_gitlink_does_not_break_exact_checkout(self):
        result = self.run_checkout(self.sha)
        self.assertEqual(result.returncode, 0, result.stderr)
        actual = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=self.checkout,
                                         env=self.env, text=True).strip()
        self.assertEqual(actual, self.sha)
        config = subprocess.check_output(["git", "config", "--local", "--list"],
                                         cwd=self.checkout, env=self.env, text=True)
        self.assertNotIn("extraheader", config.lower())
        self.assertNotIn("credential.helper", config.lower())

    def test_invalid_revision_fails_before_checkout(self):
        result = self.run_checkout("invalid; touch unexpected")
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(list(self.checkout.iterdir()), [])

    def test_nonempty_workspace_is_preserved(self):
        sentinel = self.checkout / "existing"
        sentinel.write_text("keep")
        result = self.run_checkout(self.sha)
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(sentinel.read_text(), "keep")
        self.assertFalse((self.checkout / ".git").exists())


if __name__ == "__main__":
    unittest.main()
