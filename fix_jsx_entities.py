#!/usr/bin/env python3
"""
Script to fix unescaped entities in JSX content only, not in JavaScript strings.
"""

import os
import re
import glob

def fix_file(file_path):
    """Fix unescaped entities in JSX content only."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # First, restore any broken syntax from previous scripts
        content = content.replace('&apos;', "'")
        content = content.replace('&quot;', '"')
        
        # Fix unescaped entities in JSX content only
        # Look for patterns like: >text with 'quotes'< or >text with "quotes"<
        # But not in JavaScript string literals
        
        # Fix quotes in JSX text content (between > and <)
        def fix_jsx_quotes(match):
            text = match.group(1)
            # Only fix if it's not already escaped and not in a code context
            if '&apos;' not in text and '&quot;' not in text:
                # Check if this is actually JSX text content, not a JavaScript string
                # Look for patterns that suggest JSX text content
                if not (text.strip().startswith("'") and text.strip().endswith("'")) and \
                   not (text.strip().startswith('"') and text.strip().endswith('"')):
                    text = text.replace("'", "&apos;")
                    text = text.replace('"', "&quot;")
            return f">{text}<"
        
        # Fix quotes in JSX text content
        content = re.sub(r'>([^<]*[\'"][^<]*)<', fix_jsx_quotes, content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX entities: {file_path}")
            return True
        else:
            print(f"No JSX entity fixes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files."""
    # Find all TypeScript/TSX files
    patterns = [
        'src/**/*.tsx',
        'app/**/*.tsx',
        'components/**/*.tsx',
        '**/*.tsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates
    files_to_fix = list(set(files_to_fix))
    
    print(f"Found {len(files_to_fix)} files to check...")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files_to_fix)} files checked.")

if __name__ == "__main__":
    main()