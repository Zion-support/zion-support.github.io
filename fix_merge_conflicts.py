#!/usr/bin/env python3
import re
import sys

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts by keeping HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict blocks
        # We'll keep the HEAD version (first option)
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+\n?'
        
        # Replace with HEAD version
        resolved = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle nested conflicts
        pattern2 = r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+\n?>>>>>>> [^\n]+\n?'
        resolved = re.sub(pattern2, r'\1\n', resolved, flags=re.DOTALL)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved)
        
        print(f"Fixed {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

# Files to fix
files = [
    'app/App.tsx',
    'app/components/AccessibilityEnhancer.tsx',
    'app/components/ErrorBoundary.tsx',
    'app/enterprise/page.tsx',
    'app/setupTests.tsx'
]

for file in files:
    resolve_merge_conflicts(file)