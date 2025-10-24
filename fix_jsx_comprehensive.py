#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_tags(file_path):
    """Fix JSX tag issues in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix the specific pattern: <tag>content</\s*$
        content = re.sub(r'(<[^>]*>[^<]*)\s*</\s*$', r'\1</h1>', content, flags=re.MULTILINE)
        
        # Fix unclosed tags at end of lines
        content = re.sub(r'(<h[1-6][^>]*>[^<]*)\s*$', r'\1</h1>', content, flags=re.MULTILINE)
        content = re.sub(r'(<p[^>]*>[^<]*)\s*$', r'\1</p>', content, flags=re.MULTILINE)
        content = re.sub(r'(<button[^>]*>[^<]*)\s*$', r'\1</button>', content, flags=re.MULTILINE)
        content = re.sub(r'(<div[^>]*>[^<]*)\s*$', r'\1</div>', content, flags=re.MULTILINE)
        
        # Fix specific patterns that are common
        content = re.sub(r'(\s*</\s*$)', '', content, flags=re.MULTILINE)
        
        # Fix missing closing tags for common patterns
        content = re.sub(r'(<h[1-6][^>]*>[^<]*)\s*$', r'\1</h1>', content, flags=re.MULTILINE)
        content = re.sub(r'(<p[^>]*>[^<]*)\s*$', r'\1</p>', content, flags=re.MULTILINE)
        content = re.sub(r'(<button[^>]*>[^<]*)\s*$', r'\1</button>', content, flags=re.MULTILINE)
        content = re.sub(r'(<div[^>]*>[^<]*)\s*$', r'\1</div>', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix JSX tags in all files"""
    print("Fixing JSX tag issues...")
    
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
        if fix_jsx_tags(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()
