#!/usr/bin/env python3
import os
import glob
import re

def fix_corrupted_component(file_path):
    """Fix common corruption patterns in component files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if file is already clean
        if 'error TS' not in content and 'error TS' not in content:
            return False
            
        # Common fixes for corrupted files
        fixes = [
            # Fix malformed function declarations
            (r'const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{\s*\}', r'const \1: React.FC = () => {\n  return null;\n};'),
            # Fix malformed JSX
            (r'return\s*\(\s*<>\s*</>\s*\)', r'return (\n    <>\n      <div>Component content</div>\n    </>\n  );'),
            # Fix malformed imports
            (r'import\s+React\s+from\s+\'react\'\'\s*$', r'import React from \'react\';'),
            # Fix malformed interfaces
            (r'interface\s+(\w+)\s*\{\s*\}\s*(\w+)', r'interface \1 {\n  // Add properties here\n}\n\nconst \2'),
            # Fix malformed exports
            (r'export\s+default\s+(\w+)\s*$', r'export default \1;'),
        ]
        
        original_content = content
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
        
        # If content changed, write it back
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed corrupted component: {file_path}")
            return True
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all component files
    patterns = [
        'app/components/*.tsx',
        'app/components/*.ts'
    ]
    
    files_fixed = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern):
            if fix_corrupted_component(file_path):
                files_fixed += 1
    
    print(f"Fixed {files_fixed} corrupted component files")

if __name__ == "__main__":
    main()