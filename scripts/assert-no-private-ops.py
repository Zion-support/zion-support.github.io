#!/usr/bin/env python3
"""Fail closed on known private ops artifacts in publication trees; not a PII scanner."""
from pathlib import Path
import sys
BLOCKED = {"ceo-ops.md", "status.md", "log.json", "state.json", "agents.json", "presence.json", "roster.json"}
def violations(root):
    root = Path(root)
    if not root.is_dir():
        return ["missing publication tree"]
    hits = []
    for item in root.rglob("*"):
        rel = item.relative_to(root)
        parts = [part.lower() for part in rel.parts]
        if any(parts[i:i+2] == ["ops", "comms"] for i in range(len(parts)-2)) and parts[-1] in BLOCKED:
            hits.append(str(rel))
    return sorted(hits)
if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("Usage: assert-no-private-ops.py PUBLICATION_TREE")
    found = violations(sys.argv[1])
    if found:
        print("ERROR: known private ops artifacts are forbidden in publication trees:", file=sys.stderr)
        for path in found:
            print(path, file=sys.stderr)
        sys.exit(1)
    print("OK: no known private ops artifacts in publication tree")
