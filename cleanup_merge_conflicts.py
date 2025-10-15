#!/usr/bin/env python3
"""
Script to clean up merge conflicts in servicesData.ts file
"""

import re

def clean_merge_conflicts(file_path):
    """Clean up merge conflict markers from a file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove merge conflict markers and keep the content between them
    # Pattern to match merge conflict blocks
    pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
    
    def resolve_conflict(match):
        # Get both sides of the conflict
        head_content = match.group(1).strip()
        incoming_content = match.group(2).strip()
        
        # If both sides are similar, keep the first one
        if head_content == incoming_content:
            return head_content + '\n'
        
        # If one side is empty, keep the non-empty one
        if not head_content:
            return incoming_content + '\n'
        if not incoming_content:
            return head_content + '\n'
        
        # For different content, prefer the more complete one (longer)
        if len(head_content) > len(incoming_content):
            return head_content + '\n'
        else:
            return incoming_content + '\n'
    
    # Clean up merge conflicts
    cleaned_content = re.sub(pattern, resolve_conflict, content, flags=re.DOTALL)
    
    # Remove any remaining merge conflict markers
    cleaned_content = re.sub(r'^[<>=]{7}.*$', '', cleaned_content, flags=re.MULTILINE)
    
    # Clean up extra whitespace
    cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(cleaned_content)
    
    print(f"Cleaned merge conflicts from {file_path}")

if __name__ == "__main__":
    clean_merge_conflicts('/workspace/app/data/servicesData.ts')