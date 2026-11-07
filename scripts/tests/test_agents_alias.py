"""Offline source and regression tests for the agents compatibility alias."""

import importlib.util
from pathlib import Path
import tempfile
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


if __name__ == "__main__":
    unittest.main()
