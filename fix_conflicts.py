#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove merge conflict markers and keep only HEAD content
    lines = content.split('\n')
    fixed_lines = []
    in_head = False
    in_conflict = False
    
    for line in lines:
        if line.startswith('<<<<<<< HEAD'):
            in_head = True
            in_conflict = True
            continue
        elif line.startswith('======='):
            in_head = False
            continue
        elif line.startswith('>>>>>>> '):
            in_conflict = False
            continue
        elif in_conflict and not in_head:
            continue
        else:
            fixed_lines.append(line)
    
    # Write fixed content back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(fixed_lines))
    
    print(f"Fixed: {file_path}")

# Find and fix all files with merge conflicts
for file_path in glob.glob('app/**/*.tsx', recursive=True):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            if '<<<<<<< HEAD' in content:
                fix_merge_conflicts(file_path)
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

print("All merge conflicts fixed!")
