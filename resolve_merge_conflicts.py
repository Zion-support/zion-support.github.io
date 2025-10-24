#!/usr/bin/env python3
"""
Comprehensive merge conflict resolver for the Zion Tech Group project.
This script resolves merge conflicts by choosing the appropriate version
and cleaning up the codebase.
"""

import os
import re
import glob
from pathlib import Path

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Resolving conflicts in: {file_path}")
        
        # For layout.tsx, choose the Next.js App Router version (HEAD)
        if 'layout.tsx' in file_path:
            # Extract the HEAD version (Next.js App Router)
            head_match = re.search(r'<<<<<<< HEAD\n(.*?)\n=======', content, re.DOTALL)
            if head_match:
                resolved_content = head_match.group(1)
                # Clean up any remaining conflict markers
                resolved_content = re.sub(r'>>>>>>> .*?\n', '', resolved_content)
                resolved_content = re.sub(r'=======\n.*?>>>>>>> .*?\n', '', resolved_content, flags=re.DOTALL)
            else:
                return False
        
        # For page.tsx, choose the HEAD version but fix imports
        elif 'page.tsx' in file_path and 'app/page.tsx' in file_path:
            # Extract the HEAD version
            head_match = re.search(r'<<<<<<< HEAD\n(.*?)\n=======', content, re.DOTALL)
            if head_match:
                resolved_content = head_match.group(1)
                # Fix missing imports
                if 'Head' in resolved_content and 'import Head' not in resolved_content:
                    resolved_content = "import Head from 'next/head';\n" + resolved_content
                if 'Link' in resolved_content and 'import Link' not in resolved_content:
                    resolved_content = "import Link from 'next/link';\n" + resolved_content
                # Clean up any remaining conflict markers
                resolved_content = re.sub(r'>>>>>>> .*?\n', '', resolved_content)
                resolved_content = re.sub(r'=======\n.*?>>>>>>> .*?\n', '', resolved_content, flags=re.DOTALL)
            else:
                return False
        
        # For not-found.tsx, choose the HEAD version
        elif 'not-found.tsx' in file_path:
            head_match = re.search(r'<<<<<<< HEAD\n(.*?)\n=======', content, re.DOTALL)
            if head_match:
                resolved_content = head_match.group(1)
                # Clean up any remaining conflict markers
                resolved_content = re.sub(r'>>>>>>> .*?\n', '', resolved_content)
                resolved_content = re.sub(r'=======\n.*?>>>>>>> .*?\n', '', resolved_content, flags=re.DOTALL)
            else:
                return False
        
        # For component files, choose the HEAD version (more complete)
        elif any(comp in file_path for comp in ['components/', 'app/components/']):
            head_match = re.search(r'<<<<<<< HEAD\n(.*?)\n=======', content, re.DOTALL)
            if head_match:
                resolved_content = head_match.group(1)
                # Clean up any remaining conflict markers
                resolved_content = re.sub(r'>>>>>>> .*?\n', '', resolved_content)
                resolved_content = re.sub(r'=======\n.*?>>>>>>> .*?\n', '', resolved_content, flags=re.DOTALL)
            else:
                return False
        
        # For other files, choose the HEAD version by default
        else:
            head_match = re.search(r'<<<<<<< HEAD\n(.*?)\n=======', content, re.DOTALL)
            if head_match:
                resolved_content = head_match.group(1)
                # Clean up any remaining conflict markers
                resolved_content = re.sub(r'>>>>>>> .*?\n', '', resolved_content)
                resolved_content = re.sub(r'=======\n.*?>>>>>>> .*?\n', '', resolved_content, flags=re.DOTALL)
            else:
                return False
        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
        
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def find_files_with_conflicts():
    """Find all files with merge conflicts."""
    files_with_conflicts = []
    
    # Search for TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            files_with_conflicts.append(file_path)
                except:
                    continue
    
    return files_with_conflicts

def main():
    """Main function to resolve all merge conflicts."""
    print("Starting merge conflict resolution...")
    
    # Find all files with conflicts
    files_with_conflicts = find_files_with_conflicts()
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    resolved_count = 0
    failed_count = 0
    
    for file_path in files_with_conflicts:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
        else:
            failed_count += 1
    
    print(f"\nResolution complete:")
    print(f"  - Resolved: {resolved_count}")
    print(f"  - Failed: {failed_count}")
    
    # Check if there are still conflicts
    remaining_conflicts = find_files_with_conflicts()
    if remaining_conflicts:
        print(f"\nWarning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  - {file_path}")
        if len(remaining_conflicts) > 10:
            print(f"  ... and {len(remaining_conflicts) - 10} more")
    else:
        print("\nAll merge conflicts resolved successfully!")

if __name__ == "__main__":
    main()