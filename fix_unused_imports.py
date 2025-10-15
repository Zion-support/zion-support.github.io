#!/usr/bin/env python3
import os
import re
import glob
import ast
import sys

def remove_unused_imports(file_path):
    """Remove unused imports from a TypeScript/TSX file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all import statements
        import_pattern = r'import\s+.*?from\s+[\'"][^\'"]+[\'"];?\n?'
        imports = re.findall(import_pattern, content, re.MULTILINE)
        
        # Find all used identifiers in the file
        used_identifiers = set()
        
        # Remove import statements to find used identifiers
        content_without_imports = re.sub(import_pattern, '', content)
        
        # Find all identifiers that might be used
        identifier_pattern = r'\b[A-Za-z_$][A-Za-z0-9_$]*\b'
        all_identifiers = re.findall(identifier_pattern, content_without_imports)
        
        # Filter out common keywords and built-ins
        keywords = {
            'const', 'let', 'var', 'function', 'class', 'interface', 'type', 'enum',
            'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'default', 'break',
            'continue', 'return', 'try', 'catch', 'finally', 'throw', 'new', 'this',
            'super', 'extends', 'implements', 'import', 'export', 'from', 'as',
            'true', 'false', 'null', 'undefined', 'typeof', 'instanceof', 'in', 'of',
            'void', 'any', 'string', 'number', 'boolean', 'object', 'array', 'never',
            'unknown', 'bigint', 'symbol', 'void', 'null', 'undefined', 'never',
            'React', 'useState', 'useEffect', 'useCallback', 'useMemo', 'useRef',
            'useContext', 'useReducer', 'useLayoutEffect', 'useImperativeHandle',
            'useDebugValue', 'memo', 'lazy', 'Suspense', 'Fragment', 'StrictMode',
            'createContext', 'createElement', 'cloneElement', 'isValidElement',
            'Children', 'Component', 'PureComponent', 'forwardRef', 'createRef',
            'createPortal', 'unmountComponentAtNode', 'findDOMNode', 'hydrate',
            'render', 'unmount', 'createFactory', 'isValidElement', 'version',
            'PropTypes', 'createClass', 'addons', 'DOM', 'Fragment', 'StrictMode',
            'Suspense', 'lazy', 'memo', 'forwardRef', 'createRef', 'createPortal',
            'unmountComponentAtNode', 'findDOMNode', 'hydrate', 'render', 'unmount',
            'createFactory', 'isValidElement', 'version', 'PropTypes', 'createClass',
            'addons', 'DOM', 'Fragment', 'StrictMode', 'Suspense', 'lazy', 'memo',
            'forwardRef', 'createRef', 'createPortal', 'unmountComponentAtNode',
            'findDOMNode', 'hydrate', 'render', 'unmount', 'createFactory',
            'isValidElement', 'version', 'PropTypes', 'createClass', 'addons', 'DOM'
        }
        
        # Add identifiers that are likely used
        for identifier in all_identifiers:
            if identifier not in keywords and len(identifier) > 1:
                used_identifiers.add(identifier)
        
        # Process each import statement
        new_imports = []
        for import_stmt in imports:
            # Extract the import part (before 'from')
            import_part = import_stmt.split('from')[0].strip()
            
            # Handle different import patterns
            if '{' in import_part:
                # Named imports: import { A, B, C } from 'module'
                named_imports = re.findall(r'\{([^}]+)\}', import_part)
                if named_imports:
                    used_named_imports = []
                    for named_group in named_imports:
                        imports_in_group = [imp.strip() for imp in named_group.split(',')]
                        for imp in imports_in_group:
                            # Handle 'as' aliases
                            actual_name = imp.split(' as ')[0].strip()
                            if actual_name in used_identifiers or imp in used_identifiers:
                                used_named_imports.append(imp)
                    
                    if used_named_imports:
                        new_import_stmt = f"import {{ {', '.join(used_named_imports)} }} from {import_stmt.split('from')[1]}"
                        new_imports.append(new_import_stmt)
            else:
                # Default import: import React from 'react'
                default_import = import_part.replace('import', '').strip()
                if default_import in used_identifiers:
                    new_imports.append(import_stmt)
        
        # Replace all imports with the cleaned ones
        if new_imports:
            new_content = '\n'.join(new_imports) + '\n\n' + content_without_imports
        else:
            new_content = content_without_imports
        
        # Clean up extra newlines
        new_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', new_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed unused imports in: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all .tsx files in the app directory
    app_files = glob.glob('/workspace/app/**/*.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in app_files:
        if remove_unused_imports(file_path):
            fixed_count += 1
    
    print(f"Fixed unused imports in {fixed_count} files")

if __name__ == "__main__":
    main()