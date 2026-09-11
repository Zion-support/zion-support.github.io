#!/usr/bin/env python3
"""zion_email_interaction_agent.py - Email intelligence processing agent.

Delegates to automation/scripts/email_autopilot.py (gog-based, dry-run by default).
"""
import subprocess
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[3]
AUTOPILOT = REPO / "automation" / "scripts" / "email_autopilot.py"


def main():
    probe = subprocess.run(
        [
            "gog", "gmail", "search", "in:inbox", "--max", "1",
            "--plain", "--no-input", "--account", "kleber@ziontechgroup.com",
        ],
        capture_output=True, text=True, timeout=15,
    )
    if probe.returncode != 0 and not AUTOPILOT.exists():
        print("AUTH_BLOCKED: gog gmail probe failed and autopilot missing")
        return 1

    cmd = [sys.executable, str(AUTOPILOT), "--max", "25", "--hot-max", "8"]
    run = subprocess.run(cmd, cwd=str(REPO))
    return run.returncode


if __name__ == "__main__":
    sys.exit(main())
