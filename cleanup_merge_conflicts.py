#!/usr/bin/env python3
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean merge conflicts from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern to match merge conflicts and keep the content between <<<<<<< HEAD and =======
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?>>>>>>> [^\n]+\n'
        cleaned_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining merge conflict markers
        cleaned_content = re.sub(r'<<<<<<< HEAD\n?', '', cleaned_content)
        cleaned_content = re.sub(r'=======\n?', '', cleaned_content)
        cleaned_content = re.sub(r'>>>>>>> [^\n]+\n?', '', cleaned_content)
        
        # Clean up multiple empty lines
        cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)
        
        if content != cleaned_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            print(f"Cleaned merge conflicts in: {file_path}")
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
        '*.tsx',
        '*.ts',
        '*.js'
    ]
    
    files_processed = 0
    files_cleaned = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path) and not file_path.startswith('node_modules'):
                files_processed += 1
                if clean_merge_conflicts(file_path):
                    files_cleaned += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Cleaned merge conflicts in {files_cleaned} files")

if __name__ == "__main__":
    main()