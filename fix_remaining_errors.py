#!/usr/bin/env python3
<<<<<<< HEAD
"""
Script to fix remaining errors.
"""

import os
import re

def fix_file(file_path, unused_imports=None, fix_syntax=False):
    """Fix a specific file."""
=======
import os
import re
import glob

def fix_remaining_errors(file_path):
    """Fix remaining common error patterns in TSX files"""
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
<<<<<<< HEAD
        # Fix unused imports
        if unused_imports:
            import_match = re.search(r'import\s*\{([^}]+)\}\s*from\s*[\'"]([^\'"]+)[\'"]', content)
            if import_match:
                imports_str = import_match.group(1)
                source = import_match.group(2)
                
                # Parse individual imports
                imports = [imp.strip() for imp in imports_str.split(',')]
                
                # Remove unused imports
                used_imports = [imp for imp in imports if imp not in unused_imports]
                
                # Reconstruct the import line
                if used_imports:
                    new_import = f"import {{ {', '.join(used_imports)} }} from '{source}';"
                    content = content.replace(import_match.group(0), new_import)
                else:
                    # If no imports are used, remove the line
                    content = content.replace(import_match.group(0), '')
        
        # Fix syntax errors
        if fix_syntax:
            # Remove empty lines at the end
            lines = content.split('\n')
            while lines and not lines[-1].strip():
                lines.pop()
            
            # Ensure proper closing
            if lines and not lines[-1].strip().endswith('}'):
                lines.append('}')
            
            content = '\n'.join(lines)
