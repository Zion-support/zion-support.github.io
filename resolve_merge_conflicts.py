#!/usr/bin/env python3

import os
import re

def resolve_merge_conflicts():
    """Resolve merge conflict markers in files"""
    print("🔧 Resolving merge conflicts...")
    
    # Files with merge conflicts
    conflicted_files = [
        'src/components/ui/button.tsx',
        'src/components/ui/card.tsx', 
        'src/pages/About.tsx',
        'src/pages/AllCategoriesPage.tsx',
        'src/pages/ApiDocsHub.tsx'
    ]
    
    for file_path in conflicted_files:
        full_path = f'/workspace/{file_path}'
        if os.path.exists(full_path):
            print(f"Resolving conflicts in {file_path}...")
            
            with open(full_path, 'r') as f:
                content = f.read()
            
            # Remove merge conflict markers and keep the HEAD version (our version)
            # Remove everything between <<<<<<< HEAD and =======
            content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> .*?\n', r'\1', content, flags=re.DOTALL)
            
            # Also handle cases where there might be just conflict markers
            content = re.sub(r'<<<<<<< HEAD\n', '', content)
            content = re.sub(r'=======\n.*?\n>>>>>>> .*?\n', '', content, flags=re.DOTALL)
            
            # Clean up any remaining conflict markers
            content = re.sub(r'^<<<<<<< .*?\n', '', content, flags=re.MULTILINE)
            content = re.sub(r'^=======\n', '', content, flags=re.MULTILINE)
            content = re.sub(r'^>>>>>>> .*?\n', '', content, flags=re.MULTILINE)
            
            # Clean up extra newlines
            content = re.sub(r'\n{3,}', '\n\n', content)
            
            with open(full_path, 'w') as f:
                f.write(content)
            
            print(f"✅ Resolved conflicts in {file_path}")
    
    print("✅ All merge conflicts resolved!")

if __name__ == "__main__":
    resolve_merge_conflicts()