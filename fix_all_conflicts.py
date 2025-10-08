#!/usr/bin/env python3
import os

def fix_merge_conflicts(filepath):
    """Fix merge conflicts by keeping HEAD version."""
    try:
        with open(filepath, 'r') as f:
            lines = f.readlines()
        
        result = []
        skip = False
        in_conflict = False
        
        i = 0
        while i < len(lines):
            line = lines[i]
            
            if line.startswith('<<<<<<< HEAD'):
                in_conflict = True
                i += 1
                continue
            elif line.startswith('=======') and in_conflict:
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
        
        if len(result) != len(lines):
            with open(filepath, 'w') as f:
                f.writelines(result)
            print(f"Fixed merge conflicts in {filepath}")
            return True
        return False
    except Exception as e:
        print(f"Error fixing {filepath}: {e}")
        return False

# Files to fix
files_to_fix = [
    'app/enterprise/page.tsx',
    'app/setupTests.tsx',
]

for filepath in files_to_fix:
    if os.path.exists(filepath):
        fix_merge_conflicts(filepath)
    else:
        print(f"File not found: {filepath}")