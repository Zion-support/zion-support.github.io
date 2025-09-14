#!/usr/bin/env python3

import re
import sys

def resolve_page_conflicts(file_path):
    """Resolve conflicts in page.tsx by keeping both sides"""
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Remove all conflict markers and keep both sides
    # This is a simple approach - in production you might want more sophisticated logic
    
    # Remove conflict markers
    content = re.sub(r'<<<<<<< HEAD\n', '', content)
    content = re.sub(r'=======\n', '', content)
    content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
    
    # Clean up extra whitespace
    content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
    
    with open(file_path, 'w') as f:
        f.write(content)
    
    print(f"Resolved conflicts in {file_path}")

if __name__ == "__main__":
    resolve_page_conflicts("app/page.tsx")