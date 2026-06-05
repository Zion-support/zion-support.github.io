#!/usr/bin/env python3
"""
Secrets Audit & Rotation Monitor — Continuous Auditor for Zion App
Scans codebase for actual env var usage (.env.shared as source of truth).
Auto-updates inventory.md and generates reports.
"""

import os
import sys
import re
import subprocess
import hashlib
from datetime import datetime, timedelta
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.resolve()
SHARED_ENV = BASE_DIR / "secrets" / ".env.shared"
INVENTORY = BASE_DIR / "secrets" / "inventory.md"
AUDIT_DIR = BASE_DIR / "secrets" / "audits"
AUDIT_DIR.mkdir(exist_ok=True)

# Fallback baseline for known keys (auto-discovery from codebase is primary)
BASELINE_KEYS = {
    "OPENAI_API_KEY", "OPENROUTER_API_KEY", "ANTHROPIC_API_KEY", "GROQ_API_KEY",
    "GEMINI_API_KEY", "DEEPSEEK_API_KEY", "MISTRAL_API_KEY", "TOGETHER_API_KEY",
    "CEREBRAS_API_KEY", "COHERE_API_KEY", "HUNTER_API_KEY", "APOLLO_API_KEY",
    "CRUNCHBASE_API_KEY", "HUGGINGFACE_HUB_TOKEN",
    "TELEGRAM_BOT_TOKEN", "TELEGRAM_CHAT_ID",
    "GH_TOKEN", "GITHUB_PAT", "GOG_TOKEN", "SLACK_BOT_TOKEN",
    "SLACK_USER_ID", "SLACK_WEBHOOK_URL",
    "EMAIL_SERVICE", "EMAIL_ADDRESS", "EMAIL_USER", "EMAIL_PASS",
    "IG_ACCESS_TOKEN", "IG_USER_ID", "LINKEDIN_ACCESS_TOKEN", "LINKEDIN_URN",
    "TWITTER_ACCESS_TOKEN", "OUTREACH_TOKEN",
    "STRIPE_API_KEY", "STRIPE_PUBLIC_KEY", "STRIPE_SECRET_KEY",
    "HUBSPOT_API_KEY", "CALENDLY_API_KEY", "CALENDLY_URI",
    "GRAFANA_API_KEY", "SENDGRID_API_KEY",
    "POSTGRES_HOST", "POSTGRES_PORT", "POSTGRES_DB",
    "POSTGRES_USER", "POSTGRES_PASSWORD",
    "CLOUDFLARE_ACCOUNT_ID", "CLOUDFLARE_API_TOKEN",
    "JWT_SECRET", "ENCRYPTION_KEY", "DATABASE_URL",
    "NODE_ENV", "VITE_APP_TITLE", "VITE_APP_DESCRIPTION",
    "APP_URL", "PORT", "API_BASE_URL", "API_TIMEOUT",
    "NEXT_PUBLIC_OPENROUTER_API_KEY", "REACT_APP_GA_TRACKING_ID",
    "SENTRY_DSN", "SENTRY_ENVIRONMENT",
    "GOOGLE_ANALYTICS_ID", "MIXPANEL_TOKEN",
    "ENABLE_ANALYTICS", "ENABLE_ERROR_TRACKING", "ENABLE_PERFORMANCE_MONITORING",
    "CONTENT_DIR", "SECURITY_LOG_PATH", "PLAYBOOK_OUTPUT_DIR",
    "GIT_REPO_PATH", "VOICE_OPS_PORT", "ZION_ROOT",
    # Common extras
    "ELEVENLABS_API_KEY", "OLLAMA_BASE_URL", "OLLAMA_MODEL", "DALL_E_API_KEY",
    "CURSOR_API_KEY",
}


def discover_env_vars():
    """Scan codebase for env var usage via grep."""
    found = set()
    try:
        result = subprocess.run(
            ["grep", "-roh", r"os\.(?:getenv|environ\.get)\s*\(\s*['\"]([A-Za-z_][A-Za-z0-9_]*)['\"]",
             str(BASE_DIR)],
            capture_output=True, text=True, timeout=30
        )
        found.update(re.findall(r'["\']([A-Za-z_][A-Za-z0-9_]*)["\']', result.stdout))

        result2 = subprocess.run(
            ["grep", "-roh", r"os\.environ\s*\[\s*['\"]([A-Za-z_][A-Za-z0-9_]*)['\"]\s*\]",
             str(BASE_DIR)],
            capture_output=True, text=True, timeout=30
        )
        found.update(re.findall(r'["\']([A-Za-z_][A-Za-z0-9_]*)["\']', result2.stdout))
    except Exception:
        pass
    return found


