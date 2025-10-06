#!/usr/bin/env python3
"""
Script to fix merge conflicts in TypeScript files
"""
import re
import os

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern to match merge conflicts
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [a-f0-9]+'
        
        def replace_conflict(match):
            head_content = match.group(1)
            # Clean up any remaining conflict markers
            head_content = re.sub(r'<<<<<<< HEAD\n?', '', head_content)
            head_content = re.sub(r'=======\n?', '', head_content)
            head_content = re.sub(r'>>>>>>> [a-f0-9]+\n?', '', head_content)
            return head_content
        
        # Replace all merge conflicts
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n?', '', new_content)
        new_content = re.sub(r'=======\n?', '', new_content)
        new_content = re.sub(r'>>>>>>> [a-f0-9]+\n?', '', new_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix merge conflicts in all TypeScript files"""
    files_to_fix = [
        'src/utils/performanceOptimizer.ts',
        'src/hooks/usePerformance.ts',
        'app/components/LoadingSpinner.tsx'
    ]
    
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            fix_merge_conflicts(file_path)
        else:
            print(f"File not found: {file_path}")

if __name__ == "__main__":
    main()