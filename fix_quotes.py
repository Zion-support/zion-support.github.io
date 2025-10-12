#!/usr/bin/env python3
"""
Fix escaped quotes and other character issues.
"""

import os
import re
import glob

def fix_quotes(file_path):
    """Fix quote issues in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix escaped single quotes
        content = content.replace("\\'", "'")
        content = content.replace('\\"', '"')
        
        # Fix other common character issues
        content = content.replace('"', '"').replace('"', '"')
        content = content.replace(''', "'").replace(''', "'")
        content = content.replace('…', '...')
        content = content.replace('–', '-').replace('—', '-')
        content = content.replace('•', '*')
        content = content.replace('→', '->')
        content = content.replace('←', '<-')
        content = content.replace('↑', '^')
        content = content.replace('↓', 'v')
        
        # Fix malformed imports
        content = re.sub(r"import\s+{\s*([^}]+)\s*}\s*from\s+\\'([^']+)\\'", r"import { \1 } from '\2'", content)
        content = re.sub(r"import\s+([^{][^\\']+)\s*from\s+\\'([^']+)\\'", r"import \1 from '\2'", content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files."""
    patterns = ['**/*.tsx', '**/*.ts', '**/*.jsx', '**/*.js']
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    files_to_process = [f for f in files_to_process if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', 'build', '.next', 'out'
    ])]
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_quotes(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Fixed quotes in {fixed_count} files")

if __name__ == "__main__":
    main()