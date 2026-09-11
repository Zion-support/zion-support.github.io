"""Zion Tech Group content creation loop."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CONTENT_DIR = ROOT / "content-loop"
BRIEFS_DIR = CONTENT_DIR / "briefs"
BANK_PATH = CONTENT_DIR / "bank.json"
STATE_PATH = CONTENT_DIR / "state.json"
CONFIG_PATH = CONTENT_DIR / "config.json"
PUBLIC = ROOT / "public"
BLOG_DIR = PUBLIC / "blog"
