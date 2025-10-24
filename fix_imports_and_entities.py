#!/usr/bin/env python3
"""
Comprehensive script to fix missing lucide-react icon imports and unescaped entities
"""

import os
import re
import glob

# Common icons used across the project
ICON_MAPPING = {
    'Camera': 'Camera',
    'CheckCircle': 'CheckCircle', 
    'Zap': 'Zap',
    'Star': 'Star',
    'Phone': 'Phone',
    'Mail': 'Mail',
    'Brain': 'Brain',
    'Eye': 'Eye',
    'BarChart': 'BarChart',
    'Target': 'Target',
    'Database': 'Database',
    'Users': 'Users',
    'Shield': 'Shield',
    'Helmet': 'Helmet',
    'DollarSign': 'DollarSign',
    'TrendingUp': 'TrendingUp',
    'Heart': 'Heart',
    'PhoneIcon': 'Phone',
    'MailIcon': 'Mail',
    'Palette': 'Palette',
    'Music': 'Music',
    'Video': 'Video',
    'Calendar': 'Calendar',
    'ArrowRight': 'ArrowRight',
    'Code': 'Code',
    'Cloud': 'Cloud',
    'Bot': 'Bot',
    'Cpu': 'Cpu',
    'Globe': 'Globe',
    'Clock': 'Clock',
    'Award': 'Award',
    'MapPin': 'MapPin',
    'Check': 'Check'
}

def fix_file(file_path):
    """Fix a single file by adding missing imports and fixing entities"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Find all used icons in the file
        used_icons = set()
        for icon_name in ICON_MAPPING.keys():
            if f'<{icon_name}' in content or f'<{icon_name} ' in content:
                used_icons.add(icon_name)
        
        # Check for existing lucide-react import
        lucide_import_match = re.search(r"import\s*{\s*([^}]+)\s*}\s*from\s*['\"]lucide-react['\"]", content)
        
        if used_icons:
            # Get existing imports
            existing_imports = set()
            if lucide_import_match:
                existing_imports = set([imp.strip() for imp in lucide_import_match.group(1).split(',')])
            
            # Add missing imports
            missing_imports = used_icons - existing_imports
            if missing_imports:
                # Convert to actual icon names
                actual_imports = [ICON_MAPPING[icon] for icon in missing_imports if icon in ICON_MAPPING]
                actual_imports = list(set(actual_imports))  # Remove duplicates
                
                if actual_imports:
                    if lucide_import_match:
                        # Update existing import
                        new_imports = list(existing_imports) + actual_imports
                        new_imports = sorted(list(set(new_imports)))  # Remove duplicates and sort
                        new_import_line = f"import {{ {', '.join(new_imports)} }} from 'lucide-react';"
                        content = content.replace(lucide_import_match.group(0), new_import_line)
                    else:
                        # Add new import after React import
                        react_import_match = re.search(r"import\s+React[^;]+;", content)
                        if react_import_match:
                            import_line = f"import {{ {', '.join(actual_imports)} }} from 'lucide-react';\n"
                            content = content.replace(react_import_match.group(0), 
                                                   react_import_match.group(0) + '\n' + import_line)
                        else:
                            # Add at the top
                            import_line = f"import {{ {', '.join(actual_imports)} }} from 'lucide-react';\n"
                            content = import_line + content
        
        # Fix unescaped entities
        content = re.sub(r"(?<!&)'(?![a-zA-Z0-9#])", "&apos;", content)
        content = re.sub(r'(?<!&)"(?![a-zA-Z0-9#])', "&quot;", content)
        
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
    """Main function to fix all files"""
    # Find all TypeScript/TSX files
    pattern = "src/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    print(f"Found {len(files)} files to process")
    
    fixed_count = 0
    for file_path in files:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files)} total files")

if __name__ == "__main__":
    main()