#!/usr/bin/env python3
import re
import sys

def resolve_conflicts(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Remove all conflict markers and keep the content after =======
    # This is a simple approach that keeps the "incoming" changes
    lines = content.split('\n')
    resolved_lines = []
    skip_until_end = False
    
    for line in lines:
        if line.startswith('<<<<<<< HEAD'):
            skip_until_end = True
            continue
        elif line.startswith('======='):
            skip_until_end = False
            continue
        elif line.startswith('>>>>>>> '):
            skip_until_end = False
            continue
        elif not skip_until_end:
            resolved_lines.append(line)
    
    with open(file_path, 'w') as f:
        f.write('\n'.join(resolved_lines))
    
    print(f"Resolved conflicts in {file_path}")

if __name__ == "__main__":
    files = [
        'pages/_app.tsx',
        'pages/ai-services.tsx', 
        'pages/index.tsx',
        'pages/it-services.tsx',
        'pages/micro-saas.tsx'
    ]
    
    for file_path in files:
        try:
            resolve_conflicts(file_path)
        except Exception as e:
            print(f"Error processing {file_path}: {e}")