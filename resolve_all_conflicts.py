#!/usr/bin/env python3
"""
Script to resolve all merge conflicts by choosing the HEAD version
"""
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match merge conflict blocks
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+'
        
        # Replace with just the HEAD content
        resolved_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        resolved_content = re.sub(r'<<<<<<< HEAD\n?', '', resolved_content)
        resolved_content = re.sub(r'=======\n?', '', resolved_content)
        resolved_content = re.sub(r'>>>>>>> [^\n]+\n?', '', resolved_content)
        
        # Write back the resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
            
        print(f"Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    # Get all files with merge conflicts
    result = os.popen("grep -r '<<<<<<< HEAD' . --include='*.tsx' --include='*.ts' --include='*.js' --include='*.jsx' --include='*.json' -l").read()
    files = [f.strip() for f in result.split('\n') if f.strip()]
    
    print(f"Found {len(files)} files with merge conflicts")
    
    resolved_count = 0
    for file_path in files:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
    
    print(f"Resolved conflicts in {resolved_count} files")

if __name__ == "__main__":
    main()