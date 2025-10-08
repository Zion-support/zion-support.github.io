#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping HEAD version
"""

import re
import sys
from pathlib import Path

def resolve_conflicts(file_path):
    """Resolve merge conflicts in a file by keeping HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflicts
        if '<<<<<<< HEAD' not in content:
            print(f"No conflicts found in {file_path}")
            return False
        
        # Pattern to match conflict markers
        # <<<<<<< HEAD
        # content to keep
        # =======
        # content to discard
        # >>>>>>> hash or branch name
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
        
        # Replace conflicts with HEAD version
        resolved_content = re.sub(
            pattern,
            r'\1\n',
            content,
            flags=re.DOTALL
        )
        
        # Write resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"✓ Resolved conflicts in {file_path}")
        return True
    
    except Exception as e:
        print(f"✗ Error resolving {file_path}: {e}")
        return False

def main():
    files_to_fix = [
        'app/App.tsx',
        'app/components/AccessibilityEnhancer.tsx',
        'app/components/ErrorBoundary.tsx',
        'app/enterprise/page.tsx',
        'app/setupTests.tsx',
    ]
    
    fixed_count = 0
    for file_path in files_to_fix:
        full_path = Path(file_path)
        if full_path.exists():
            if resolve_conflicts(full_path):
                fixed_count += 1
        else:
            print(f"File not found: {file_path}")
    
    print(f"\n{fixed_count} files resolved successfully")

if __name__ == '__main__':
    main()