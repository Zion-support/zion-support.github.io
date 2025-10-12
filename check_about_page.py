#!/usr/bin/env python3

with open('app/about/page.tsx', 'r') as f:
    lines = f.readlines()

# Count opening and closing tags
print("=== Structure Analysis ===")
print(f"Total lines: {len(lines)}")

# Find React fragment markers
for i, line in enumerate(lines, 1):
    if '<>' in line or '</>' in line:
        print(f"Line {i}: {line.rstrip()}")

# Check the beginning structure
print("\n=== First 15 lines ===")
for i in range(min(15, len(lines))):
    print(f"{i+1:3}: {lines[i]}", end='')

# Check lines 100-111
print("\n=== Lines 100-111 ===")
for i in range(99, min(111, len(lines))):
    print(f"{i+1:3}: {lines[i]}", end='')
