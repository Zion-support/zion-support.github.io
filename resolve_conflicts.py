#!/usr/bin/env python3
"""
Script to resolve merge conflicts in App.tsx
"""
import re

def resolve_conflicts():
    # Read the file
    with open('/workspace/App.tsx', 'r') as f:
        content = f.read()
    
    # Remove all merge conflict markers and keep both sides
    # Pattern 1: Remove <<<<<<< HEAD, =======, >>>>>>> cursor lines
    content = re.sub(r'^<<<<<<< HEAD\n', '', content, flags=re.MULTILINE)
    content = re.sub(r'^=======\n', '', content, flags=re.MULTILINE)
    content = re.sub(r'^>>>>>>> cursor.*\n', '', content, flags=re.MULTILINE)
    
    # Write the cleaned content back
    with open('/workspace/App.tsx', 'w') as f:
        f.write(content)
    
    print("Merge conflicts resolved in App.tsx")

if __name__ == "__main__":
    resolve_conflicts()