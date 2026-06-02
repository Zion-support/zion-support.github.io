#!/usr/bin/env python3
with open('app/data/servicesData.ts', 'r') as f:
    lines = f.readlines()

# Fix line 7986 (0-indexed 7985)
if len(lines) > 7985:
    line = lines[7985]
    # Replace ",n  }" with ",  }"
    if ",n  }" in line:
        lines[7985] = line.replace(",n  }", ",  }")
        print("Fixed line 7986")

with open('app/data/servicesData.ts', 'w') as f:
    f.writelines(lines)