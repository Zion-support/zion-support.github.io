#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_simple(file_path):
    """Fix simple JSX issues in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix empty fragments that should be proper fragments
        content = re.sub(r'<></>', '<>', content)
        
        # Fix multiple JSX elements at root level by wrapping in fragment
        # Look for patterns like: return (\n    <Element1>\n    <Element2>
        content = re.sub(
            r'return \(\s*\n\s*<([^>]+)>\s*\n\s*<([^>]+)>',
            r'return (\n    <>\n    <\1>\n    <\2>',
            content,
            flags=re.MULTILINE
        )
        
        # Fix specific patterns where we have multiple elements
        # Pattern: <Element1>\n<Element2> (without proper wrapping)
        content = re.sub(
            r'(\s*)<([^>]+)>\s*\n\s*<([^>]+)>',
            r'\1<>\n\1<\2>\n\1<\3>',
            content,
            flags=re.MULTILINE
        )
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed simple JSX issues in: {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix simple JSX issues in all files"""
    print("Fixing simple JSX issues...")
    
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
        if fix_jsx_simple(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()
