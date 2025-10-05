#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the cleaner version
"""
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Pattern to match merge conflicts with duplicate imports
        pattern = r'<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> [^\n]+\s*\n'
        
        def resolve_conflict(match):
            head_content = match.group(1).strip()
            other_content = match.group(2).strip()
            
            # If both are imports, choose the cleaner one (usually the one without quotes)
            if 'import' in head_content and 'import' in other_content:
                # Prefer the version without quotes around module names
                if '"' not in other_content and '"' in head_content:
                    return other_content
                elif '"' not in head_content and '"' in other_content:
                    return head_content
                else:
                    # If both are similar, choose the shorter one
                    return head_content if len(head_content) <= len(other_content) else other_content
            else:
                # For non-import conflicts, prefer the HEAD version
                return head_content
        
        # Resolve conflicts
        new_content = re.sub(pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # Remove any remaining merge conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', new_content, flags=re.DOTALL)
        
        # Clean up extra newlines
        new_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', new_content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    # Get all files with merge conflicts
    result = os.popen("git diff --name-only --diff-filter=U").read().strip()
    if not result:
        print("No merge conflicts found")
        return
    
    files = result.split('\n')
    resolved_count = 0
    
    for file_path in files:
        if file_path and os.path.exists(file_path):
            print(f"Resolving conflicts in: {file_path}")
            if resolve_merge_conflicts(file_path):
                resolved_count += 1
                print(f"  ✓ Resolved conflicts")
            else:
                print(f"  - No conflicts to resolve")
    
    print(f"\nResolved conflicts in {resolved_count} files")
    
    # Add resolved files to git
    if resolved_count > 0:
        os.system("git add .")
        print("Added resolved files to git staging area")

if __name__ == "__main__":
    main()