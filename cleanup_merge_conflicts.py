#!/usr/bin/env python3
"""
Script to clean up merge conflict markers from the codebase
"""
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean merge conflict markers from a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern to match merge conflict blocks
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n'
        
        # Replace with just the HEAD content
        cleaned_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        cleaned_content = re.sub(r'<<<<<<< HEAD\n', '', cleaned_content)
        cleaned_content = re.sub(r'=======\n', '', cleaned_content)
        cleaned_content = re.sub(r'>>>>>>> [^\n]+\n', '', cleaned_content)
        
        # Clean up any duplicate lines that might have been created
        lines = cleaned_content.split('\n')
        seen_lines = set()
        unique_lines = []
        
        for line in lines:
            if line.strip() and line not in seen_lines:
                unique_lines.append(line)
                seen_lines.add(line)
            elif not line.strip():
                unique_lines.append(line)
        
        cleaned_content = '\n'.join(unique_lines)
        
        # Write back the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to clean all files"""
    # Get all TypeScript, JavaScript, and TSX files
    patterns = [
        '**/*.ts',
        '**/*.tsx', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and dist directories
            if 'node_modules' in file_path or 'dist' in file_path or '.next' in file_path:
                continue
                
            files_processed += 1
            print(f"Processing: {file_path}")
            
            if clean_merge_conflicts(file_path):
                files_fixed += 1
                print(f"  ✓ Fixed merge conflicts")
            else:
                print(f"  ✗ Failed to process")
    
    print(f"\nSummary:")
    print(f"Files processed: {files_processed}")
    print(f"Files fixed: {files_fixed}")

if __name__ == "__main__":
    main()