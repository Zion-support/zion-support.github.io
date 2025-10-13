#!/usr/bin/env python3
"""
Script to fix merge conflicts in critical files
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in {file_path}")
        
        # Remove merge conflict markers and keep HEAD version
        lines = content.split('\n')
        new_lines = []
        skip_until = None
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                skip_until = '======='
                continue
            elif line.strip() == '=======':
                skip_until = '>>>>>>>'
                continue
            elif line.strip().startswith('>>>>>>>'):
                skip_until = None
                continue
            elif skip_until == '=======' or skip_until == '>>>>>>>':
                continue
            else:
                new_lines.append(line)
        
        # Write back the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Critical files to fix first
    critical_files = [
        'App.tsx',
        'vite.config.ts',
        'app/components/Navigation.tsx',
        'app/components/PerformanceMonitor.tsx',
        'app/components/AccessibilityEnhancer.tsx',
        'app/blog/page.tsx'
    ]
    
    fixed_count = 0
    
    # Fix critical files first
    for file_path in critical_files:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    # Fix other TypeScript/TSX files
    pattern = "**/*.{ts,tsx,js,jsx}"
    for file_path in glob.glob(pattern, recursive=True):
        if file_path in critical_files:
            continue
        if os.path.exists(file_path) and fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()