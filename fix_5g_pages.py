#!/usr/bin/env python3
import os
import re

def fix_5g_page(file_path):
    """Fix merge conflicts in 5G pages by choosing the correct version"""
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Pattern to match the merge conflict
    pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> cursor/fix-errors-and-merge-to-main-e61d'
    
    # Find the correct version (after =======)
    match = re.search(pattern, content, re.DOTALL)
    if match:
        correct_version = match.group(1).strip()
        
        # Remove the merge conflict markers and keep only the correct version
        fixed_content = re.sub(pattern, correct_version, content, flags=re.DOTALL)
        
        with open(file_path, 'w') as f:
            f.write(fixed_content)
        print(f"Fixed: {file_path}")
        return True
    return False

def main():
    # List of 5G pages to fix
    pages = [
        'app/5g-edge-computing/page.tsx',
        'app/5g-implementation/page.tsx', 
        'app/5g-iot-solutions/page.tsx',
        'app/5g-mobile-applications/page.tsx',
        'app/5g-network-infrastructure/page.tsx',
        'app/5g-private-networks/page.tsx'
    ]
    
    fixed_count = 0
    for page in pages:
        if os.path.exists(page):
            if fix_5g_page(page):
                fixed_count += 1
        else:
            print(f"File not found: {page}")
    
    print(f"Fixed {fixed_count} 5G pages")

if __name__ == "__main__":
    main()