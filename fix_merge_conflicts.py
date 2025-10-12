#!/usr/bin/env python3
import os
import re
import sys

def fix_merge_conflicts(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return False
        
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        keep_head = True
        
        for line in lines:
            if line.startswith('<<<<<<< HEAD'):
                in_conflict = True
                keep_head = True
                continue
            elif line.startswith('======='):
                keep_head = False
                continue
            elif line.startswith('>>>>>>>'):
                in_conflict = False
                keep_head = True
                continue
            elif in_conflict and not keep_head:
                continue
            else:
                fixed_lines.append(line)
        
        fixed_content = '\n'.join(fixed_lines)
        # Clean up multiple empty lines
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    fixed_count = 0
    for root, dirs, files in os.walk('.'):
        # Skip hidden directories and node_modules
        dirs[:] = [d for d in dirs if not d.startswith('.') and d != 'node_modules']
        
        for file in files:
            if file.endswith(('.ts', '.tsx', '.js', '.jsx')):
                file_path = os.path.join(root, file)
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
    
    print(f"\nProcessed {sum(1 for root, dirs, files in os.walk('.') for file in files if file.endswith(('.ts', '.tsx', '.js', '.jsx')))} files")
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == '__main__':
    main()