#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by accepting newer version
"""
import sys
import re
import os

def fix_merge_conflicts(file_path):
    """Remove merge conflict markers and keep the newer version (usually origin)"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match merge conflicts
    # <<<<<<< HEAD
    # ... old content ...
    # =======
    # ... new content ...
    # >>>>>>> origin/...
    pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> origin/[^\n]+\n?'
    
    # Count conflicts before fixing
    conflicts_before = len(re.findall(pattern, content, re.DOTALL))
    
    if conflicts_before == 0:
        return False  # No conflicts found
    
    # Replace with the newer version (second match group)
    fixed_content = re.sub(pattern, r'\2', content, flags=re.DOTALL)
    
    # Sometimes there are nested conflicts, let's handle simpler patterns too
    # Handle three-way merges
    pattern2 = r'<<<<<<< HEAD\n<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> origin/[^\n]+\n=======\n(.*?)\n>>>>>>> origin/[^\n]+\n?'
    fixed_content = re.sub(pattern2, r'\3', fixed_content, flags=re.DOTALL)
    
    # Write the fixed content back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    
    print(f"✅ Fixed {conflicts_before} conflicts in {file_path}")
    return True

def main():
    files_to_fix = [
        '/workspace/app/utils/performanceMonitor.ts',
        '/workspace/app/utils/accessibilityEnhancer.ts',
        '/workspace/app/components/ErrorBoundary.tsx',
        '/workspace/app/contact/page.tsx',
        '/workspace/src/components/PerformanceMonitor.tsx',
        '/workspace/src/hooks/usePerformance.ts',
        '/workspace/src/hooks/useBannerRotation.tsx',
        '/workspace/src/data/bannerConfigurations.ts',
        '/workspace/src/utils/analytics.ts',
        '/workspace/src/utils/codeSplitting.ts',
        '/workspace/src/utils/errorHandler.ts',
    ]
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
        else:
            print(f"⚠️  File not found: {file_path}")
    
    print(f"\n🎉 Fixed conflicts in {fixed_count} files")

if __name__ == '__main__':
    main()