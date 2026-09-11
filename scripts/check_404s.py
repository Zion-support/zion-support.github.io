#!/usr/bin/env python3
"""Monitor 404s for ziontechgroup.com GitHub Pages"""

import json
import subprocess
from datetime import datetime

ENDPOINTS = [
    "/hermes-agents", "/help", "/documentation", "/docs",
    "/hermes-agents/", "/help/", "/documentation/", "/docs/",
    "/consultation", "/support"
]

BASE_URL = "https://ziontechgroup.com"

def check_endpoint(endpoint):
    """Return HTTP status code for endpoint"""
    url = BASE_URL + endpoint
    try:
        result = subprocess.run(
            ["curl", "-s", "-o", "/dev/null", "-w", "%{http_code}",
             "--connect-timeout", "5", "--max-time", "10", url],
            capture_output=True, text=True, timeout=15
        )
        return int(result.stdout.strip())
    except Exception as e:
        return 0  # ERROR

def main():
    results = []
    for endpoint in ENDPOINTS:
        status = check_endpoint(endpoint)
        results.append({"endpoint": endpoint, "status": status})

    report = {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "base_url": BASE_URL,
        "checked_endpoints": results,
        "404_found": [r for r in results if r["status"] == 404],
        "total_checked": len(ENDPOINTS),
        "total_404s": len([r for r in results if r["status"] == 404])
    }

    with open("scripts/404_report.json", "w") as f:
        json.dump(report, f, indent=2)

    print(json.dumps(report, indent=2))
    return report

if __name__ == "__main__":
    main()