#!/usr/bin/env python3
"""
Script to fix remaining errors.
"""

import os
import re

def fix_file(file_path, unused_imports=None, fix_syntax=False):
    """Fix a specific file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
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
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
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

if __name__ == "__main__":
    main()