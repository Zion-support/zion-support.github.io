#!/usr/bin/env python3
"""
Final script to fix remaining missing icon imports.
"""

import os
import re
import glob

# Icon mappings for missing imports
ICON_MAPPINGS = {
    'BarChart': 'BarChart3',
    'PhoneIcon': 'Phone',
    'MailIcon': 'Mail'
}

def fix_file(file_path):
    """Fix missing icon imports in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Find missing icons
        missing_icons = set()
        for icon_name, lucide_name in ICON_MAPPINGS.items():
            if f"<{icon_name}" in content and f"import {{ {lucide_name}" not in content:
                missing_icons.add(lucide_name)
        
        # Add missing icon imports
        if missing_icons:
            # Find existing lucide-react import
            lucide_import_pattern = r"import\s*{\s*([^}]+)\s*}\s*from\s*['\"]lucide-react['\"]"
            lucide_match = re.search(lucide_import_pattern, content)
            
            if lucide_match:
                # Add to existing import
                existing_icons = [icon.strip() for icon in lucide_match.group(1).split(',')]
                all_icons = list(set(existing_icons + list(missing_icons)))
                all_icons.sort()
                
                new_import = f"import {{ {', '.join(all_icons)} }} from 'lucide-react';"
                content = re.sub(lucide_import_pattern, new_import, content)
            else:
                # Add new import after React import
                react_import_pattern = r"(import\s+React[^;]+;)"
                if re.search(react_import_pattern, content):
                    new_import = f"import {{ {', '.join(sorted(missing_icons))} }} from 'lucide-react';\n"
                    content = re.sub(react_import_pattern, r"\1\n" + new_import, content)
                else:
                    # Add at the top
                    new_import = f"import {{ {', '.join(sorted(missing_icons))} }} from 'lucide-react';\n"
                    content = new_import + content
        
        # Fix const vs let issue
        content = re.sub(r'let\s+clsEntries\s*=', 'const clsEntries =', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files."""
    # Find all TypeScript/TSX files
    patterns = [
        'src/**/*.tsx',
        'app/**/*.tsx',
        'components/**/*.tsx',
        '**/*.tsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates
    files_to_fix = list(set(files_to_fix))
    
    print(f"Found {len(files_to_fix)} files to check...")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files_to_fix)} files checked.")

if __name__ == "__main__":
    main()