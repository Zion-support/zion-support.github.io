#!/usr/bin/env python3
"""Fail closed: only the public ops/comms index may enter a Pages artifact.

This is a narrow publication boundary, not a general-purpose PII scanner.
"""
from pathlib import Path
import sys

PUBLIC_OPS_FILES = {"index.html"}


def violations(root):
    root = Path(root)
    if not root.is_dir():
        return ["missing publication tree"]
    hits = []
    for item in root.rglob("*"):
        rel = item.relative_to(root)
        parts = [part.casefold() for part in rel.parts]
        for pos in range(len(parts) - 1):
            if parts[pos:pos + 2] != ["ops", "comms"]:
                continue
            suffix = parts[pos + 2:]
            # Direct index.html is the only reviewed public document.
            # Block nested aliases, files and symlinks; directories alone
            # contain no bytes and are ignored until they hold a file.
            if (item.is_symlink() or not item.is_dir()) and (
                len(suffix) != 1 or suffix[0] not in PUBLIC_OPS_FILES
                or item.is_symlink()
            ):
                hits.append(str(rel))
            break
    return sorted(hits)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("Usage: assert-no-private-ops.py PUBLICATION_TREE")
    found = violations(sys.argv[1])
    if found:
        print("ERROR: private operational files cannot be published:", file=sys.stderr)
        for path in found:
            print(path, file=sys.stderr)
        sys.exit(1)
    print("OK: public ops/comms contains only approved index.html")
