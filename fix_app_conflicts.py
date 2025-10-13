#!/usr/bin/env python3

with open('app/App.tsx', 'r') as f:
    lines = f.readlines()

result = []
skip = False
in_conflict = False

i = 0
while i < len(lines):
    line = lines[i]
    
<<<<<<< HEAD
    if line.startswith('') and in_conflict:
=======
    if line.startswith('        in_conflict = True
        i += 1
        continue
    elif line.startswith('') and in_conflict:
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
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