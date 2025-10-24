#!/usr/bin/env python3
"""
Script to fix remaining unescaped entities in React files.
"""

import os
import re
from pathlib import Path

def fix_unescaped_entities(file_path):
    """Fix unescaped entities in JSX content only."""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Only fix unescaped entities in JSX content, not in import statements or attributes
    # Look for text content between JSX tags
    
    # Fix apostrophes in text content (but not in attributes or imports)
    # This is a more careful approach
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Skip import lines and attribute lines
        if 'import ' in line or 'from ' in line or '=' in line and ('"' in line or "'" in line):
            fixed_lines.append(line)
            continue
        
        # Fix apostrophes in text content
        # Look for patterns like: >text with 'apostrophe'<
        line = re.sub(r'>([^<]*?)\'([^<]*?)<', r'>\1&apos;\2<', line)
        
        # Fix quotes in text content
        # Look for patterns like: >text with "quotes"<
        line = re.sub(r'>([^<]*?)"([^<]*?)<', r'>\1&quot;\2<', line)
        
        fixed_lines.append(line)
    
    content = '\n'.join(fixed_lines)
    
    # Write the fixed content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    """Main function to fix remaining unescaped entities."""
    
    # Get list of files with unescaped entities from lint output
    import subprocess
    
    try:
        result = subprocess.run(['npm', 'run', 'lint'], cwd='/workspace', capture_output=True, text=True)
        output = result.stdout + result.stderr
        
        # Extract file paths with unescaped entities
        files_with_issues = set()
        for line in output.split('\n'):
            if 'react/no-unescaped-entities' in line and './' in line:
                file_path = line.split('./')[1].split(':')[0]
                files_with_issues.add(f'/workspace/{file_path}')
        
        print(f"Found {len(files_with_issues)} files with unescaped entities")
        
        fixed_count = 0
        for file_path in files_with_issues:
            try:
                if fix_unescaped_entities(file_path):
                    fixed_count += 1
                    print(f"Fixed unescaped entities in: {file_path}")
            except Exception as e:
                print(f"Error processing {file_path}: {e}")
        
        print(f"\nFixed unescaped entities in {fixed_count} files")
        
    except Exception as e:
        print(f"Error running linter: {e}")

if __name__ == '__main__':
    main()