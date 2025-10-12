#!/usr/bin/env python3
"""
Manual fix for specific JSX errors
"""

import os
import re

def fix_specific_jsx_errors(file_path):
    """Fix specific JSX errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed JSX fragments and closing tags
        lines = content.split('\n')
        fixed_lines = []
        
        for line in lines:
            # Skip standalone <> or </>
            if line.strip() in ['<>', '</>']:
                continue
            
            # Fix malformed JSX fragments at end of lines
            line = re.sub(r'\s*<>\s*$', '', line)
            line = re.sub(r'^\s*</>\s*', '', line)
            
            # Fix missing spaces in className
            line = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', line)
            
            # Fix missing spaces in other attributes
            line = re.sub(r'(\w)([A-Z])', r'\1 \2', line)
            
            fixed_lines.append(line)
        
        # Join lines and clean up
        content = '\n'.join(fixed_lines)
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

# Fix specific problematic files
problematic_files = [
    'EnhancedFooter.tsx',
    'app/5g-data-analytics/page.tsx',
    'app/5g-edge-computing/page.tsx',
    'app/5g-implementation/page.tsx',
    'app/5g-iot-solutions/page.tsx',
    'app/5g-mobile-applications/page.tsx',
    'app/5g-network-infrastructure/page.tsx',
    'app/5g-private-networks/page.tsx',
    'app/5g-smart-city-solutions/page.tsx',
    'app/5g-solutions/page.tsx',
    'app/App.tsx'
]

for file_path in problematic_files:
    if os.path.exists(file_path):
        print(f"Fixing {file_path}...")
        if fix_specific_jsx_errors(file_path):
            print(f"Fixed {file_path}")
        else:
            print(f"No changes needed for {file_path}")
    else:
        print(f"File not found: {file_path}")

print("JSX error fixing completed!")