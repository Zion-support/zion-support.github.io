#!/usr/bin/env python3
import re
import os

def fix_merge_conflicts(file_path):
    """Fix merge conflicts by keeping the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match from <<<<<<< HEAD to ======= (keep this part)
        pattern1 = r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern1, r'\1\n', content, flags=re.DOTALL)
        
        # Pattern to match from ======= to >>>>>>> (remove this part)
        pattern2 = r'=======\n.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern2, '', content, flags=re.DOTALL)
        
        # Clean up any remaining merge markers
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    files_to_fix = [
        'app/ai-customer-support/page.tsx',
        'app/ai-data-visualization/page.tsx',
        'app/ai-sales-automation/page.tsx',
        'app/ai-workflow-automation/page.tsx',
        'app/services/page.tsx'
    ]
    
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            fix_merge_conflicts(file_path)
        else:
            print(f"File not found: {file_path}")

if __name__ == "__main__":
    main()