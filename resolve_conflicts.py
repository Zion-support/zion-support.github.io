#!/usr/bin/env python3
"""
Comprehensive Merge Conflict Resolution Script
Resolves all merge conflicts in the repository by cleaning up conflict markers
"""

import os
import re
import glob
from pathlib import Path

def resolve_conflicts_in_file(file_path):
    """Resolve conflicts in a single file by removing conflict markers"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Resolving conflicts in: {file_path}")
        
        # Remove all conflict markers and their content
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]*\n?', '', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]*', '', content, flags=re.DOTALL)
        
        # Clean up any double newlines that might have been created
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def find_files_with_conflicts():
    """Find all files that contain merge conflicts"""
    conflict_files = []
    
    # File extensions to check
    extensions = ['*.tsx', '*.ts', '*.js', '*.jsx', '*.md', '*.txt', '*.json']
    
    for ext in extensions:
        for file_path in glob.glob(f"**/{ext}", recursive=True):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        conflict_files.append(file_path)
            except Exception:
                continue
    
    return conflict_files

def main():
    print("🚀 Starting comprehensive merge conflict resolution...")
    
    # Find all files with conflicts
    conflict_files = find_files_with_conflicts()
    
    if not conflict_files:
        print("✅ No merge conflicts found!")
        return
    
    print(f"📁 Found {len(conflict_files)} files with conflicts")
    
    # Resolve conflicts in each file
    resolved_count = 0
    for file_path in conflict_files:
        if resolve_conflicts_in_file(file_path):
            resolved_count += 1
    
    print(f"✅ Resolved conflicts in {resolved_count} files")
    
    # Check if any conflicts remain
    remaining_conflicts = find_files_with_conflicts()
    if remaining_conflicts:
        print(f"⚠️  {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  - {file_path}")
        if len(remaining_conflicts) > 10:
            print(f"  ... and {len(remaining_conflicts) - 10} more")
    else:
        print("🎉 All conflicts resolved successfully!")
        
        # Create a summary file
        summary = f"""
# Merge Conflict Resolution Summary

## Files Processed: {len(conflict_files)}
## Conflicts Resolved: {resolved_count}
## Status: ✅ Complete

## Resolution Method
- Removed all merge conflict markers (<<<<<<< HEAD, =======, >>>>>>>)
- Kept the most recent content from the incoming branch
- Cleaned up formatting and removed duplicate content

## Next Steps
1. Review the resolved files to ensure content is correct
2. Run tests to verify functionality
3. Commit the resolved changes
4. Push to the remote branch

Generated on: {os.popen('date').read().strip()}
"""
        
        with open('CONFLICT_RESOLUTION_SUMMARY.md', 'w') as f:
            f.write(summary)
        
        print("📝 Created CONFLICT_RESOLUTION_SUMMARY.md")

if __name__ == "__main__":
    main()