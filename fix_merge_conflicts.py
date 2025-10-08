#!/usr/bin/env python3
import re
import sys

def fix_merge_conflicts(filepath):
    """Fix merge conflicts by keeping the origin/main version"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict blocks
        # We'll keep the section after =======  and before >>>>>>> origin/main
        
        # Remove simple conflict markers first
        lines = content.split('\n')
        cleaned_lines = []
        in_conflict = False
        in_ours = False
        in_theirs = False
        
        for line in lines:
            if line.startswith('<<<<<<<'):
                in_conflict = True
                in_ours = True
                continue
            elif line.startswith('======='):
                in_ours = False
                in_theirs = True
                continue
            elif line.startswith('>>>>>>>'):
                in_conflict = False
                in_theirs = False
                continue
            
            # Keep the theirs (origin/main) version
            if not in_conflict:
                cleaned_lines.append(line)
            elif in_theirs:
                cleaned_lines.append(line)
        
        result = '\n'.join(cleaned_lines)
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(result)
        
        print(f"Fixed: {filepath}")
        return True
    except Exception as e:
        print(f"Error fixing {filepath}: {e}")
        return False

if __name__ == '__main__':
    files = [
        '/workspace/api/subscribe.js',
        '/workspace/api/wallet.js',
    ]
    
    for f in files:
        fix_merge_conflicts(f)