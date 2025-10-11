#!/usr/bin/env python3
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean merge conflict markers from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the content after the last =======
        # This is a simple approach - keep everything after the last ======= marker
        lines = content.split('\n')
        cleaned_lines = []
        skip_until_end = False
        
        for line in lines:
            if line.strip().startswith('<<<<<<<'):
                skip_until_end = True
                continue
            elif line.strip().startswith('======='):
                # Found the separator, now look for the end
                continue
            elif line.strip().startswith('>>>>>>>'):
                skip_until_end = False
                continue
            elif not skip_until_end:
                cleaned_lines.append(line)
        
        # If we still have content, write it back
        if cleaned_lines:
            cleaned_content = '\n'.join(cleaned_lines)
            # Remove any empty lines at the end
            cleaned_content = cleaned_content.rstrip() + '\n'
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            return True
        else:
            # If no content left, delete the file
            os.remove(file_path)
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    files_cleaned = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            # Check if file has merge conflicts
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<<' in content or '=======' in content or '>>>>>>>' in content:
                        print(f"Processing: {file_path}")
                        files_processed += 1
                        if clean_merge_conflicts(file_path):
                            files_cleaned += 1
                            print(f"  ✓ Cleaned: {file_path}")
                        else:
                            print(f"  ✗ Deleted (empty): {file_path}")
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"\nSummary:")
    print(f"Files processed: {files_processed}")
    print(f"Files cleaned: {files_cleaned}")

if __name__ == "__main__":
    main()