#!/usr/bin/env python3
"""
Script to clean up all merge conflicts in the repository.
"""

import os
import re
import glob

def cleanup_merge_conflicts(content):
    """Remove all merge conflict markers and choose the better version."""
    
    # Pattern to match merge conflict markers
    conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
    
    def choose_better_version(match):
        head_version = match.group(1).strip()
        incoming_version = match.group(2).strip()
        
        # Choose the version with more content or better formatting
        if len(incoming_version) > len(head_version) and incoming_version.strip():
            return incoming_version
        elif head_version.strip():
            return head_version
        else:
            return incoming_version
    
    # Replace all merge conflicts
    cleaned = re.sub(conflict_pattern, choose_better_version, content, flags=re.DOTALL)
    
    # Remove any remaining conflict markers
    cleaned = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', cleaned, flags=re.DOTALL)
    cleaned = re.sub(r'=======.*?>>>>>>> [^\n]+', '', cleaned, flags=re.DOTALL)
    cleaned = re.sub(r'<<<<<<< HEAD.*?=======', '', cleaned, flags=re.DOTALL)
    
    return cleaned

def process_file(file_path):
    """Process a single file to clean up merge conflicts."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>>' in content:
            print(f"Processing: {file_path}")
            
            # Clean up merge conflicts
            cleaned_content = cleanup_merge_conflicts(content)
            
            # Write back the cleaned content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            
            print(f"✓ Cleaned conflicts in {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"✗ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts."""
    # Find all TypeScript and TSX files
    files = glob.glob('**/*.ts', recursive=True) + glob.glob('**/*.tsx', recursive=True)
    
    cleaned_count = 0
    total_files = 0
    
    for file_path in files:
        if os.path.exists(file_path):
            total_files += 1
            if process_file(file_path):
                cleaned_count += 1
    
    print(f"\nSummary:")
    print(f"Total files processed: {total_files}")
    print(f"Files cleaned: {cleaned_count}")

if __name__ == "__main__":
    main()