#!/usr/bin/env python3
"""
Script to fix JSX errors in React files
"""
import os
import re
import glob

def fix_jsx_errors(file_path):
    """Fix JSX errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print(f"Fixing JSX errors in {file_path}")
        
        # Remove any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>> cursor/fix-errors-and-merge-to-main-[a-f0-9]+.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>> f7c4928b2138abffab75f9beb3ca62b8e0c3452d.*?\n', '', content, flags=re.DOTALL)
        
        # Fix common JSX issues
        # Remove any stray characters that might be causing issues
        content = re.sub(r'[^\x00-\x7F]+', '', content)  # Remove non-ASCII characters
        
        # Ensure proper JSX structure
        # Fix unclosed tags by ensuring proper nesting
        lines = content.split('\n')
        fixed_lines = []
        open_tags = []
        
        for line in lines:
            # Track opening tags
            opening_tags = re.findall(r'<(\w+)(?:\s[^>]*)?(?:>|/>)', line)
            for tag in opening_tags:
                if not line.strip().endswith('/>'):
                    open_tags.append(tag)
            
            # Track closing tags
            closing_tags = re.findall(r'</(\w+)>', line)
            for tag in closing_tags:
                if tag in open_tags:
                    open_tags.remove(tag)
            
            fixed_lines.append(line)
        
        # Add missing closing tags at the end
        while open_tags:
            tag = open_tags.pop()
            fixed_lines.append(f'</{tag}>')
        
        content = '\n'.join(fixed_lines)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all JSX errors"""
    # Find all TypeScript/React files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_jsx_errors(file_path):
                    files_fixed += 1
    
    print(f"Fixed JSX errors in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()