#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in blog pages.
This script will resolve conflicts by choosing the cleaner, properly formatted version.
"""

import os
import re
import glob

def resolve_merge_conflict(content):
    """Resolve merge conflicts by choosing the cleaner version."""
    
    # Pattern to match merge conflict markers
    conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4496'
    
    def choose_better_version(match):
        head_version = match.group(1).strip()
        incoming_version = match.group(2).strip()
        
        # Remove extra semicolons and clean up formatting
        head_clean = re.sub(r';+$', '', head_version)
        incoming_clean = re.sub(r';+$', '', incoming_version)
        
        # Choose the version with better formatting (more spaces, proper structure)
        if len(incoming_clean) > len(head_clean) and 'title:' in incoming_clean and 'description:' in incoming_clean:
            return incoming_clean
        else:
            return head_clean
    
    # Replace all merge conflicts
    resolved = re.sub(conflict_pattern, choose_better_version, content, flags=re.DOTALL)
    
    return resolved

def fix_jsx_syntax(content):
    """Fix common JSX syntax issues."""
    # Fix missing spaces in className attributes
    content = re.sub(r"className='([^']*)'", r"className='\1'", content)
    content = re.sub(r'className="([^"]*)"', r'className="\1"', content)
    
    # Fix missing spaces between words in className
    content = re.sub(r"className='([^']*)([a-z])([A-Z])([^']*)'", r"className='\1\2 \3\4'", content)
    
    # Fix missing spaces in JSX attributes
    content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)([a-zA-Z])([A-Z])', r'<\1\2 \3', content)
    
    return content

def process_file(file_path):
    """Process a single file to resolve merge conflicts."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' in content:
            print(f"Processing: {file_path}")
            
            # Resolve merge conflicts
            resolved_content = resolve_merge_conflict(content)
            
            # Fix JSX syntax issues
            resolved_content = fix_jsx_syntax(resolved_content)
            
            # Write back the resolved content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            
            print(f"✓ Resolved conflicts in {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"✗ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all conflicted files."""
    # Find all conflicted blog files
    blog_files = glob.glob('app/blog/**/page.tsx', recursive=True)
    
    resolved_count = 0
    total_conflicts = 0
    
    for file_path in blog_files:
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content:
                    total_conflicts += 1
                    if process_file(file_path):
                        resolved_count += 1
    
    print(f"\nSummary:")
    print(f"Files with conflicts: {total_conflicts}")
    print(f"Files resolved: {resolved_count}")
    print(f"Remaining conflicts: {total_conflicts - resolved_count}")

if __name__ == "__main__":
    main()