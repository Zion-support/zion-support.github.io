#!/usr/bin/env python3
import os
import re

def resolve_conflicts():
    for root, dirs, files in os.walk('/workspace'):
        if '.git' in root:
            continue
        for file in files:
            if file.endswith(('.ts', '.tsx', '.js', '.jsx', '.css', '.html')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if '<<<<<<< HEAD' in content:
                        # Remove conflict markers and keep HEAD version
                        content = re.sub(r'<<<<<<< HEAD(.*?)=======.*?>>>>>>>.*?', r'\1', content, flags=re.DOTALL)
                        
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(content)
                        print(f"Resolved: {file_path}")
                except Exception as e:
                    print(f"Error with {file_path}: {e}")

if __name__ == "__main__":
    resolve_conflicts()