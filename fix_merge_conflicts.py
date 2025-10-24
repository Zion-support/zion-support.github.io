#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the HEAD version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by keeping HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n?'
        cleaned_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflicts
        # Remove any remaining conflict markers
        cleaned_content = re.sub(r'<<<<<<< HEAD\n?', '', cleaned_content)
        cleaned_content = re.sub(r'=======\n?', '', cleaned_content)
        cleaned_content = re.sub(r'>>>>>>> [^\n]+\n?', '', cleaned_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_unterminated_strings(file_path):
    """Fix unterminated string literals by adding missing quotes"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has unterminated strings
        if 'Error: Parsing error: Unterminated string literal' in content:
            return False
        
        # Look for common patterns of unterminated strings
        # Pattern 1: Missing closing quote at the beginning
        if content.startswith('"') and not content.startswith('""'):
            # Find the first newline and add a closing quote
            first_newline = content.find('\n')
            if first_newline > 0:
                content = '"' + content[1:first_newline] + '"\n' + content[first_newline+1:]
        
        # Pattern 2: Missing opening quote
        if content.startswith('import') and '"' not in content.split('\n')[0]:
            first_line = content.split('\n')[0]
            if 'from' in first_line:
                parts = first_line.split('from')
                if len(parts) == 2:
                    content = parts[0] + 'from "' + parts[1].strip() + '"\n' + '\n'.join(content.split('\n')[1:])
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed unterminated strings in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    conflicts_fixed = 0
    strings_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                
                # Fix merge conflicts
                if fix_merge_conflicts(file_path):
                    conflicts_fixed += 1
                
                # Fix unterminated strings
                if fix_unterminated_strings(file_path):
                    strings_fixed += 1
    
    print(f"\nSummary:")
    print(f"Files processed: {files_processed}")
    print(f"Merge conflicts fixed: {conflicts_fixed}")
    print(f"Unterminated strings fixed: {strings_fixed}")

if __name__ == "__main__":
    main()