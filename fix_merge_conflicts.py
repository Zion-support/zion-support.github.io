#!/usr/bin/env python3
import os
import re

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match merge conflicts
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n'
        
        # Replace with just the HEAD content
        fixed_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflicts
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n', '', fixed_content)
        fixed_content = re.sub(r'=======.*?\n>>>>>>> [^\n]+\n', '', fixed_content, flags=re.DOTALL)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Files with merge conflicts
    files_to_fix = [
        'app/ai-workflow-automation/page.tsx',
        'app/ai-chatbot-builder/page.tsx',
        'app/globals.css'
    ]
    
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            fix_merge_conflicts(file_path)
        else:
            print(f"File not found: {file_path}")

if __name__ == "__main__":
    main()