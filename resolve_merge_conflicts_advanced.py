#!/usr/bin/env python3
"""
Advanced script to resolve merge conflicts by keeping the most recent version
"""
import os
import re
import glob

def resolve_merge_conflicts_advanced(file_path):
    """Resolve merge conflicts in a single file using advanced logic"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # More sophisticated approach: keep the part after ======= (most recent)
        lines = content.split('\n')
        resolved_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            if line.strip().startswith('<<<<<<< HEAD'):
                # Skip until we find =======
                while i < len(lines) and not lines[i].strip().startswith('======='):
                    i += 1
                # Skip the ======= line
                if i < len(lines):
                    i += 1
                # Keep everything after ======= until >>>>>>> 
                while i < len(lines) and not lines[i].strip().startswith('>>>>>>> '):
                    resolved_lines.append(lines[i])
                    i += 1
                # Skip the >>>>>>> line
                if i < len(lines):
                    i += 1
            else:
                resolved_lines.append(line)
                i += 1
        
        # Join the resolved lines
        resolved_content = '\n'.join(resolved_lines)
        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Resolved merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve merge conflicts in all files"""
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_processed = 0
    files_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if resolve_merge_conflicts_advanced(file_path):
                files_resolved += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Resolved merge conflicts in {files_resolved} files")

if __name__ == "__main__":
    main()