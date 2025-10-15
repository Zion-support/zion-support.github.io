#!/usr/bin/env python3

print("=== Full ErrorBoundary.tsx ===")
with open('app/components/ErrorBoundary.tsx', 'r') as f:
    lines = f.readlines()
    for i, line in enumerate(lines, 1):
        print(f"{i:3}: {line}", end='')
