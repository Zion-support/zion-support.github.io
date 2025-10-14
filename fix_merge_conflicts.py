#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts by keeping the HEAD version and removing conflict markers."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict blocks
        # <<<<<<< HEAD
        # ... content ...
        # =======
        # ... other content ...
        # >>>>>>> branch-name or commit-hash
        
        # Remove the entire conflict block and keep only the HEAD version
        # This regex matches from <<<<<<< HEAD to ======= and removes everything until >>>>>>>
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n?'
        
        # Replace with just the HEAD content
        fixed_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflicts in one file
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n?', '', fixed_content)
        fixed_content = re.sub(r'=======\n?', '', fixed_content)
        fixed_content = re.sub(r'>>>>>>> [^\n]+\n?', '', fixed_content)
        
        # Clean up any extra newlines
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JSX files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Also check specific files mentioned in the error output
    specific_files = [
        'app/5g-edge-computing/page.tsx',
        'app/5g-iot-solutions/page.tsx',
        'app/5g-mobile-applications/page.tsx',
        'app/5g-network-infrastructure/page.tsx',
        'app/5g-network-optimization/page.tsx',
        'app/5g-private-networks/page.tsx',
        'app/5g-smart-city-solutions/page.tsx',
        'app/about/page.tsx',
        'app/ai-3d-generation/page.tsx',
        'app/blockchain-web3/page.tsx',
        'app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx',
        'app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
        'app/blog/ai-enterprise-transformation-2025/page.tsx',
        'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
        'app/guides/autonomous-business-processes-implementation-guide-2026/page.tsx'
    ]
    
    files_to_fix.extend(specific_files)
    files_to_fix = list(set(files_to_fix))  # Remove duplicates
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()