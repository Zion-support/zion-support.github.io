#!/usr/bin/env python3
"""
Script to resolve merge conflicts in TypeScript/TSX files.
This script will:
1. Find all files with merge conflict markers
2. Resolve lucide-react import conflicts by using the cleaner named import syntax
3. Remove merge conflict markers
"""

import os
import re
import glob

def resolve_lucide_imports(content):
    """Resolve lucide-react import conflicts by using named imports"""
    
    # Pattern to match the conflict block for lucide imports
    pattern = r'<<<<<<< HEAD\n(.*?import.*?from.*?lucide-react.*?)\n=======\n(.*?import.*?from.*?lucide-react.*?)\n>>>>>>> origin/cursor/fix-errors-and-merge-to-main-24db'
    
    def replace_imports(match):
        # Extract the named import version (after =======)
        named_import = match.group(2).strip()
        return named_import
    
    # Replace the conflict with the named import version
    content = re.sub(pattern, replace_imports, content, flags=re.DOTALL)
    
    return content

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Resolving conflicts in: {file_path}")
        
        # Resolve lucide imports
        content = resolve_lucide_imports(content)
        
        # Remove any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> origin/cursor/fix-errors-and-merge-to-main-24db\n?', '', content, flags=re.DOTALL)
        
        # Clean up extra blank lines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    
    # Find all TypeScript/TSX files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    resolved_files = []
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build']):
                continue
                
            if resolve_merge_conflicts(file_path):
                resolved_files.append(file_path)
    
    print(f"\nResolved conflicts in {len(resolved_files)} files:")
    for file_path in resolved_files:
        print(f"  - {file_path}")

if __name__ == "__main__":
    main()