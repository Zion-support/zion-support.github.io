#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the project.
This script will:
1. Find all files with merge conflict markers
2. Resolve conflicts by choosing the correct import path (@/components/Footer)
3. Remove all conflict markers
4. Clean up the files
"""

import os
import re
import glob

def resolve_merge_conflicts():
    """Resolve merge conflicts in all files"""
    
    # Pattern to find merge conflict markers
    conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
    
    # Find all TypeScript/TSX files with merge conflicts
    files_with_conflicts = []
    
    # Search for files with merge conflicts
    for root, dirs, files in os.walk('/workspace'):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            files_with_conflicts.append(file_path)
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    resolved_count = 0
    
    for file_path in files_with_conflicts:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Remove merge conflict markers and choose the correct import path
            # Pattern 1: Import conflicts - choose @/components/Footer over ../components/Footer
            content = re.sub(
                r'<<<<<<< HEAD\nimport Footer from \'\.\./components/Footer\';\n=======\nimport Footer from \'@/components/Footer\';\n>>>>>>> [^\n]+',
                "import Footer from '@/components/Footer';",
                content,
                flags=re.MULTILINE | re.DOTALL
            )
            
            # Pattern 2: Meta description conflicts - choose the longer, more descriptive one
            content = re.sub(
                r'<<<<<<< HEAD\n\s*<meta name="description" content="([^"]+)" />\n=======\n\s*<meta name="description" content="([^"]+)" />\n>>>>>>> [^\n]+',
                lambda m: f'        <meta name="description" content="{m.group(1) if len(m.group(1)) > len(m.group(2)) else m.group(2)}" />',
                content,
                flags=re.MULTILINE | re.DOTALL
            )
            
            # Pattern 3: Generic conflict resolution - choose the second option (usually the newer one)
            content = re.sub(
                r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+',
                r'\2',
                content,
                flags=re.MULTILINE | re.DOTALL
            )
            
            # Clean up any remaining conflict markers
            content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n?', '', content, flags=re.MULTILINE | re.DOTALL)
            
            # Remove any remaining conflict markers
            content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', content, flags=re.MULTILINE | re.DOTALL)
            content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', content, flags=re.MULTILINE | re.DOTALL)
            
            # Clean up extra whitespace
            content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                resolved_count += 1
                print(f"Resolved conflicts in: {file_path}")
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Successfully resolved conflicts in {resolved_count} files")

if __name__ == "__main__":
    resolve_merge_conflicts()