#!/usr/bin/env python3
"""
Script to clean up merge conflict markers from files
"""
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean merge conflict markers from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflict markers
        if '<<<<<<<' not in content and '=======' not in content and '>>>>>>>' not in content:
            return False
        
        # Split content by merge conflict markers
        lines = content.split('\n')
        cleaned_lines = []
        in_conflict = False
        conflict_depth = 0
        
        for line in lines:
            if line.strip().startswith('<<<<<<<'):
                in_conflict = True
                conflict_depth += 1
                continue
            elif line.strip().startswith('======='):
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                conflict_depth -= 1
                continue
            elif not in_conflict:
                cleaned_lines.append(line)
        
        # Write cleaned content back
        cleaned_content = '\n'.join(cleaned_lines)
        
        # Remove any remaining conflict markers that might have been missed
        cleaned_content = re.sub(r'^<<<<<<<.*$', '', cleaned_content, flags=re.MULTILINE)
        cleaned_content = re.sub(r'^=======.*$', '', cleaned_content, flags=re.MULTILINE)
        cleaned_content = re.sub(r'^>>>>>>>.*$', '', cleaned_content, flags=re.MULTILINE)
        
        # Clean up multiple empty lines
        cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to clean up merge conflicts"""
    # Focus on main app files first
    app_patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'utils/**/*.tsx'
    ]
    
    cleaned_files = []
    
    for pattern in app_patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if clean_merge_conflicts(file_path):
                cleaned_files.append(file_path)
                print(f"Cleaned: {file_path}")
    
    print(f"\nCleaned {len(cleaned_files)} files with merge conflicts")
    return cleaned_files

if __name__ == "__main__":
    main()