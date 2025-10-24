#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_fragments(file_path):
    """Fix JSX fragment issues in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix JSX fragments that are not properly closed
        # Look for patterns like <Fragment>content</\s*$ or <Fragment>content\s*$
        content = re.sub(r'(<Fragment[^>]*>[^<]*)</\s*$', r'\1</Fragment>', content, flags=re.MULTILINE)
        content = re.sub(r'(<Fragment[^>]*>[^<]*)\s*$', r'\1</Fragment>', content, flags=re.MULTILINE)
        
        # Fix React.Fragment patterns
        content = re.sub(r'(<React\.Fragment[^>]*>[^<]*)</\s*$', r'\1</React.Fragment>', content, flags=re.MULTILINE)
        content = re.sub(r'(<React\.Fragment[^>]*>[^<]*)\s*$', r'\1</React.Fragment>', content, flags=re.MULTILINE)
        
        # Fix empty fragments
        content = re.sub(r'(<Fragment[^>]*>)</\s*$', r'\1</Fragment>', content, flags=re.MULTILINE)
        content = re.sub(r'(<React\.Fragment[^>]*>)</\s*$', r'\1</React.Fragment>', content, flags=re.MULTILINE)
        
        # Fix <> patterns
        content = re.sub(r'(<>[^<]*)</\s*$', r'\1</>', content, flags=re.MULTILINE)
        content = re.sub(r'(<>[^<]*)\s*$', r'\1</>', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX fragments in: {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix JSX fragments in all files"""
    print("Fixing JSX fragment issues...")
    
    # Find all TypeScript/JavaScript files
    patterns = ['**/*.tsx', '**/*.ts']
    files_to_fix = []
    
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and '.git' not in f]
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_jsx_fragments(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()
