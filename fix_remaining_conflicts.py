#!/usr/bin/env python3
"""
Script to fix remaining merge conflicts using multiple strategies
"""
import re

files_to_fix = [
    '/workspace/src/components/PerformanceMonitor.tsx',
    '/workspace/src/data/bannerConfigurations.ts',
    '/workspace/src/hooks/usePerformance.ts',
    '/workspace/src/utils/analytics.ts',
    '/workspace/src/utils/codeSplitting.ts',
    '/workspace/src/utils/errorHandler.ts',
]

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    result = []
    skip_until_marker = None
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Check for conflict markers
        if '<<<<<<< HEAD' in line:
            # Skip HEAD section
            i += 1
            while i < len(lines) and '=======' not in lines[i]:
                i += 1
            # Skip the ======= line
            if i < len(lines):
                i += 1
            # Keep the remote section until >>>>>>>
            while i < len(lines) and '>>>>>>>' not in lines[i]:
                result.append(lines[i])
                i += 1
            # Skip the >>>>>>> line
            if i < len(lines):
                i += 1
            continue
        elif '=======' in line and skip_until_marker is None:
            # Standalone ======= - skip it
            i += 1
            continue
        elif '>>>>>>>' in line:
            # Standalone >>>>>>> - skip it
            i += 1
            continue
        else:
            result.append(line)
            i += 1
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(result)
    
    print(f"✅ Fixed {file_path}")

for file_path in files_to_fix:
    try:
        fix_file(file_path)
    except Exception as e:
        print(f"❌ Error fixing {file_path}: {e}")

print("✅ All files processed")