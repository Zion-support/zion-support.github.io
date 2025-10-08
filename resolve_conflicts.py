#!/usr/bin/env python3
"""
Automatic merge conflict resolver
Resolves conflicts by keeping the incoming branch changes (non-HEAD)
"""

import re
import sys
from pathlib import Path

def resolve_conflicts_in_file(file_path):
    """Resolve conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return False
    
    if '<<<<<<< HEAD' not in content:
        return False
    
    # Pattern to match conflict markers including nested conflicts
    # We'll process iteratively until all conflicts are resolved
    max_iterations = 10
    iteration = 0
    
    while '<<<<<<< HEAD' in content and iteration < max_iterations:
        iteration += 1
        # Match the conflict block
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> origin/[^\n]+'
        
        def replace_conflict(match):
            head_content = match.group(1)
            incoming_content = match.group(2)
            # Choose incoming content (non-HEAD)
            return incoming_content
        
        content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
    
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Resolved conflicts in {file_path}")
        return True
    except Exception as e:
        print(f"Error writing {file_path}: {e}")
        return False

def find_conflicted_files():
    """Find all files with merge conflicts"""
    conflicted_files = []
    
    # List of files with known conflicts
    files_to_check = [
        'app/not-found.tsx',
        'app/page-optimized.tsx',
        'app/utils/enhancedErrorHandler.ts',
        'app/utils/performanceMonitor.ts',
        'src/components/PerformanceMonitor.tsx',
        'src/data/bannerConfigurations.ts',
        'src/hooks/useBannerRotation.tsx',
        'src/hooks/usePerformance.ts',
        'src/utils/analytics.ts',
        'src/utils/codeSplitting.ts',
        'src/utils/errorHandler.ts',
    ]
    
    for file_path in files_to_check:
        full_path = Path('/workspace') / file_path
        if full_path.exists():
            try:
                with open(full_path, 'r', encoding='utf-8') as f:
                    if '<<<<<<< HEAD' in f.read():
                        conflicted_files.append(full_path)
            except:
                pass
    
    return conflicted_files

def main():
    conflicted_files = find_conflicted_files()
    
    if not conflicted_files:
        print("No conflicted files found!")
        return 0
    
    print(f"Found {len(conflicted_files)} files with conflicts")
    
    resolved_count = 0
    for file_path in conflicted_files:
        if resolve_conflicts_in_file(file_path):
            resolved_count += 1
    
    print(f"\nResolved {resolved_count}/{len(conflicted_files)} files")
    return 0 if resolved_count == len(conflicted_files) else 1

if __name__ == '__main__':
    sys.exit(main())