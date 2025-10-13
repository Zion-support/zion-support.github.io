#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the newer version (after =======)
"""
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file by keeping the newer version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        # Pattern to match merge conflict markers
<<<<<<< HEAD
        conflict_pattern = r'\n(.*?)\n
=======
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
=======
        conflict_pattern = r'        
        # Replace conflicts with HEAD version
        resolved_content = re.sub(conflict_pattern, r'\1\n', content, flags=re.DOTALL)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
        
<<<<<<< HEAD
        # Also handle cases where there might be multiple conflict markers in one block
<<<<<<< HEAD
        conflict_pattern2 = r'\n(.*?)\n
        resolved_content = re.sub(conflict_pattern2, r'\1', resolved_content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        resolved_content = re.sub(r'\n', '', resolved_content)
        resolved_content = re.sub(r'
=======
        if len(parts) < 3:
            print(f"Warning: Could not parse merge conflicts in {file_path}")
            return False
        
        # Reconstruct content by keeping the newer version (after =======)
        new_content = parts[0]  # Content before first conflict
        
        for i in range(1, len(parts), 3):
            if i + 2 < len(parts):
                # Keep the newer version (after =======)
                new_content += parts[i + 1]  # Content after =======
                if i + 3 < len(parts):
                    new_content += parts[i + 3]  # Content after >>>>>>>
        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Resolved conflicts in {file_path}")
        return True
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
        
=======
        conflict_pattern2 = r'        resolved_content = re.sub(conflict_pattern2, r'\1', resolved_content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        resolved_content = re.sub(r'        resolved_content = re.sub(r'\n', '', resolved_content)
        resolved_content = re.sub(r'        
        if content != resolved_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            print(f"Resolved conflicts in {file_path}")
            return True
        return False
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    conflicts_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if resolve_merge_conflicts(file_path):
                conflicts_resolved += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Resolved conflicts in {conflicts_resolved} files")

if __name__ == "__main__":
    main()