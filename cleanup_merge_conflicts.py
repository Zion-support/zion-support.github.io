#!/usr/bin/env python3
"""
Script to clean up merge conflict markers from files
"""
import os
import re
import glob
from pathlib import Path

def clean_merge_conflicts(file_path):
    """Clean merge conflict markers from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the HEAD version (first part)
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern = r'<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n.*?\n>>>>>>> [^\n]+\s*\n?'
        cleaned_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be just <<<<<<< without proper structure
        cleaned_content = re.sub(r'<<<<<<< [^\n]*\n.*?\n=======\s*\n.*?\n>>>>>>> [^\n]*\s*\n?', '', cleaned_content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        cleaned_content = re.sub(r'<<<<<<< [^\n]*\n.*?\n=======\s*\n.*?\n>>>>>>> [^\n]*\s*\n?', '', cleaned_content, flags=re.DOTALL)
        
        # Clean up any remaining standalone markers
        cleaned_content = re.sub(r'^<<<<<<< [^\n]*$', '', cleaned_content, flags=re.MULTILINE)
        cleaned_content = re.sub(r'^=======$', '', cleaned_content, flags=re.MULTILINE)
        cleaned_content = re.sub(r'^>>>>>>> [^\n]*$', '', cleaned_content, flags=re.MULTILINE)
        
        # Clean up multiple consecutive newlines
        cleaned_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', cleaned_content)
        
        # Write back the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        return True
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    # Get all files with merge conflicts
    print("Finding files with merge conflicts...")
    
    # Focus on critical files first
    critical_patterns = [
        'App.tsx',
        'app/page.tsx',
        'app/layout.tsx',
        'app/main.tsx',
        'app/components/*.tsx',
        'app/*/page.tsx'
    ]
    
    all_files = []
    for pattern in critical_patterns:
        files = glob.glob(pattern, recursive=True)
        all_files.extend(files)
    
    # Remove duplicates
    all_files = list(set(all_files))
    
    print(f"Found {len(all_files)} critical files to clean")
    
    cleaned_count = 0
    failed_count = 0
    
    for file_path in all_files:
        if os.path.exists(file_path):
            print(f"Cleaning {file_path}...")
            if clean_merge_conflicts(file_path):
                cleaned_count += 1
            else:
                failed_count += 1
    
    print(f"\nCleaned {cleaned_count} files successfully")
    print(f"Failed to clean {failed_count} files")
    
    # Now clean remaining files
    print("\nCleaning remaining files...")
    remaining_files = []
    for root, dirs, files in os.walk('.'):
        # Skip certain directories
        if any(skip in root for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
            continue
            
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx')):
                file_path = os.path.join(root, file)
                if file_path not in all_files:
                    remaining_files.append(file_path)
    
    print(f"Found {len(remaining_files)} additional files to clean")
    
    for file_path in remaining_files:
        if os.path.exists(file_path):
            if clean_merge_conflicts(file_path):
                cleaned_count += 1
            else:
                failed_count += 1
    
    print(f"\nTotal cleaned: {cleaned_count}")
    print(f"Total failed: {failed_count}")

if __name__ == "__main__":
    main()