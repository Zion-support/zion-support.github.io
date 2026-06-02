#!/usr/bin/env python3
with open('app/data/servicesData.ts', 'r') as f:
    lines = f.readlines()

# Find the line that contains "industry: 'General',\\n"
for i, line in enumerate(lines):
    if "industry: 'General',\\n" in line:
        # Replace with "industry: 'General',\n"
        lines[i] = line.replace("industry: 'General',\\n", "industry: 'General',\n")
        break

with open('app/data/servicesData.ts', 'w') as f:
    f.writelines(lines)

print("Fixed the extra backslash.")