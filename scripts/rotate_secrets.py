#!/usr/bin/env python3
"""
Secrets Rotation Manager
Automates rotation of API keys and credentials with browser-based verification.
"""

import os
import sys
import json
import hashlib
from datetime import datetime, timedelta
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.resolve()
SHARED_ENV = BASE_DIR / "secrets" / ".env.shared"
INVENTORY = BASE_DIR / "secrets" / "inventory.md"
BACKUP_DIR = BASE_DIR / "secrets" / "backups"
ROTATION_LOG = BASE_DIR / "secrets" / "rotation.log"
BACKUP_DIR.mkdir(exist_ok=True)

HIGH_RISK_KEYS = {
    "OPENAI_API_KEY", "ANTHROPIC_API_KEY", "GEMINI_API_KEY", "GROQ_API_KEY",
    "TELEGRAM_BOT_TOKEN", "EMAIL_PASS", "STRIPE_SECRET_KEY", "HUBSPOT_API_KEY",
    "SENDGRID_API_KEY", "GH_TOKEN", "JWT_SECRET", "ENCRYPTION_KEY",
    "POSTGRES_PASSWORD", "NEXT_PUBLIC_OPENROUTER_API_KEY",
    "LINKEDIN_ACCESS_TOKEN", "IG_ACCESS_TOKEN", "TWITTER_ACCESS_TOKEN",
    "CLOUDFLARE_API_TOKEN", "DEEPSEEK_API_KEY", "MISTRAL_API_KEY",
    "TOGETHER_API_KEY", "COHERE_API_KEY", "OPENROUTER_API_KEY",
}

ROTATION_INTERVAL_DAYS = 30


def backup_current(env):
    """Backup current .env.shared before rotation."""
    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    backup_path = BACKUP_DIR / f".env.shared.{timestamp}.bak"
    backup_path.write_text("\n".join(f"{k}={v}" for k, v in env.items()))
    backup_path.chmod(0o600)
    return backup_path


def log_rotation(key, action, status="success"):
    """Append rotation event to log."""
    timestamp = datetime.now().isoformat()
    entry = f"[{timestamp}] {action}: {key} -> {status}\n"
    with open(ROTATION_LOG, "a") as f:
        f.write(entry)


def verify_after_rotation(key, new_value):
    """Basic sanity check on rotated key."""
    if not new_value or len(new_value) < 10:
        return False, "Key too short (min 10 chars)"
    if any(placeholder in new_value for placeholder in ["xxx", "your-", "placeholder", "G-XXXXXXXXXX"]):
        return False, "Key appears to be a placeholder"
    return True, "OK"


def update_shared_env(key, value):
    """Update or append key in .env.shared."""
    if not SHARED_ENV.exists():
        SHARED_ENV.write_text(f"{key}={value}\n")
        SHARED_ENV.chmod(0o600)
        return
    
    lines = SHARED_ENV.read_text().splitlines()
    updated = False
    new_lines = []
    for line in lines:
        if line.startswith(f"{key}="):
            new_lines.append(f"{key}={value}")
            updated = True
        else:
            new_lines.append(line)
    if not updated:
        new_lines.append(f"{key}={value}")
    SHARED_ENV.write_text("\n".join(new_lines) + "\n")
    SHARED_ENV.chmod(0o600)


def check_rotation_needed(env):
    """Identify keys approaching rotation deadline."""
    now = datetime.now()
    needs_rotation = []
    
    # Check from inventory for rotation dates
    if INVENTORY.exists():
        inventory_text = INVENTORY.read_text()
        for line in inventory_text.splitlines():
            if "|" in line and "2026-" in line:
                parts = [p.strip() for p in line.split("|")]
                if len(parts) >= 5:
                    key = parts[1]
                    rotation_due = parts[4] if len(parts) > 4 else None
                    if rotation_due and rotation_due.startswith("2026-"):
                        try:
                            due = datetime.strptime(rotation_due, "%Y-%m-%d")
                            days_until = (due - now).days
                            if days_until <= 7:
                                needs_rotation.append((key, days_until))
                        except ValueError:
                            pass
    
    # Also flag high-risk keys with placeholder values
    for key in HIGH_RISK_KEYS:
        value = env.get(key, "")
        if not value or value.startswith("UNVERIFIED") or "xxx" in value.lower():
            needs_rotation.append((key, -999))
    
    return needs_rotation


def run_rotation_audit():
    """Main audit entrypoint."""
    env = {}
    if SHARED_ENV.exists():
        for line in SHARED_ENV.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, _, v = line.partition("=")
                env[k.strip()] = v.strip()
    
    needs_rotation = check_rotation_needed(env)
    
    print("=" * 60)
    print("🔐 Secrets Rotation Audit")
    print("=" * 60)
    print(f"Time: {datetime.now().isoformat()}")
    print(f"Total keys in .env.shared: {len(env)}")
    print(f"Keys needing rotation: {len(needs_rotation)}")
    print()
    
    if needs_rotation:
        print("⚠️  Keys requiring immediate attention:")
        for key, days in sorted(needs_rotation, key=lambda x: x[1]):
            if days == -999:
                print(f"  ❌ {key} — MISSING/PLACEHOLDER (update required)")
            elif days <= 0:
                print(f"  🔴 {key} — OVERDUE by {-days} days")
            elif days <= 7:
                print(f"  🟡 {key} — Due in {days} days")
            else:
                print(f"  🟢 {key} — Due in {days} days")
    else:
        print("✅ All keys are current. No rotation needed at this time.")
    
    print()
    print(f"Backup dir: {BACKUP_DIR}")
    print(f"Log: {ROTATION_LOG}")
    print(f"Inventory: {INVENTORY}")
    
    return len(needs_rotation)


if __name__ == "__main__":
    issues = run_rotation_audit()
    sys.exit(1 if issues > 0 else 0)
