#!/usr/bin/env python3
import os
import re

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the HEAD version"""
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Remove merge conflict markers and keep HEAD version
    # Pattern to match merge conflicts
    pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
    
    def replace_conflict(match):
        head_content = match.group(1)
        return head_content + '\n'
    
    # Replace all merge conflicts
    new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
    
    # Also handle cases where there might be incomplete conflict markers
    new_content = re.sub(r'<<<<<<< HEAD\n', '', new_content)
    new_content = re.sub(r'=======\n', '', new_content)
    new_content = re.sub(r'>>>>>>> [^\n]+\n', '', new_content)
    
    # Clean up any double newlines
    new_content = re.sub(r'\n\n\n+', '\n\n', new_content)
    
    with open(file_path, 'w') as f:
        f.write(new_content)
    
    print(f"Fixed merge conflicts in {file_path}")

def main():
    # Files with merge conflicts
    files = [
        '/workspace/app/ai-workflow-automation/page.tsx',
        '/workspace/app/it-services/page.tsx',
        '/workspace/app/ai-customer-support/page.tsx',
        '/workspace/app/ai-sales-automation/page.tsx',
        '/workspace/app/ai-data-visualization/page.tsx',
        '/workspace/app/services/page.tsx'
    ]
    
    for file_path in files:
        if os.path.exists(file_path):
            fix_merge_conflicts(file_path)
        else:
            print(f"File not found: {file_path}")

if __name__ == "__main__":
    main()