#!/usr/bin/env python3
"""
Advanced Merge Conflict Resolver
Resolves all types of merge conflicts including nested ones
"""

import re
from pathlib import Path

def resolve_all_conflicts(file_path):
    """Resolve all merge conflicts in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        max_iterations = 10
        iteration = 0
        
        while iteration < max_iterations:
            # Pattern for standard conflicts
            pattern1 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
            
            # Replace with incoming version (group 2)
            new_content = re.sub(pattern1, r'\2\n', content, flags=re.DOTALL)
            
            # Check if we made any changes
            if new_content == content:
                break
                
            content = new_content
            iteration += 1
        
        # Remove any remaining conflict markers (in case of malformed conflicts)
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Write back if changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Fixed {file_path}")
            return True
        else:
            print(f"- No changes needed for {file_path}")
            return False
            
    except Exception as e:
        print(f"✗ Error processing {file_path}: {e}")
        return False

def main():
    """Main function"""
    files = [
        'app/components/NewestContent2025Banner.tsx',
        'app/enterprise/page.tsx',
        'app/page-optimized.tsx',
        'src/hooks/usePerformance.ts',
        'src/utils/analytics.ts',
        'src/utils/codeSplitting.ts',
        'src/utils/errorHandler.ts',
    ]
    
    fixed_count = 0
    for file_path in files:
        full_path = Path('/workspace') / file_path
        if full_path.exists():
            if resolve_all_conflicts(full_path):
                fixed_count += 1
        else:
            print(f"! File not found: {file_path}")
    
    print(f"\n{'='*60}")
    print(f"Fixed {fixed_count} file(s)")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()