#!/usr/bin/env python3
import sys

# Read the file
with open('tsconfig.json', 'r') as f:
    lines = f.readlines()

# Process lines to remove conflict markers
result_lines = []
in_conflict = False
in_ours = False
skip_mode = False

for line in lines:
    # Check for conflict markers
    if line.startswith('<<<<<<<'):
        in_conflict = True
        in_ours = True
        skip_mode = True
        continue
    elif line.startswith('=======') and in_conflict:
        in_ours = False
        skip_mode = False
        continue
    elif line.startswith('>>>>>>>') and in_conflict:
        in_conflict = False
        in_ours = False
        skip_mode = False
        continue
    
    # Skip HEAD version, keep theirs version
    if in_conflict:
        if not skip_mode:
            result_lines.append(line)
    else:
        result_lines.append(line)

# Write the resolved content
with open('tsconfig.json', 'w') as f:
    f.writelines(result_lines)

print("Conflicts resolved successfully!")