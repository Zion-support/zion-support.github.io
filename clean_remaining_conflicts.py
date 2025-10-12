#!/usr/bin/env python3
import os
import re

def clean_merge_conflicts(file_path):
    """Clean up any remaining merge conflict markers"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove all merge conflict markers and their content
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Pattern 2: <<<<<<< HEAD ... ======= ... >>>>>>>
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>>', '', content, flags=re.DOTALL)
        
        # Pattern 3: Just remove remaining markers
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        content = re.sub(r'=======\n?', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Clean up extra newlines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Cleaned {file_path}")
        return True
        
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    files_to_clean = [
        'app/page.tsx',
        'app/ai-automation/page.tsx', 
        'app/ai-chatbot-builder/page.tsx'
    ]
    
    for file_path in files_to_clean:
        if os.path.exists(file_path):
            clean_merge_conflicts(file_path)

if __name__ == "__main__":
    main()
