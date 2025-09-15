#!/usr/bin/env python3

import os
import re

def fix_merge_conflicts():
    """Fix merge conflicts in the repository"""
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Files that commonly have merge conflicts
    files_to_check = [
        'app/page.tsx',
        'app/layout.tsx',
        'package.json',
        'components/AdvancedHero.tsx'
    ]
    
    for file_path in files_to_check:
        if os.path.exists(file_path):
            print(f"Checking {file_path} for conflicts...")
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check for conflict markers
                if '                    print(f"Found conflicts in {file_path}, resolving...")
                    
                    # Remove conflict markers and keep both versions
                    content = re.sub(r'                    content = re.sub(r'                    content = re.sub(r'                    
                    # Write back the cleaned content
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    
                    print(f"Resolved conflicts in {file_path}")
                else:
                    print(f"No conflicts in {file_path}")
                    
            except Exception as e:
                print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    fix_merge_conflicts()
    print("Merge conflict resolution completed.")