=======
        # Fix malformed className attributes with spaces
        content = re.sub(r'className="([^"]*?)([a-z])([A-Z])([^"]*?)"', r'className="\1\2-\3\4"', content)
        content = re.sub(r'className="([^"]*?)([a-z])([0-9])([^"]*?)"', r'className="\1\2-\3\4"', content)
        content = re.sub(r'className="([^"]*?)([0-9])([a-z])([^"]*?)"', r'className="\1\2-\3\4"', content)
        
        # Fix specific malformed patterns
        content = re.sub(r'className="([^"]*?)text-whitemb-([0-9]+)"', r'className="\1text-white mb-\2"', content)
        content = re.sub(r'className="([^"]*?)text-gray-300mb-([0-9]+)"', r'className="\1text-gray-300 mb-\2"', content)
        content = re.sub(r'className="([^"]*?)w-([0-9]+)h-([0-9]+)"', r'className="\1w-\2 h-\3"', content)
        content = re.sub(r'className="([^"]*?)px-([0-9]+)py-([0-9]+)"', r'className="\1px-\2 py-\3"', content)
        content = re.sub(r'className="([^"]*?)sm:px-([0-9]+)lg:px-([0-9]+)"', r'className="\1sm:px-\2 lg:px-\3"', content)
        content = re.sub(r'className="([^"]*?)max-w-([0-9]+)xl"', r'className="\1max-w-\2xl"', content)
        content = re.sub(r'className="([^"]*?)text-([0-9]+)xl"', r'className="\1text-\2xl"', content)
        content = re.sub(r'className="([^"]*?)font-boldtext-white"', r'className="\1font-bold text-white"', content)
        content = re.sub(r'className="([^"]*?)bg-gradient-to-r"', r'className="\1bg-gradient-to-r"', content)
        content = re.sub(r'className="([^"]*?)hover:from-([^"]*?)hover:to-([^"]*?)"', r'className="\1hover:from-\2 hover:to-\3"', content)
        content = re.sub(r'className="([^"]*?)transition-allduration-([0-9]+)"', r'className="\1transition-all duration-\2"', content)
        content = re.sub(r'className="([^"]*?)flexitems-center"', r'className="\1flex items-center"', content)
        content = re.sub(r'className="([^"]*?)justify-center"', r'className="\1justify-center"', content)
        content = re.sub(r'className="([^"]*?)mx-auto"', r'className="\1mx-auto"', content)
        content = re.sub(r'className="([^"]*?)w-fit"', r'className="\1w-fit"', content)
        content = re.sub(r'className="([^"]*?)ml-([0-9]+)"', r'className="\1ml-\2"', content)
        content = re.sub(r'className="([^"]*?)mr-([0-9]+)"', r'className="\1mr-\2"', content)
        content = re.sub(r'className="([^"]*?)mb-([0-9]+)"', r'className="\1mb-\2"', content)
        content = re.sub(r'className="([^"]*?)mt-([0-9]+)"', r'className="\1mt-\2"', content)
        content = re.sub(r'className="([^"]*?)pt-([0-9]+)"', r'className="\1pt-\2"', content)
        content = re.sub(r'className="([^"]*?)pb-([0-9]+)"', r'className="\1pb-\2"', content)
        content = re.sub(r'className="([^"]*?)py-([0-9]+)"', r'className="\1py-\2"', content)
        content = re.sub(r'className="([^"]*?)px-([0-9]+)"', r'className="\1px-\2"', content)
        
        # Fix malformed JSX elements
        content = re.sub(r'<([^>]+) / \>', r'<\1 />', content)
        content = re.sub(r'<([^>]+) / \>', r'<\1 />', content)
        
        # Fix malformed closing tags
        content = re.sub(r'</([^>]+) / \>', r'</\1>', content)
        
        # Fix malformed Helmet structure
        content = re.sub(r'<Helmet />\s*<title>([^<]+)</title>\s*<meta name="description" content="([^"]+)" / / />\s*</Helmet>', 
                        r'<Helmet>\n        <title>\1</title>\n        <meta name="description" content="\2" />\n      </Helmet>', content)
        
        # Fix malformed meta tags
        content = re.sub(r'<meta name="([^"]+)" content="([^"]+)" / / />', r'<meta name="\1" content="\2" />', content)
        
        # Fix malformed function names
        content = re.sub(r'const ([A-Za-z0-9]+) ([A-Za-z0-9]+)Page:', r'const \1\2Page:', content)
        content = re.sub(r'export default ([A-Za-z0-9]+) ([A-Za-z0-9]+)Page;', r'export default \1\2Page;', content)
        
        # Fix malformed JSX structure
        content = re.sub(r'<div className="([^"]+)" />\s*<([^>]+)>', r'<div className="\1">\n        <\2>', content)
        
        # Fix malformed closing structure
        content = re.sub(r'</Link>\s*</div>\s*</div>\s*</div>\s*</div>', r'        </Link>\n      </div>\n    </div>\n  </div>', content)
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
<<<<<<< HEAD
        
        return False
        
=======
        else:
            return False
            
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
    """Fix remaining errors."""
    files_to_fix = [
        ('app/ai-expense-tracker/page.tsx', ['Smartphone', 'TrendingUp'], False),
        ('app/ai-password-manager/page.tsx', ['Globe', 'Database'], False),
        ('app/ai-task-manager/page.tsx', ['Smartphone', 'Globe'], False),
        ('app/components/EnhancedSEOOptimizer.tsx', ['Phone', 'Mail', 'MapPin'], False),
        ('app/components/FuturisticHero.tsx', ['Phone', 'Mail', 'MapPin'], False),
        ('app/ai-automated-reporting/page.tsx', None, True),
        ('app/components/EnhancedAccessibilityEnhancer.tsx', None, True),
        ('app/components/FuturisticBackground.tsx', None, True),
        ('app/components/FuturisticServiceCard.tsx', None, True)
    ]
    
    files_fixed = 0
    for file_path, unused_imports, fix_syntax in files_to_fix:
        if os.path.exists(file_path):
            if fix_file(file_path, unused_imports, fix_syntax):
                files_fixed += 1
    
    print(f"Fixed {files_fixed} files")
=======
    # Find all TSX files in the app directory
    pattern = "/workspace/app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        if os.path.exists(file_path):
            if fix_remaining_errors(file_path):
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files)} total files")
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1

if __name__ == "__main__":
    main()