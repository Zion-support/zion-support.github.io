#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the codebase
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
            
        print(f"Resolving conflicts in: {file_path}")
        
        # Remove all merge conflict markers and keep the latest version (after =======)
        lines = content.split('\n')
        resolved_lines = []
        skip_until_next_marker = False
        
        for line in lines:
            if line.strip().startswith('<<<<<<< HEAD'):
                skip_until_next_marker = True
                continue
            elif line.strip().startswith('======='):
                skip_until_next_marker = False
                continue
            elif line.strip().startswith('>>>>>>>'):
                continue
            elif not skip_until_next_marker:
                resolved_lines.append(line)
        
        # Write the resolved content
        resolved_content = '\n'.join(resolved_lines)
        
        # Clean up any remaining artifacts
        resolved_content = re.sub(r'\n\s*\n\s*\n', '\n\n', resolved_content)  # Remove excessive newlines
        resolved_content = re.sub(r'^\s*\n', '', resolved_content)  # Remove leading empty lines
        resolved_content = resolved_content.strip() + '\n'  # Ensure single trailing newline
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
            
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'utils/**/*.tsx',
        'hooks/**/*.ts',
        'hooks/**/*.tsx',
        'types/**/*.ts',
        'config/**/*.ts',
        'data/**/*.ts',
        'content/**/*.ts',
        'content/**/*.tsx',
        'services/**/*.ts',
        'lib/**/*.ts',
        'src/**/*.ts',
        'src/**/*.tsx'
    ]
    
    files_processed = 0
    conflicts_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if resolve_merge_conflicts(file_path):
                    conflicts_resolved += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Resolved conflicts in {conflicts_resolved} files")
    
    # Check for remaining conflicts
    remaining_conflicts = []
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            remaining_conflicts.append(file_path)
                except:
                    pass
    
    if remaining_conflicts:
        print(f"\nRemaining conflicts in {len(remaining_conflicts)} files:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
    else:
        print("\nAll merge conflicts resolved!")

if __name__ == "__main__":
    main()