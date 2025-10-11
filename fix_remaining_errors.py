#!/usr/bin/env python3
"""
Script to fix the remaining malformed files after merge conflict resolution.
"""

import os
import re
from pathlib import Path

def fix_malformed_file(file_path):
    """Fix malformed files with syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has malformed syntax
        if 'benefits: [' not in content or '} ,' in content:
            # This is a malformed file that needs fixing
            lines = content.split('\n')
            fixed_lines = []
            
            # Find the start of the malformed section
            in_malformed_section = False
            skip_until_export = False
            
            for i, line in enumerate(lines):
                # Skip the first function definition
                if line.strip().startswith('export default function PagePage()'):
                    skip_until_export = True
                    continue
                
                # Look for the start of the real component
                if line.strip().startswith('const ') and 'Page: React.FC' in line:
                    skip_until_export = False
                    in_malformed_section = True
                    fixed_lines.append(line)
                    continue
                
                if skip_until_export:
                    continue
                
                # Skip malformed lines
                if in_malformed_section and ('benefits: [' in line and '} ,' in line):
                    continue
                
                if in_malformed_section and line.strip() == '} ]':
                    # End of malformed section, start proper structure
                    fixed_lines.append('  ];')
                    continue
                
                # Keep all other lines
                fixed_lines.append(line)
            
            # Write the fixed content
            fixed_content = '\n'.join(fixed_lines)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            
            return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix malformed files."""
    # List of files that need fixing
    files_to_fix = [
        '/workspace/app/enterprise-solutions/page.tsx',
        '/workspace/app/it-infrastructure-design/page.tsx',
        '/workspace/app/it-project-management/page.tsx',
        '/workspace/app/mobile-app-development/page.tsx',
        '/workspace/app/system-administration/page.tsx'
    ]
    
    fixed_count = 0
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_malformed_file(file_path):
                fixed_count += 1
                print(f"Fixed: {file_path}")
            else:
                print(f"Failed to fix: {file_path}")
    
    print(f"\nSummary:")
    print(f"Files fixed: {fixed_count}")
    print(f"Files failed: {len(files_to_fix) - fixed_count}")

if __name__ == "__main__":
    main()