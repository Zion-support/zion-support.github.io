#!/usr/bin/env python3
"""
Script to fix remaining syntax errors.
"""

import os
import re

def fix_remaining_syntax():
    """Fix remaining syntax errors"""
    
    # Fix Footer component
    footer_path = '/workspace/app/components/Footer.tsx'
    if os.path.exists(footer_path):
        with open(footer_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix semicolons in arrays
        content = re.sub(r';\s*\]', ']', content)
        
        with open(footer_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Fixed Footer component")
    
    # Fix layout.tsx
    layout_path = '/workspace/app/layout.tsx'
    if os.path.exists(layout_path):
        with open(layout_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix commas after opening braces
        content = re.sub(r'{\s*,', '{', content)
        
        with open(layout_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Fixed layout.tsx")
    
    # Fix function names that start with numbers
    problematic_files = [
        '5g-edge-computing/page.tsx',
        '5g-implementation/page.tsx',
        '5g-iot-solutions/page.tsx',
        '5g-network-infrastructure/page.tsx',
        '5g-private-networks/page.tsx',
        '5g-smart-city-solutions/page.tsx',
        '5g-solutions/page.tsx'
    ]
    
    for file_path in problematic_files:
        full_path = f'/workspace/app/{file_path}'
        if os.path.exists(full_path):
            with open(full_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Fix function names starting with numbers
            content = re.sub(r'export default function 5g(\w+)\(\)', r'export default function FiveG\1()', content)
            
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed function name in {file_path}")
    
    print("Fixed remaining syntax errors")

if __name__ == "__main__":
    fix_remaining_syntax()