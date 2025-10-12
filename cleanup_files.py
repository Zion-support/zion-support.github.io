#!/usr/bin/env python3
import os
import re
import glob

def cleanup_file(file_path):
    """Clean up merge conflict artifacts and syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove branch names that got left behind
        content = re.sub(r'^\s*cursor/[^\n]+\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*origin/[^\n]+\n', '', content, flags=re.MULTILINE)
        
        # Remove any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>>.*?', '', content, flags=re.DOTALL)
        content = re.sub(r'^<<<<<<< HEAD.*?\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^=======.*?\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>>.*?\n', '', content, flags=re.MULTILINE)
        
        # Fix JSX structure issues - wrap adjacent elements in fragments
        # Look for patterns like: </div>\n      <Footer />
        content = re.sub(r'(\s*</div>\s*)\n(\s*<Footer />\s*)', r'\1\n      <>\n\2\n      </>', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\n\n+', '\n\n', content)
        content = re.sub(r'^\s*\n', '', content, flags=re.MULTILINE)
        
        # Remove trailing commas before closing braces in objects
        content = re.sub(r',(\s*})', r'\1', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if cleanup_file(file_path):
                    files_fixed += 1
                    print(f"Cleaned up: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Cleaned up {files_fixed} files")

if __name__ == "__main__":
    main()