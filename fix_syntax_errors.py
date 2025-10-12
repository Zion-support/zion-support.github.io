#!/usr/bin/env python3
"""
Script to fix common syntax errors after merge conflict resolution.
"""

import os
import re
from pathlib import Path

def fix_syntax_errors(file_path):
    """Fix common syntax errors in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix orphaned JSX fragments
        content = re.sub(r'^\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix orphaned closing tags at the end of files
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix missing closing div tags
        # Count opening and closing divs
        open_divs = content.count('<div')
        close_divs = content.count('</div>')
        
        # If there are more opening divs than closing, add missing ones
        if open_divs > close_divs:
            missing_divs = open_divs - close_divs
            # Add missing closing divs before the last closing tags
            content = re.sub(r'(\s*)(</[^>]+>\s*)*$', r'\1' + '</div>\n' * missing_divs + r'\2', content)
        
        # Fix orphaned closing braces
        content = re.sub(r'^\s*}\s*$', '', content, flags=re.MULTILINE)
        
        # Fix orphaned semicolons
        content = re.sub(r'^\s*;\s*$', '', content, flags=re.MULTILINE)
        
        # Fix orphaned parentheses
        content = re.sub(r'^\s*\)\s*$', '', content, flags=re.MULTILINE)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        # Remove trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript/JavaScript files."""
    # Get list of all TS/JS files
    result = os.popen('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules').read()
    
    files = [f.strip() for f in result.split('\n') if f.strip()]
    
    print(f"Processing {len(files)} files for syntax errors...")
    
    fixed_count = 0
    for file_path in files:
        if fix_syntax_errors(file_path):
            fixed_count += 1
    
    print(f"Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()