#!/usr/bin/env python3
"""
Script to fix duplicate imports and other specific TypeScript errors
"""

import os
import re
import glob

def fix_duplicate_imports_in_file(file_path):
    """Fix duplicate imports in a single file."""
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

def fix_unused_imports(file_path):
    """Remove unused imports."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        lines = content.split('\n')
        new_lines = []
        
        for line in lines:
            if line.strip().startswith('import '):
                # Extract imported symbols
                import_match = re.match(r"import\s*\{([^}]+)\}\s*from\s*['\"][^'\"]+['\"]", line)
                if import_match:
                    imported_symbols = [s.strip() for s in import_match.group(1).split(',')]
                    
                    # Check if any of these symbols are used in the file
                    used_symbols = []
                    for symbol in imported_symbols:
                        if symbol in content and f"<{symbol}" not in content and f"{symbol}." not in content:
                            # Check if it's actually used
                            symbol_usage = re.search(rf'\b{symbol}\b', content)
                            if symbol_usage:
                                used_symbols.append(symbol)
                    
                    if used_symbols:
                        if len(used_symbols) == len(imported_symbols):
                            new_lines.append(line)
                        else:
                            # Reconstruct import with only used symbols
                            module_match = re.search(r"from\s*['\"]([^'\"]+)['\"]", line)
                            if module_match:
                                module = module_match.group(1)
                                new_import = f"import {{ {', '.join(used_symbols)} }} from '{module}';"
                                new_lines.append(new_import)
                    else:
                        # No symbols are used, skip this import
                        continue
                else:
                    new_lines.append(line)
            else:
                new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"Fixed unused imports in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing unused imports in {file_path}: {e}")
        return False

def fix_missing_components(file_path):
    """Fix missing component imports and definitions."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix missing Helmet import
        if 'Helmet' in content and "import { Helmet }" not in content:
            content = content.replace(
                "import React from 'react';",
                "import React from 'react';\nimport { Helmet } from 'react-helmet-async';"
            )
        
        # Fix missing Link import
        if 'Link' in content and "import { Link }" not in content:
            content = content.replace(
                "import React from 'react';",
                "import React from 'react';\nimport { Link } from 'react-router-dom';"
            )
        
        # Fix missing component exports
        if 'PerformanceMonitor' in content and 'export default PerformanceMonitor' not in content:
            content = content.replace(
                'export { PerformanceMonitor };',
                'export default PerformanceMonitor;'
            )
        
        if 'ErrorFallback' in content and 'export default ErrorFallback' not in content:
            content = content.replace(
                'export { ErrorFallback };',
                'export default ErrorFallback;'
            )
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        if 'Helmet' in content or 'Link' in content or 'PerformanceMonitor' in content or 'ErrorFallback' in content:
            print(f"Fixed missing components in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing components in {file_path}: {e}")
        return False

def main():
    """Fix all remaining TypeScript errors."""
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
                if (fix_duplicate_imports_in_file(file_path) or 
                    fix_unused_imports(file_path) or
                    fix_missing_components(file_path)):
                    fixed_count += 1
    
    print(f"\nFixed remaining errors in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()