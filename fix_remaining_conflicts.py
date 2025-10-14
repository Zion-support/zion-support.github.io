#!/usr/bin/env python3
"""
Script to fix remaining merge conflicts in specific files
"""
import os
import re
import subprocess

def fix_conflicts_in_file(file_path):
    """Fix conflicts in a single file by accepting incoming changes"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match conflict markers
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        
        # Replace conflicts with incoming changes (the part after =======)
        def replace_conflict(match):
            incoming = match.group(2)
            return incoming
        
        resolved_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Write back the resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Fixed conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing conflicts in {file_path}: {e}")
        return False

def main():
    print("Fixing remaining merge conflicts...")
    
    # Files with known conflicts
    conflicted_files = [
        'app/components/AdvancedLoadingStates.tsx',
        'app/5g-monitoring/page.tsx',
        'app/DynamicPageLoader.tsx',
        'app/contexts/AnalyticsContext.tsx',
        'app/contexts/AnalyticsContextDefinition.ts',
        'app/utils/apiInterceptor.ts',
        'app/utils/enhancedAnalytics.ts',
        'app/utils/accessibilityChecker.ts'
    ]
    
    fixed_count = 0
    for file_path in conflicted_files:
        full_path = os.path.join('/workspace', file_path)
        if os.path.exists(full_path):
            if fix_conflicts_in_file(full_path):
                fixed_count += 1
    
    print(f"Fixed conflicts in {fixed_count}/{len(conflicted_files)} files")
    
    # Add and commit the fixes
    try:
        subprocess.run(['git', 'add', '.'], cwd='/workspace', check=True)
        subprocess.run(['git', 'commit', '-m', 'Fix remaining merge conflicts in specific files'], cwd='/workspace', check=True)
        print("Committed conflict fixes")
    except subprocess.CalledProcessError as e:
        print(f"Error committing fixes: {e}")

if __name__ == "__main__":
    main()