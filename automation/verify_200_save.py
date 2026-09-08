from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path


def main() -> None:
    repo_root = Path(__file__).resolve().parent.parent
    report_path = repo_root / "automation" / "reports" / "verify-200-latest.json"
    script_path = repo_root / "automation" / "verify_200.py"

    proc = subprocess.run([sys.executable, str(script_path)], capture_output=True, text=True)
    stdout = proc.stdout
    stderr = proc.stderr
    exit_code = proc.returncode

    lines = stdout.splitlines()
    results = []
    current_section = "UNKNOWN"
    for line in lines:
        stripped = line.strip()
        if stripped.startswith("## "):
            current_section = stripped.replace("## ", "", 1).strip()
            continue
        if not stripped or stripped == "PRIMARY" or stripped == "SECONDARY":
            continue
        parts = stripped.split("\t")
        if len(parts) >= 4 and parts[0].isdigit():
            results.append({
                "section": current_section,
                "status_code": int(parts[0]),
                "final_url": parts[1],
                "requested_url": parts[2],
                "title": parts[3].replace("title=", "", 1) if parts[3].startswith("title=") else parts[3],
                "canonical": parts[4].replace("canonical=", "", 1) if len(parts) > 4 and parts[4].startswith("canonical=") else (parts[4] if len(parts) > 4 else ""),
            })
        elif stripped.startswith("ERR"):
            results.append({
                "section": current_section,
                "error": "\t".join(parts[1:]) if len(parts) > 1 else stripped,
            })

    payload = {
        "exit_code": exit_code,
        "broken_routes": [],
        "results": results,
    }
    for item in results:
        if item.get("status_code") not in (200,) and "error" not in item:
            payload["broken_routes"].append({
                "section": item.get("section"),
                "status_code": item.get("status_code"),
                "requested_url": item.get("requested_url"),
                "final_url": item.get("final_url"),
                "title": item.get("title"),
                "canonical": item.get("canonical"),
            })

    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Saved report: {report_path}")
    print(f"Broken routes: {len(payload['broken_routes'])}")
    if payload["broken_routes"]:
        for broken in payload["broken_routes"][:20]:
            print(json.dumps(broken, ensure_ascii=False))


if __name__ == "__main__":
    main()
