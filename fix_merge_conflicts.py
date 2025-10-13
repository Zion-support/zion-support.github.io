#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the latest version
"""
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split by merge conflict markers
        lines = content.split('\n')
        resolved_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            # Check for merge conflict start
            if line.strip().startswith('<<<<<<< HEAD'):
                # Find the end of this conflict
                j = i + 1
                while j < len(lines) and not lines[j].strip().startswith('>>>>>>> '):
                    j += 1
                
                if j < len(lines):
                    # Found the end, now find the middle separator
                    k = i + 1
                    while k < j and not lines[k].strip().startswith('======='):
                        k += 1
                    
                    if k < j:
                        # Take everything after ======= (the newer version)
                        resolved_lines.extend(lines[k+1:j])
                    else:
                        # No separator, take everything between HEAD and end
                        resolved_lines.extend(lines[i+1:j])
                    
                    i = j + 1
                else:
                    # No end found, just skip this line
                    i += 1
            else:
                resolved_lines.append(line)
                i += 1
        
        # Write resolved content
        resolved_content = '\n'.join(resolved_lines)
        
        # Only write if content changed
        if resolved_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            print(f"Resolved conflicts in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    # Get all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts'
    ]
    
    files_processed = 0
    files_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if resolve_merge_conflicts(file_path):
                    files_resolved += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Resolved conflicts in {files_resolved} files")

if __name__ == "__main__":
    main()