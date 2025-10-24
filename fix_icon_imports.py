#!/usr/bin/env python3
"""
Script to fix missing Lucide React icon imports across all pages.
"""

import os
import re
from pathlib import Path
from collections import defaultdict

# Common Lucide React icons used in the project
ICON_MAPPING = {
    'CheckCircle': 'CheckCircle',
    'ArrowRight': 'ArrowRight',
    'Phone': 'Phone',
    'Mail': 'Mail',
    'MapPin': 'MapPin',
    'Zap': 'Zap',
    'Shield': 'Shield',
    'Brain': 'Brain',
    'Globe': 'Globe',
    'Star': 'Star',
    'Camera': 'Camera',
    'Eye': 'Eye',
    'BarChart': 'BarChart',
    'Target': 'Target',
    'TrendingUp': 'TrendingUp',
    'Users': 'Users',
    'Settings': 'Settings',
    'Database': 'Database',
    'Code': 'Code',
    'Cloud': 'Cloud',
    'Heart': 'Heart',
    'Palette': 'Palette',
    'Music': 'Music',
    'Video': 'Video',
    'DollarSign': 'DollarSign',
    'Calendar': 'Calendar',
    'Clock': 'Clock',
    'Bot': 'Bot',
    'Cpu': 'Cpu',
    'PhoneIcon': 'Phone',
    'MailIcon': 'Mail',
    'Check': 'Check',
    'Helmet': 'Helmet'
}

def find_used_icons(content):
    """Find all Lucide React icons used in the content."""
    used_icons = set()
    
    # Look for JSX elements that are likely Lucide icons
    icon_pattern = r'<(\w+)(?:\s|>)'
    matches = re.findall(icon_pattern, content)
    
    for match in matches:
        if match in ICON_MAPPING:
            used_icons.add(ICON_MAPPING[match])
    
    return used_icons

def fix_icon_imports(file_path):
    """Fix missing Lucide React icon imports in a file."""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Skip if not a React component file
    if not ('import React' in content or 'export default' in content):
        return False
    
    # Find used icons
    used_icons = find_used_icons(content)
    
    if not used_icons:
        return False
    
    # Check if lucide-react is already imported
    lucide_import_match = re.search(r"import\s*{\s*([^}]+)\s*}\s*from\s*['\"]lucide-react['\"]", content)
    
    if lucide_import_match:
        # Update existing import
        existing_icons = [icon.strip() for icon in lucide_import_match.group(1).split(',')]
        all_icons = list(set(existing_icons + list(used_icons)))
        all_icons.sort()
        
        new_import = f"import {{ {', '.join(all_icons)} }} from 'lucide-react'"
        content = content.replace(lucide_import_match.group(0), new_import)
    else:
        # Add new import after React import
        react_import_match = re.search(r"import\s+React[^;]+;", content)
        if react_import_match:
            new_import = f"\nimport {{ {', '.join(sorted(used_icons))} }} from 'lucide-react'"
            content = content.replace(react_import_match.group(0), react_import_match.group(0) + new_import)
        else:
            # Add at the top
            new_import = f"import {{ {', '.join(sorted(used_icons))} }} from 'lucide-react'\n"
            content = new_import + content
    
    # Write the updated content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def fix_unescaped_entities(file_path):
    """Fix unescaped entities in JSX."""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix unescaped quotes and apostrophes
    content = re.sub(r"'([^']*)'", r"&apos;\1&apos;", content)
    content = re.sub(r'"([^"]*)"', r"&quot;\1&quot;", content)
    
    # Write the updated content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    """Main function to fix all icon imports and unescaped entities."""
    
    # Find all React component files
    component_files = []
    
    # Search in app directory
    app_dir = Path('/workspace/app')
    if app_dir.exists():
        component_files.extend(app_dir.rglob('*.tsx'))
    
    # Search in src directory
    src_dir = Path('/workspace/src')
    if src_dir.exists():
        component_files.extend(src_dir.rglob('*.tsx'))
    
    icon_fixes = 0
    entity_fixes = 0
    
    for file_path in component_files:
        try:
            if fix_icon_imports(str(file_path)):
                icon_fixes += 1
                print(f"Fixed icon imports in: {file_path}")
            
            if fix_unescaped_entities(str(file_path)):
                entity_fixes += 1
                print(f"Fixed unescaped entities in: {file_path}")
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nFixed icon imports in {icon_fixes} files")
    print(f"Fixed unescaped entities in {entity_fixes} files")

if __name__ == '__main__':
    main()