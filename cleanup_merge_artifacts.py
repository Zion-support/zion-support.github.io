#!/usr/bin/env python3
import os
import re
import glob

def clean_merge_artifacts(file_path):
    """Clean up merge conflict artifacts and syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove merge conflict markers and artifacts
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>>', '', content, flags=re.DOTALL)
        
        # Remove orphaned branch names
        content = re.sub(r'\s+origin/cursor/fix-errors-and-merge-to-main-[a-f0-9]+\s*', '', content)
        
        # Fix common syntax issues
        # Fix missing semicolons before branch names
        content = re.sub(r'(\])\s+origin/[^\s]+', r'\1;', content)
        
        # Fix JSX syntax issues
        content = re.sub(r',\s*->\s*', ' -> ', content)
        content = re.sub(r'`\s*->\s*', ' -> ', content)
        content = re.sub(r'|\s*->\s*', ' -> ', content)
        
        # Fix missing closing tags
        content = re.sub(r'(\s*)\s*->\s*(\s*</div>)', r'\1\2', content)
        content = re.sub(r'(\s*)\s*->\s*(\s*</main>)', r'\1\2', content)
        content = re.sub(r'(\s*)\s*->\s*(\s*</>)', r'\1\2', content)
        
        # Fix orphaned closing tags
        content = re.sub(r'(\s*)\s*->\s*(\s*</[^>]+>)', r'\1\2', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Cleaned up {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all relevant files
    patterns = [
        './app/**/*.tsx',
        './app/**/*.ts',
        './components/**/*.tsx',
        './components/**/*.ts'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Processing {len(files_to_process)} files")
    
    cleaned_count = 0
    for file_path in files_to_process:
        if clean_merge_artifacts(file_path):
            cleaned_count += 1
    
    print(f"Cleaned up {cleaned_count} files")

if __name__ == "__main__":
    main()