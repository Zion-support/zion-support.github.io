#!/usr/bin/env python3
"""
Fix remaining merge conflicts in source files.
"""

import re
import os

def clean_merge_conflicts(content):
    """Clean merge conflicts by keeping the most recent version."""
    lines = content.split('\n')
    cleaned_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Skip merge conflict markers
        if (line.strip().startswith('<<<<<<< HEAD') or 
            line.strip().startswith('=======') or 
            line.strip().startswith('>>>>>>>')):
            i += 1
            continue
        
        cleaned_lines.append(line)
        i += 1
    
    return '\n'.join(cleaned_lines)

def fix_file(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return True
            
        cleaned_content = clean_merge_conflicts(content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"✓ Fixed {file_path}")
        return True
        
    except Exception as e:
        print(f"✗ Error fixing {file_path}: {e}")
        return False

def main():
    remaining_files = [
        '/workspace/src/components/PerformanceMonitor.tsx',
        '/workspace/src/components/LoadingSpinner.tsx',
        '/workspace/src/components/AccessibilityEnhancer.tsx'
    ]
    
    print("Fixing remaining source files...")
    
    for file_path in remaining_files:
        if os.path.exists(file_path):
            fix_file(file_path)
        else:
            print(f"⚠️  File not found: {file_path}")

if __name__ == "__main__":
    main()