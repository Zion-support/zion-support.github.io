#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the newer version
and removing conflict markers.
"""

import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
<<<<<<< HEAD
        if ')
        lines = content.split('\n')
        resolved_lines = []
        in_conflict = False
        conflict_start = False
        
        for line in lines:
            if line.strip() == '':
                conflict_start = False
                continue
            elif line.strip() == '
                in_conflict = False
                continue
            elif in_conflict and conflict_start:
                # Skip lines from HEAD (older version)
                continue
            elif in_conflict and not conflict_start:
                # Keep lines from the newer version
                resolved_lines.append(line)
=======
        if '            return False
        
        print(f"Resolving merge conflicts in: {file_path}")
        
        # Split by merge conflict markers
        parts = re.split(r'        
        if len(parts) < 3:
            # Try alternative pattern for nested conflicts
            parts = re.split(r'        
        if len(parts) < 3:
            print(f"Could not parse merge conflicts in {file_path}")
            return False
        
        # Choose the version with more content (usually the more complete one)
        resolved_content = ""
        for i in range(0, len(parts), 2):
            if i + 1 < len(parts):
                # Compare the two versions
                version1 = parts[i].strip()
                version2 = parts[i + 1].strip()
                
                # Choose the longer/more complete version
                if len(version2) > len(version1):
                    resolved_content += version2
                else:
                    resolved_content += version1
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
            else:
                # Keep normal lines
                resolved_lines.append(line)
        
<<<<<<< HEAD
        # Write resolved content back
        resolved_content = '\n'.join(resolved_lines)
        
        # Clean up any remaining issues
        resolved_content = re.sub(r'\n\s*\n\s*\n', '\n\n', resolved_content)  # Remove excessive newlines
        resolved_content = resolved_content.strip() + '\n'  # Ensure single trailing newline
        
=======
        # Clean up any remaining conflict markers
        resolved_content = re.sub(r'        resolved_content = re.sub(r'.*?        
        # Write the resolved content
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve merge conflicts in all files."""
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'hooks/**/*.ts',
        'utils/**/*.ts',
        '**/*.tsx',
        '**/*.ts'
    ]
    
    files_processed = 0
    files_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if resolve_merge_conflicts(file_path):
                    files_resolved += 1
                    print(f"✅ Resolved conflicts in: {file_path}")
    
    print(f"\n📊 Summary:")
    print(f"   Files processed: {files_processed}")
    print(f"   Conflicts resolved: {files_resolved}")

if __name__ == "__main__":
    main()