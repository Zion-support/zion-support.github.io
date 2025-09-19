#!/usr/bin/env python3
import os
import re
import glob

def resolve_merge_conflicts():
    """Resolve merge conflicts in the codebase"""
    
    # Find all files with merge conflicts
    pattern = "src/**/*.{tsx,ts,js,jsx}"
    files = glob.glob(pattern, recursive=True)
    
    conflict_files = []
    for file in files:
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content:
                    conflict_files.append(file)
        except Exception as e:
            print(f"Error reading {file}: {e}")
    
    print(f"Found {len(conflict_files)} files with merge conflicts")
    
    for file in conflict_files:
        print(f"Processing: {file}")
        
        try:
            # Create backup
            backup_file = f"{file}.backup.{int(__import__('time').time())}"
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
            with open(backup_file, 'w', encoding='utf-8') as f:
                f.write(content)
            
            # Resolve merge conflicts
            # Remove HEAD sections and keep the other version
            content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n', '', content, flags=re.DOTALL)
            content = re.sub(r'>>>>>>> cursor/fix-netlify-build-and-merge-to-main-ca65\n', '', content)
            
            # Fix common import path issues
            content = re.sub(r'@/data/', '../data/', content)
            content = re.sub(r'@/components/', '../components/', content)
            content = re.sub(r'@/hooks/', '../hooks/', content)
            content = re.sub(r'@/utils/', '../utils/', content)
            content = re.sub(r'@/context/', '../context/', content)
            
            # Fix SEO import issues
            content = re.sub(r"from '../components/SEO\.jsx'", "from '../components/SEO'", content)
            content = re.sub(r"from '../components/SEO\.tsx'", "from '../components/SEO'", content)
            
            # Write resolved content
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Resolved conflicts in: {file}")
            
        except Exception as e:
            print(f"Error processing {file}: {e}")
    
    print("Merge conflict resolution completed!")

if __name__ == "__main__":
    resolve_merge_conflicts()