#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        # Fix common merge conflict patterns
        # Pattern 1: Keep both imports
        content = re.sub(
            r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+',
            r'\1\n\2',
            content,
            flags=re.DOTALL
        )
        
        # Pattern 2: Keep the newer version (after =======)
        content = re.sub(
            r'<<<<<<< HEAD\n.*?\n=======\n(.*?)\n>>>>>>> [^\n]+',
            r'\1',
            content,
            flags=re.DOTALL
        )
        
        # Pattern 3: Keep the older version (before =======)
        content = re.sub(
            r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+',
            r'\1',
            content,
            flags=re.DOTALL
        )
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Critical files to fix first
    critical_files = [
        'App.tsx',
        'app/page.tsx',
        'app/components/Navigation.tsx',
        'app/components/PerformanceOptimizer.tsx',
        'app/consultation/page.tsx',
        'app/micro-saas/page.tsx'
    ]
    
    fixed_count = 0
    for file_path in critical_files:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                print(f"Fixed merge conflicts in {file_path}")
                fixed_count += 1
            else:
                print(f"No conflicts found in {file_path}")
        else:
            print(f"File not found: {file_path}")
    
    print(f"Fixed {fixed_count} files with merge conflicts")

if __name__ == "__main__":
    main()