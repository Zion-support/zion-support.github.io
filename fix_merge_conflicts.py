#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the version after ======="""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            return False
        
        # Keep the version after ======= (usually the more complete one)
        new_content = parts[0]  # Content before first conflict
        
        for i in range(1, len(parts), 3):
            if i + 2 < len(parts):
                # Keep the version after =======
                new_content += parts[i + 1]  # Content after =======
                if i + 2 < len(parts):
                    new_content += parts[i + 2]  # Content after >>>>>>>
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts',
        '*.js',
        '*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Also check specific files we know have conflicts
    known_conflict_files = [
        'app/services/page.tsx',
        'app/pricing/page.tsx',
        'app/ai-services/page.tsx',
        'app/micro-saas/page.tsx',
        'app/components/Navigation.tsx',
        'app/components/Footer.tsx',
        'app/globals.css',
        'app/it-services/page.tsx',
        'app/ai-automation/page.tsx'
    ]
    
    files_to_fix.extend(known_conflict_files)
    files_to_fix = list(set(files_to_fix))  # Remove duplicates
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()