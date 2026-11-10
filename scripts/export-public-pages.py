#!/usr/bin/env python3
"""Export public assets while omitting non-approved operational documents.

This is a publication filter, not a deletion or general-purpose PII scanner.
The input tree must remain quiescent during export.
"""
from pathlib import Path
import importlib.util
import shutil
import sys

spec = importlib.util.spec_from_file_location('publication_guard', Path(__file__).with_name('assert-no-private-ops.py'))
guard = importlib.util.module_from_spec(spec)
spec.loader.exec_module(guard)


def export(source, destination):
    source, destination = Path(source), Path(destination)
    if source.is_symlink() or not source.is_dir():
        raise ValueError('Invalid publication source')
    if destination.exists() or destination.is_symlink():
        raise ValueError('Publication destination already exists')
    if source.resolve() == destination.resolve() or source.resolve() in destination.resolve().parents:
        raise ValueError('Publication destination overlaps source')
    items = list(source.rglob('*'))
    # Reject every link before any copy, including aliases outside the ops tree.
    if any(item.is_symlink() or not (item.is_dir() or item.is_file()) for item in items):
        raise ValueError('Links or special source files rejected')
    excluded = set(guard.violations(source))
    destination.mkdir(parents=True)
    copied = 0
    for item in items:
        rel = item.relative_to(source)
        if str(rel) in excluded or item.is_dir():
            continue
        target = destination / rel
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(item, target, follow_symlinks=False)
        copied += 1
    if guard.violations(destination):
        raise ValueError('Publication boundary validation failed')
    return copied, len(excluded)


if __name__ == '__main__':
    if len(sys.argv) != 3:
        sys.exit('Usage: export-public-pages.py SOURCE DESTINATION')
    try:
        copied, excluded = export(*sys.argv[1:])
    except Exception:
        sys.exit('Publication export rejected; no artifact may be uploaded.')
    print(f'Exported {copied} public files; omitted {excluded} non-approved operational files.')
