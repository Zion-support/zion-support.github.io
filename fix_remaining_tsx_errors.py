#!/usr/bin/env python3

# First, let's read and analyze the problematic files
print("=== Analyzing about/page.tsx ===")
with open('app/about/page.tsx', 'r') as f:
    about_lines = f.readlines()
    print(f"Total lines: {len(about_lines)}")
    print("\nLast 15 lines:")
    for i in range(max(0, len(about_lines) - 15), len(about_lines)):
        print(f"{i+1:3}: {about_lines[i]}", end='')

print("\n\n=== Analyzing ErrorBoundary.tsx ===")
with open('app/components/ErrorBoundary.tsx', 'r') as f:
    eb_lines = f.readlines()
    print(f"Total lines: {len(eb_lines)}")
    print("\nLines 105-120:")
    for i in range(104, min(120, len(eb_lines))):
        print(f"{i+1:3}: {eb_lines[i]}", end='')
