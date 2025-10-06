#!/usr/bin/env python3
"""
Script to clean up remaining merge conflict markers.
"""

import os
import re
import glob

def cleanup_merge_conflicts(content):
    """Remove merge conflict markers and choose the better version."""
    
    # Pattern to match merge conflict markers
    conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> cursor/fix-errors-and-merge-to-main-[a-f0-9]+'
    
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
    
    return cleaned

def process_file(file_path):
    """Process a single file to clean up merge conflicts."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' in content:
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
    # Find all TypeScript files
    ts_files = glob.glob('src/**/*.ts', recursive=True) + glob.glob('src/**/*.tsx', recursive=True)
    
    cleaned_count = 0
    total_files = 0
    
    for file_path in ts_files:
        if os.path.exists(file_path):
            total_files += 1
            if process_file(file_path):
                cleaned_count += 1
    
    print(f"\nSummary:")
    print(f"Total files processed: {total_files}")
    print(f"Files cleaned: {cleaned_count}")

if __name__ == "__main__":
    main()