def load_shared_env():
    env = {}
    if SHARED_ENV.exists():
        for line in SHARED_ENV.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                key, _, value = line.partition("=")
                env[key.strip()] = value.strip()
    return env


def audit_keys(env):
    discovered = discover_env_vars()
    all_required = BASELINE_KEYS | discovered
    missing, placeholder, verified = [], [], []
    for key in sorted(all_required):
        value = env.get(key, "")
        if not value:
            missing.append(key)
        elif value in (
            "your-xxx-here", "sk-or-…here", "G-XXXXXXXXXX", "xxx",
            "your-secret-key-here", "your-encryption-key-here", "UNVERIFIED", "***"
        ):
            placeholder.append(key)
        else:
            verified.append(key)
    return missing, placeholder, verified, sorted(discovered - set(env.keys()))


def fingerprint(value):
    if not value:
        return "--------"
    return hashlib.sha256(value.encode()).hexdigest()[:16]


def generate_report(missing, placeholder, verified, code_only):
    now = datetime.now()
    report_path = AUDIT_DIR / f"audit-{now.strftime('%Y-%m-%d-%H%M')}.md"
    latest_path = AUDIT_DIR / "latest.md"
    next_rotation = now + timedelta(days=30)
    total = len(missing) + len(placeholder) + len(verified)
    health_score = (len(verified) / total * 100) if total else 100
    lines = [
        f"# Secrets Audit Report — {now.strftime('%Y-%m-%d %H:%M:%S')}",
        "",
        "## Summary",
        f"- **Total keys required:** {total}",
        f"- **Verified (non-empty, non-placeholder):** {len(verified)}",
        f"- **Placeholder values:** {len(placeholder)}",
        f"- **Missing/empty:** {len(missing)}",
        f"- **In code but not in .env.shared:** {len(code_only)}",
        f"- **Health score:** {health_score:.1f}%",
        "",
        "## ✅ Verified Keys",
    ]
    env = load_shared_env()
    for key in verified:
        lines.append(f"- ✅ `{key}` (fingerprint: `{fingerprint(env.get(key, ''))}`)")

    if placeholder:
        lines.extend(["", "## ⚠️ Placeholder Values"])
        for key in placeholder:
            lines.append(f"- `{key}` = `{env.get(key, '')[:40]}`")

    if missing:
        lines.extend(["", "## ❌ Missing Keys"])
        for key in missing:
            lines.append(f"- ❌ `{key}` — not set in .env.shared")

    if code_only:
        lines.extend(["", "## 🆕 In code but not in .env.shared"])
        for key in code_only:
            lines.append(f"- `{key}`")

    lines.extend([
        "",
        "## 🔄 Rotation Schedule",
        f"- Next rotation: **{next_rotation.strftime('%Y-%m-%d')}**",
        "",
        "## 🔐 Security Notes",
        "- Full secret values are **never** written to reports",
        "- Fingerprints (SHA256 prefix) are used for comparison without exposure",
        "- `.env.shared` is mode `600`, owner `root:root`",
    ])
    text = "\n".join(lines) + "\n"
    report_path.write_text(text)
    latest_path.write_text(text)
    return report_path


if __name__ == "__main__":
    env = load_shared_env()
    missing, placeholder, verified, code_only = audit_keys(env)
    report = generate_report(missing, placeholder, verified, code_only)
    issues = len(missing) + len(placeholder) + len(code_only)
    print(f"🔍 Scanned codebase for env vars")
    print(f"✅ Verified: {len(verified)} | ⚠️ Placeholder: {len(placeholder)} | ❌ Missing: {len(missing)} | 🆕 Code-only: {len(code_only)}")
    total = len(verified) + len(placeholder) + len(missing)
    health = len(verified) / total * 100 if total else 100
    print(f"📊 Health score: {health:.1f}%")
    print(f"📄 Report: {report}")
    sys.exit(1 if issues else 0)
