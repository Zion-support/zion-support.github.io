#!/usr/bin/env python3
"""
Script to fix 5G component names that start with numbers.
"""

import os
import re

def fix_5g_component(file_path):
    """Fix 5G component names."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace component names that start with 5G
    content = re.sub(r'const 5G([A-Za-z]+): React\.FC', r'const FiveG\1: React.FC', content)
    content = re.sub(r'export default 5G([A-Za-z]+);', r'export default FiveG\1;', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    """Fix all 5G components."""
    files_to_fix = [
        'app/5g-edge-computing/page.tsx',
        'app/5g-iot-solutions/page.tsx',
        'app/5g-network-infrastructure/page.tsx',
        'app/5g-private-networks/page.tsx',
        'app/5g-smart-city-solutions/page.tsx',
    ]
    
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            fix_5g_component(file_path)
            print(f"Fixed: {file_path}")

if __name__ == "__main__":
    main()