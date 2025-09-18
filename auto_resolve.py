#!/usr/bin/env python3
import os
import re
import glob

def resolve_file(file_path):
    """Resolve conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Processing: {file_path}")
        
        # Remove everything between ======= and >>>>>>> markers
        content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Remove remaining <<<<<<< HEAD markers
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error: {e}")
        return False

# Process all TypeScript/JavaScript files
patterns = ['src/**/*.tsx', 'src/**/*.ts', 'src/**/*.jsx', 'src/**/*.js']
resolved = 0

for pattern in patterns:
    for file_path in glob.glob(pattern, recursive=True):
        if 'backup' not in file_path and 'node_modules' not in file_path:
            if resolve_file(file_path):
                resolved += 1

print(f"Resolved conflicts in {resolved} files")