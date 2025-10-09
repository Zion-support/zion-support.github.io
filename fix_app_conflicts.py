#!/usr/bin/env python3

with open('app/App.tsx', 'r') as f:
    lines = f.readlines()

result = []
skip = False
in_conflict = False

i = 0
while i < len(lines):
    line = lines[i]

    if line.startswith('') and in_conflict:
        skip = True
        i += 1
        continue
    elif line.startswith('>>>>>>>') and in_conflict:
        in_conflict = False
        skip = False
        i += 1
        continue

    if not skip:
        result.append(line)

    i += 1

with open('app/App.tsx', 'w') as f:
    f.writelines(result)

print("Fixed merge conflicts in app/App.tsx")