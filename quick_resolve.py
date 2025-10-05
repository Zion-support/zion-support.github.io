#!/usr/bin/env python3
import os
import subprocess

def resolve_conflicts():
    """Resolve conflicts by choosing main branch version"""
    # Get conflicted files
    result = subprocess.run("git status --porcelain", shell=True, capture_output=True, text=True)
    conflicted_files = []
    
    for line in result.stdout.strip().split('\n'):
        if line.strip().startswith('UU') or line.strip().startswith('AA'):
            file_path = line[3:].strip()
            conflicted_files.append(file_path)
    
    print(f"Resolving conflicts in {len(conflicted_files)} files")
    
    for file_path in conflicted_files:
        if not os.path.exists(file_path):
            continue
            
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            continue
            
        # Keep main branch version (HEAD)
        lines = content.split('\n')
        resolved_lines = []
        in_conflict = False
        keep_main = True
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                keep_main = True
                continue
            elif line.strip() == '=======':
                keep_main = False
                continue
            elif line.strip() == '>>>>>>>':
                in_conflict = False
                keep_main = True
                continue
            elif in_conflict and not keep_main:
                continue
            else:
                resolved_lines.append(line)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        
        print(f"Resolved: {file_path}")

if __name__ == "__main__":
    resolve_conflicts()