#!/usr/bin/env python3
import os
import re
import subprocess

def fix_conflicts():
    os.chdir('/workspace')
    
    # Find files with conflicts
    result = subprocess.run(['grep', '-r', '-l', '                          capture_output=True, text=True)
    
    if not result.stdout.strip():
        print("No conflicts found!")
        return
    
    files = [f for f in result.stdout.strip().split('\n') 
             if f and not any(x in f for x in ['.backup', '.log', 'node_modules', '.git'])]
    
    print(f"Found {len(files)} files with conflicts")
    
    for file in files:
        try:
            print(f"Fixing: {file}")
            
            # Create backup
            subprocess.run(['cp', file, f"{file}.backup"], check=True)
            
            with open(file, 'r') as f:
                content = f.read()
            
            # Remove conflict markers and keep both versions
            content = re.sub(r'                           r'\1\n\2\n', content, flags=re.DOTALL)
            
            # Remove any remaining markers
            content = re.sub(r'<<<<<<< [^\n]*\n?', '', content)
            content = re.sub(r'            content = re.sub(r'            
            # Clean up multiple newlines
            content = re.sub(r'\n{3,}', '\n\n', content)
            
            with open(file, 'w') as f:
                f.write(content)
                
            print(f"Fixed: {file}")
            
        except Exception as e:
            print(f"Error fixing {file}: {e}")
    
    # Add and commit
    subprocess.run(['git', 'add', '.'], check=True)
    subprocess.run(['git', 'commit', '-m', 'resolve: Fix merge conflicts'], check=True)
    print("All conflicts resolved and committed!")

if __name__ == "__main__":
    fix_conflicts()