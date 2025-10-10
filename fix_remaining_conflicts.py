#!/usr/bin/env python3
"""
Script to fix remaining merge conflicts by removing all conflict markers
"""

import os
import re

def fix_remaining_conflicts(file_path):
    """Fix remaining merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove all merge conflict markers and their content
        # This is a more aggressive approach - remove everything between conflict markers
        lines = content.split('\n')
        cleaned_lines = []
        skip_until_end = False
        
        for line in lines:
            if line.strip().startswith('<<<<<<< HEAD'):
                skip_until_end = True
                continue
            elif line.strip().startswith('======='):
                continue
            elif line.strip().startswith('>>>>>>> '):
                skip_until_end = False
                continue
            elif not skip_until_end:
                cleaned_lines.append(line)
        
        # Join the cleaned lines
        cleaned_content = '\n'.join(cleaned_lines)
        
        # Remove any remaining empty lines at the end
        cleaned_content = cleaned_content.rstrip() + '\n'
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"Fixed remaining conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all remaining merge conflicts"""
    files_with_conflicts = [
        '/workspace/app/careers/page.tsx',
        '/workspace/app/case-studies/page.tsx',
        '/workspace/app/consultation/page.tsx',
        '/workspace/app/micro-saas/page.tsx',
        '/workspace/app/partners/page.tsx',
        '/workspace/app/support/page.tsx',
        '/workspace/app/utils/accessibilityChecker.ts',
        '/workspace/app/utils/accessibilityEnhancer.ts',
        '/workspace/app/types/next.d.ts',
        '/workspace/app/components/ContentPromotionBanner.tsx',
        '/workspace/app/components/DynamicContentShowcase.tsx',
        '/workspace/app/components/ContentStatistics.tsx',
        '/workspace/app/components/ContentCarousel.tsx'
    ]
    
    fixed_count = 0
    total_count = 0
    
    for file_path in files_with_conflicts:
        if os.path.exists(file_path):
            total_count += 1
            if fix_remaining_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nFixed remaining conflicts in {fixed_count} out of {total_count} files")
    
    # Check if there are any remaining conflicts
    print("\nChecking for remaining conflicts...")
    remaining_conflicts = []
    for file_path in files_with_conflicts:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                        remaining_conflicts.append(file_path)
            except:
                pass
    
    if remaining_conflicts:
        print(f"Still have conflicts in: {remaining_conflicts}")
    else:
        print("All remaining merge conflicts have been resolved!")

if __name__ == "__main__":
    main()