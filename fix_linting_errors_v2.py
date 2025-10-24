#!/usr/bin/env python3
"""
Improved script to fix linting errors without breaking JavaScript syntax.
This script will:
1. Add missing icon imports from lucide-react
2. Fix unescaped entities in JSX content only (not in code)
3. Add missing Helmet imports where needed
"""

import os
import re
import glob
from pathlib import Path

# Common icon mappings based on the errors
ICON_MAPPINGS = {
    'Camera': 'Camera',
    'CheckCircle': 'CheckCircle', 
    'Zap': 'Zap',
    'Star': 'Star',
    'Phone': 'Phone',
    'Mail': 'Mail',
    'Brain': 'Brain',
    'Eye': 'Eye',
    'BarChart': 'BarChart3',
    'DollarSign': 'DollarSign',
    'Shield': 'Shield',
    'TrendingUp': 'TrendingUp',
    'Target': 'Target',
    'Heart': 'Heart',
    'Users': 'Users',
    'Helmet': 'Helmet',
    'Palette': 'Palette',
    'Music': 'Music',
    'Video': 'Video',
    'Calendar': 'Calendar',
    'PhoneIcon': 'Phone',
    'MailIcon': 'Mail',
    'Database': 'Database',
    'Cloud': 'Cloud',
    'Code': 'Code',
    'Bot': 'Bot',
    'Cpu': 'Cpu',
    'Globe': 'Globe',
    'Clock': 'Clock',
    'Check': 'Check',
    'Award': 'Award',
    'ArrowRight': 'ArrowRight',
    'MapPin': 'MapPin'
}

def fix_file(file_path):
    """Fix a single file by adding missing imports and fixing unescaped entities."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # First, restore any broken syntax from previous script
        content = content.replace('&quot;', '"')
        content = content.replace('&apos;', "'")
        
        # Find all undefined icons in the file by looking for JSX usage
        undefined_icons = set()
        
        # Look for JSX elements that are likely icons
        jsx_icon_pattern = r'<(\w+)(?:\s|>)'
        jsx_matches = re.findall(jsx_icon_pattern, content)
        for match in jsx_matches:
            if match in ICON_MAPPINGS and match not in ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button', 'a', 'img', 'ul', 'ol', 'li', 'section', 'article', 'header', 'footer', 'main', 'nav', 'aside', 'form', 'input', 'label', 'select', 'option', 'textarea', 'table', 'thead', 'tbody', 'tr', 'td', 'th', 'br', 'hr', 'strong', 'em', 'b', 'i', 'u', 'small', 'big', 'sub', 'sup', 'code', 'pre', 'blockquote', 'cite', 'abbr', 'acronym', 'address', 'bdo', 'big', 'del', 'dfn', 'ins', 'kbd', 'q', 'samp', 'var', 'time', 'mark', 'ruby', 'rt', 'rp', 'bdi', 'bdo', 'wbr', 'details', 'summary', 'dialog', 'menu', 'menuitem', 'command', 'keygen', 'output', 'progress', 'meter', 'datalist', 'optgroup', 'fieldset', 'legend', 'iframe', 'object', 'embed', 'param', 'source', 'track', 'canvas', 'svg', 'math', 'script', 'noscript', 'style', 'link', 'meta', 'title', 'base', 'head', 'body', 'html']:
                undefined_icons.add(ICON_MAPPINGS[match])
        
        # Add missing icon imports
        if undefined_icons:
            # Find existing lucide-react import
            lucide_import_pattern = r"import\s*{\s*([^}]+)\s*}\s*from\s*['\"]lucide-react['\"]"
            lucide_match = re.search(lucide_import_pattern, content)
            
            if lucide_match:
                # Add to existing import
                existing_icons = [icon.strip() for icon in lucide_match.group(1).split(',')]
                all_icons = list(set(existing_icons + list(undefined_icons)))
                all_icons.sort()
                
                new_import = f"import {{ {', '.join(all_icons)} }} from 'lucide-react';"
                content = re.sub(lucide_import_pattern, new_import, content)
            else:
                # Add new import after React import
                react_import_pattern = r"(import\s+React[^;]+;)"
                if re.search(react_import_pattern, content):
                    new_import = f"import {{ {', '.join(sorted(undefined_icons))} }} from 'lucide-react';\n"
                    content = re.sub(react_import_pattern, r"\1\n" + new_import, content)
                else:
                    # Add at the top
                    new_import = f"import {{ {', '.join(sorted(undefined_icons))} }} from 'lucide-react';\n"
                    content = new_import + content
        
        # Fix unescaped entities in JSX content only (not in code strings)
        # This is more targeted - only fix quotes in JSX text content
        # Look for patterns like: >text with 'quotes'< or >text with "quotes"<
        def fix_jsx_quotes(match):
            text = match.group(1)
            # Only fix if it's not already escaped and not in a code context
            if '&apos;' not in text and '&quot;' not in text:
                text = text.replace("'", "&apos;")
                text = text.replace('"', "&quot;")
            return f">{text}<"
        
        # Fix quotes in JSX text content
        content = re.sub(r'>([^<]*[\'"][^<]*)<', fix_jsx_quotes, content)
        
        # Add Helmet import if needed and not present
        if 'Helmet' in content and 'import { Helmet }' not in content and 'import Helmet' not in content:
            # Add Helmet import
            react_import_pattern = r"(import\s+React[^;]+;)"
            if re.search(react_import_pattern, content):
                content = re.sub(react_import_pattern, r"\1\nimport { Helmet } from 'react-helmet-async';", content)
            else:
                content = "import { Helmet } from 'react-helmet-async';\n" + content
        
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