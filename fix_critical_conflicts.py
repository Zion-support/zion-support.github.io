#!/usr/bin/env python3
"""
Fix critical merge conflicts in source files.
"""

import re
import os

def clean_merge_conflicts(content):
    """Clean merge conflicts by keeping the most recent version."""
    # Remove all merge conflict markers and keep the last version
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
        
        # Skip duplicate imports and empty lines
        if (line.strip().startswith('import ') and 
            any(cleaned_lines and cleaned_lines[-1].strip().startswith('import ') and 
                cleaned_lines[-1].strip() == line.strip() for _ in [1])):
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
    critical_files = [
        '/workspace/src/App.tsx',
        '/workspace/src/components/ErrorBoundary.tsx',
        '/workspace/src/components/Layout.tsx',
        '/workspace/src/components/SEOOptimizer.tsx',
        '/workspace/src/hooks/usePerformance.ts',
        '/workspace/src/utils/analytics.ts',
        '/workspace/src/utils/performanceOptimizer.ts',
        '/workspace/src/monitoring.ts'
    ]
    
    print("Fixing critical source files...")
    
    for file_path in critical_files:
        if os.path.exists(file_path):
            fix_file(file_path)
        else:
            print(f"⚠️  File not found: {file_path}")

if __name__ == "__main__":
    main()