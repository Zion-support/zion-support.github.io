#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the HEAD version and removing conflict markers."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< [^\n]+\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_jsx_syntax_errors(file_path):
    """Fix common JSX syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix unclosed JSX tags - this is complex, so we'll handle specific patterns
        # Fix missing closing tags for common elements
        fixes = [
            # Fix unclosed Helmet tags
            (r'<Helmet>([^<]*)', r'<Helmet>\1</Helmet>'),
            # Fix unclosed div tags (basic pattern)
            (r'<div([^>]*)>([^<]*)', r'<div\1>\2</div>'),
            # Fix missing semicolons after imports
            (r'import ([^;]+)\n', r'import \1;\n'),
            # Fix missing closing fragments
            (r'<>([^<]*)', r'<>\1</>'),
        ]
        
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing JSX in {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'utils/**/*.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                print(f"Processing: {file_path}")
                
                # Fix merge conflicts first
                if fix_merge_conflicts(file_path):
                    files_fixed += 1
                
                # Then fix JSX syntax
                fix_jsx_syntax_errors(file_path)
    
    print(f"Processed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()