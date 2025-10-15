#!/usr/bin/env python3
"""
Script to fix all import issues comprehensively
"""
import os
import re
import glob

def fix_imports(file_path):
    """Fix import issues in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has import issues
        if 'import' not in content:
            return False
        
        # Fix React import - remove unused React import
        content = re.sub(r"import React[^;]*;", "", content)
        
        # Fix icon imports - move from react to lucide-react
        icon_imports = [
            'Shield', 'Settings', 'Activity', 'Brain', 'Target', 'Zap', 'Database', 
            'Users', 'Award', 'TrendingUp', 'MapPin', 'Download', 'Pause', 'RefreshCw',
            'Eye', 'Filter', 'Calendar', 'Lock', 'Network', 'Radio', 'Antenna', 
            'Router', 'Server', 'PieChart', 'LineChart', 'DollarSign'
        ]
        
        # Find all icon imports from react
        react_imports = []
        for icon in icon_imports:
            if f"'{icon}'" in content and "from 'react'" in content:
                react_imports.append(icon)
        
        # Remove icon imports from react
        for icon in react_imports:
            content = re.sub(rf",\s*{icon}(?=\s*,|\s*from)", '', content)
            content = re.sub(rf"{icon}\s*,", '', content)
            content = re.sub(rf",\s*{icon}\s*from", ' from', content)
            content = re.sub(rf"^{icon}\s*,", '', content, flags=re.MULTILINE)
        
        # Clean up empty import lines
        content = re.sub(r"import\s*{\s*}\s*from\s*'react';", '', content)
        content = re.sub(r"import\s*{\s*}\s*from\s*'react'\s*;", '', content)
        
        # Add proper icon imports to lucide-react if any icons are used
        if any(icon in content for icon in icon_imports):
            # Find the first import line
            lines = content.split('\n')
            lucide_import_line = None
            lucide_import_index = -1
            
            for i, line in enumerate(lines):
                if 'lucide-react' in line:
                    lucide_import_line = line
                    lucide_import_index = i
                    break
            
            if lucide_import_line:
                # Extract existing imports from lucide-react
                existing_imports = []
                if '{' in lucide_import_line and '}' in lucide_import_line:
                    imports_part = lucide_import_line.split('{')[1].split('}')[0]
                    existing_imports = [imp.strip() for imp in imports_part.split(',') if imp.strip()]
                
                # Add missing icon imports
                used_icons = []
                for icon in icon_imports:
                    if icon in content and icon not in existing_imports:
                        used_icons.append(icon)
                
                if used_icons:
                    all_imports = existing_imports + used_icons
                    new_import_line = f"import {{ {', '.join(all_imports)} }} from 'lucide-react';"
                    lines[lucide_import_index] = new_import_line
                    content = '\n'.join(lines)
            else:
                # Add new lucide-react import
                used_icons = [icon for icon in icon_imports if icon in content]
                if used_icons:
                    new_import = f"import {{ {', '.join(used_icons)} }} from 'lucide-react';\n"
                    content = new_import + content
        
        # Remove duplicate imports
        lines = content.split('\n')
        seen_imports = set()
        filtered_lines = []
        
        for line in lines:
            if line.strip().startswith('import '):
                if line not in seen_imports:
                    seen_imports.add(line)
                    filtered_lines.append(line)
            else:
                filtered_lines.append(line)
        
        content = '\n'.join(filtered_lines)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed imports in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript/JSX files"""
    # Find all TypeScript/JSX files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if fix_imports(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed imports in {files_fixed} files")

if __name__ == "__main__":
    main()