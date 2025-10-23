#!/usr/bin/env python3
"""
Fix remaining linting issues: missing icons, unescaped entities, merge conflicts
"""

import os
import re
import glob

# Additional icons that were missed
ADDITIONAL_ICONS = {
    'PhoneIcon': 'Phone',
    'MailIcon': 'Mail', 
    'Download': 'Download',
    'AlertTriangle': 'AlertTriangle',
    'Settings': 'Settings',
    'Home': 'Home'
}

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix merge conflict markers
        if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>>' in content:
            print(f"Found merge conflict in {file_path}, cleaning up...")
            # Remove merge conflict markers and keep the HEAD version
            content = re.sub(r'<<<<<<< HEAD\n?', '', content)
            content = re.sub(r'=======.*?>>>>>>>.*?\n?', '', content, flags=re.DOTALL)
            content = re.sub(r'=======\n?', '', content)
            content = re.sub(r'>>>>>>>.*?\n?', '', content)
        
        # Find missing icons
        used_icons = set()
        for icon_name in ADDITIONAL_ICONS.keys():
            if f'<{icon_name}' in content or f'<{icon_name} ' in content:
                used_icons.add(icon_name)
        
        # Add missing icon imports
        if used_icons:
            lucide_import_match = re.search(r"import\s*{\s*([^}]+)\s*}\s*from\s*['\"]lucide-react['\"]", content)
            
            if lucide_import_match:
                existing_imports = set([imp.strip() for imp in lucide_import_match.group(1).split(',')])
                actual_imports = [ADDITIONAL_ICONS[icon] for icon in used_icons if icon in ADDITIONAL_ICONS]
                missing_imports = [imp for imp in actual_imports if imp not in existing_imports]
                
                if missing_imports:
                    new_imports = list(existing_imports) + missing_imports
                    new_imports = sorted(list(set(new_imports)))
                    new_import_line = f"import {{ {', '.join(new_imports)} }} from 'lucide-react';"
                    content = content.replace(lucide_import_match.group(0), new_import_line)
            else:
                # Add new import
                actual_imports = [ADDITIONAL_ICONS[icon] for icon in used_icons if icon in ADDITIONAL_ICONS]
                if actual_imports:
                    react_import_match = re.search(r"import\s+React[^;]+;", content)
                    if react_import_match:
                        import_line = f"import {{ {', '.join(actual_imports)} }} from 'lucide-react';\n"
                        content = content.replace(react_import_match.group(0), 
                                               react_import_match.group(0) + '\n' + import_line)
        
        # Fix unescaped entities more carefully
        # Only fix quotes and apostrophes in JSX text content, not in attributes
        def fix_entities_in_text(match):
            text = match.group(0)
            # Fix apostrophes
            text = re.sub(r"(?<!&)'(?![a-zA-Z0-9#])", "&apos;", text)
            # Fix quotes
            text = re.sub(r'(?<!&)"(?![a-zA-Z0-9#])', "&quot;", text)
            return text
        
        # Apply to text content between JSX tags, but be more careful
        content = re.sub(r'>([^<]*[&"\'][^<]*)<', fix_entities_in_text, content)
        
        # Fix specific const issue
        content = re.sub(r'let\s+clsEntries\s*=', 'const clsEntries =', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files"""
    # Find all TypeScript/TSX files
    pattern = "src/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    # Also include app directory
    app_pattern = "app/**/*.tsx"
    app_files = glob.glob(app_pattern, recursive=True)
    files.extend(app_files)
    
    print(f"Found {len(files)} files to process")
    
    fixed_count = 0
    for file_path in files:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files)} total files")

if __name__ == "__main__":
    main()