#!/usr/bin/env python3
"""
Script to automatically fix merge conflicts in files
"""
import re
import os

def fix_merge_conflicts(file_path, strategy='ours'):
    """
    Fix merge conflicts in a file using the specified strategy.
    strategy: 'ours' (keep HEAD), 'theirs' (keep incoming), or 'both' (keep both)
    """
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return False
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if there are merge conflicts
    if '<<<<<<< HEAD' not in content:
        print(f"No merge conflicts found in {file_path}")
        return False
    
    lines = content.split('\n')
    result = []
    in_conflict = False
    in_ours = False
    in_theirs = False
    conflict_start = 0
    
    for i, line in enumerate(lines):
        if line.startswith('<<<<<<< HEAD'):
            in_conflict = True
            in_ours = True
            conflict_start = i
        elif line.startswith('=======') and in_conflict:
            in_ours = False
            in_theirs = True
        elif line.startswith('>>>>>>>') and in_conflict:
            in_conflict = False
            in_theirs = False
        elif not in_conflict:
            result.append(line)
        elif strategy == 'ours' and in_ours:
            result.append(line)
        elif strategy == 'theirs' and in_theirs:
            result.append(line)
        elif strategy == 'both':
            if not line.startswith('<<<<<<< HEAD') and not line.startswith('=======') and not line.startswith('>>>>>>>'):
                result.append(line)
    
    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(result))
    
    print(f"Fixed merge conflicts in {file_path} using strategy '{strategy}'")
    return True

# Files to fix
files_to_fix = [
    ('app/setupTests.tsx', 'theirs'),  # Use theirs as it has more complete setup
    ('app/utils/performanceOptimizer.ts', 'ours'),  # Use ours as it's more recent
    ('App.tsx', 'ours'),  # Use ours
]

print("Starting merge conflict resolution...")
for file_path, strategy in files_to_fix:
    try:
        fix_merge_conflicts(file_path, strategy)
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")

print("Done!")