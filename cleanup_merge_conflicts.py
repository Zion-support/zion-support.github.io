#!/usr/bin/env python3
import os
import re
import glob

def cleanup_merge_conflicts():
    """Remove merge conflict markers from all files"""
    
    # Find all TypeScript and JavaScript files
    patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    files = []
    
    for pattern in patterns:
        files.extend(glob.glob(pattern, recursive=True))
    
    cleaned_count = 0
    
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if file has merge conflict markers
            if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                print(f"Cleaning merge conflicts in {file_path}")
                
                # Remove merge conflict markers and keep only the content after =======
                lines = content.split('\n')
                cleaned_lines = []
                skip_until_equals = False
                
                for line in lines:
                    if line.strip() == '<<<<<<< HEAD':
                        skip_until_equals = True
                        continue
                    elif line.strip() == '=======':
                        skip_until_equals = False
                        continue
                    elif line.strip().startswith('>>>>>>> '):
                        continue
                    elif not skip_until_equals:
                        cleaned_lines.append(line)
                
                # Write cleaned content back
                cleaned_content = '\n'.join(cleaned_lines)
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(cleaned_content)
                
                cleaned_count += 1
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Cleaned merge conflicts in {cleaned_count} files")

if __name__ == "__main__":
    cleanup_merge_conflicts()