#!/usr/bin/env python3
"""
Script to fix common TypeScript errors in React files
"""

import os
import re
import glob

def fix_react_imports(file_path):
    """Fix React import issues and add missing imports."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has React import issues
        if 'React' not in content or 'ArrowRight' not in content:
            return False
        
        lines = content.split('\n')
        new_lines = []
        imports_added = set()
        
        # Common missing imports
        missing_imports = {
            'ArrowRight': 'lucide-react',
            'Star': 'lucide-react',
            'CheckCircle': 'lucide-react',
            'Brain': 'lucide-react',
            'Clock': 'lucide-react',
            'Target': 'lucide-react',
            'BarChart3': 'lucide-react',
            'Mail': 'lucide-react',
            'Settings': 'lucide-react',
            'Users': 'lucide-react',
            'Zap': 'lucide-react',
            'Shield': 'lucide-react',
            'TrendingUp': 'lucide-react'
        }
        
        # Find existing imports
        import_section_end = 0
        for i, line in enumerate(lines):
            if line.strip().startswith('import ') and 'from' in line:
                import_section_end = i + 1
            elif line.strip() and not line.strip().startswith('import '):
                break
        
        # Check what imports are needed
        needed_imports = []
        for symbol, module in missing_imports.items():
            if symbol in content and f"import {{ {symbol}" not in content:
                needed_imports.append((symbol, module))
        
        if not needed_imports:
            return False
        
        # Group imports by module
        imports_by_module = {}
        for symbol, module in needed_imports:
            if module not in imports_by_module:
                imports_by_module[module] = []
            imports_by_module[module].append(symbol)
        
        # Add new imports
        new_import_lines = []
        for module, symbols in imports_by_module.items():
            symbols_str = ', '.join(sorted(symbols))
            new_import_lines.append(f"import {{ {symbols_str} }} from '{module}';")
        
        # Insert imports after existing imports
        for i, line in enumerate(lines):
            new_lines.append(line)
            if i == import_section_end - 1:
                for import_line in new_import_lines:
                    new_lines.append(import_line)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        print(f"Fixed imports in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_unused_react_imports(file_path):
    """Remove unused React imports."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if React is imported but not used
        if "import React from 'react';" in content and "React." not in content and "<React." not in content:
            content = content.replace("import React from 'react';\n", "")
            content = content.replace("import React from 'react';", "")
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Removed unused React import from: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing React import in {file_path}: {e}")
        return False

def fix_duplicate_imports(file_path):
    """Fix duplicate imports."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        lines = content.split('\n')
        import_lines = []
        other_lines = []
        
        for line in lines:
            if line.strip().startswith('import '):
                import_lines.append(line)
            else:
                other_lines.append(line)
        
        # Remove duplicates while preserving order
        seen_imports = set()
        unique_imports = []
        for line in import_lines:
            if line not in seen_imports:
                seen_imports.add(line)
                unique_imports.append(line)
        
        if len(unique_imports) != len(import_lines):
            new_content = '\n'.join(unique_imports + other_lines)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"Fixed duplicate imports in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing duplicates in {file_path}: {e}")
        return False

def main():
    """Fix TypeScript errors in all React files."""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if (fix_react_imports(file_path) or 
                    fix_unused_react_imports(file_path) or 
                    fix_duplicate_imports(file_path)):
                    fixed_count += 1
    
    print(f"\nFixed TypeScript errors in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()