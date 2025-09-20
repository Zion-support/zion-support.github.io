#!/usr/bin/env python3
"""
Script to fix remaining syntax errors that the previous script missed
"""

import os
import re
import glob

def fix_remaining_errors(file_path):
    """Fix remaining syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix broken import statements with semicolons
        # 1. Fix "import { useEffect;" -> "import { useEffect,"
        content = re.sub(r'import\s*{\s*([^;]+);\s*', r'import { \1, ', content)
        
        # 2. Fix "} from "react-router-d;o;m;";" -> "} from "react-router-dom";"
        content = re.sub(r'from\s+"([^";]+);\s*([^";]+);\s*([^";]+);\s*"', r'from "\1\2\3"', content)
        
        # 3. Fix broken import statements with semicolons in strings
        content = re.sub(r'"([^";]+);\s*([^";]+);\s*([^";]+);\s*"', r'"\1\2\3"', content)
        
        # 4. Fix broken import statements with semicolons in strings (2 parts)
        content = re.sub(r'"([^";]+);\s*([^";]+);\s*"', r'"\1\2"', content)
        
        # 5. Fix broken import statements with semicolons in strings (single)
        content = re.sub(r'"([^";]+);\s*"', r'"\1"', content)
        
        # Fix interface and type errors
        # 6. Fix broken interfaces with trailing commas
        content = re.sub(r'(\w+):\s*([^,;]+),\s*$', r'\1: \2;', content, flags=re.MULTILINE)
        
        # 7. Fix broken interfaces with trailing commas and semicolons
        content = re.sub(r'(\w+):\s*([^,;]+),\s*;\s*$', r'\1: \2;', content, flags=re.MULTILINE)
        
        # 8. Fix broken interfaces with trailing commas and semicolons in middle
        content = re.sub(r'(\w+):\s*([^,;]+),\s*;\s*([^,}])', r'\1: \2;\n  \3', content, flags=re.MULTILINE)
        
        # Fix constructor errors
        # 9. Fix broken constructors with trailing commas
        content = re.sub(r'super\(props\),\s*$', r'super(props);', content, flags=re.MULTILINE)
        
        # 10. Fix broken constructors with trailing commas and semicolons
        content = re.sub(r'super\(props\),\s*;\s*$', r'super(props);', content, flags=re.MULTILINE)
        
        # 11. Fix broken constructors with trailing commas and semicolons in middle
        content = re.sub(r'super\(props\),\s*;\s*([^,}])', r'super(props);\n    \1', content, flags=re.MULTILINE)
        
        # Fix method errors
        # 12. Fix broken methods with trailing commas
        content = re.sub(r'(\w+)\s*=\s*\(\)\s*=>\s*{\s*([^}]+),\s*$', r'\1 = () => {\n    \2\n  };', content, flags=re.MULTILINE)
        
        # 13. Fix broken methods with trailing commas and semicolons
        content = re.sub(r'(\w+)\s*=\s*\(\)\s*=>\s*{\s*([^}]+),\s*;\s*$', r'\1 = () => {\n    \2\n  };', content, flags=re.MULTILINE)
        
        # 14. Fix broken methods with trailing commas and semicolons in middle
        content = re.sub(r'(\w+)\s*=\s*\(\)\s*=>\s*{\s*([^}]+),\s*;\s*([^,}])', r'\1 = () => {\n    \2;\n    \3', content, flags=re.MULTILINE)
        
        # Fix object property errors
        # 15. Fix broken object properties with trailing commas
        content = re.sub(r'(\w+):\s*([^,;]+),\s*$', r'\1: \2,', content, flags=re.MULTILINE)
        
        # 16. Fix broken object properties with trailing commas and semicolons
        content = re.sub(r'(\w+):\s*([^,;]+),\s*;\s*$', r'\1: \2,', content, flags=re.MULTILINE)
        
        # 17. Fix broken object properties with trailing commas and semicolons in middle
        content = re.sub(r'(\w+):\s*([^,;]+),\s*;\s*([^,}])', r'\1: \2,\n    \3', content, flags=re.MULTILINE)
        
        # Fix function call errors
        # 18. Fix broken function calls with trailing commas
        content = re.sub(r'(\w+)\(([^)]+),\s*\)', r'\1(\2)', content)
        
        # 19. Fix broken function calls with trailing commas and semicolons
        content = re.sub(r'(\w+)\(([^)]+),\s*;\s*\)', r'\1(\2)', content)
        
        # Fix array access errors
        # 20. Fix broken array access with semicolons
        content = re.sub(r'(\w+)\[\s*([^\]]+);\s*;\s*([^\]]*)\]', r'\1[\2]', content)
        
        # Fix object access errors
        # 21. Fix broken object access with semicolons
        content = re.sub(r'(\w+)\.\s*([^.;]+);\s*;\s*([^.;]*)', r'\1.\2', content)
        
        # Fix conditional errors
        # 22. Fix broken conditionals with semicolons
        content = re.sub(r'if\s*\(\s*([^)]+);\s*;\s*([^)]*)\)', r'if (\1\2)', content)
        
        # Fix return statement errors
        # 23. Fix broken returns with semicolons
        content = re.sub(r'return\s+([^;]+);\s*;\s*([^;]*)', r'return \1\2;', content)
        
        # Fix export errors
        # 24. Fix broken exports with semicolons
        content = re.sub(r'export\s+default\s+([^;]+);\s*;\s*([^;]*)', r'export default \1\2;', content)
        
        # Fix template literal errors
        # 25. Fix broken template literals with semicolons
        content = re.sub(r'`([^`]+);\s*;\s*([^`]*)`', r'`\1\2`', content)
        
        # Fix class method errors
        # 26. Fix broken class methods with semicolons
        content = re.sub(r'(\w+)\s*\(\s*([^)]*);\s*;\s*([^)]*)\)\s*{', r'\1(\2\3) {', content)
        
        # Fix interface errors
        # 27. Fix broken interfaces with semicolons
        content = re.sub(r'interface\s+(\w+)\s*{\s*([^}]+);\s*;\s*([^}]*)}', r'interface \1 {\n  \2\3\n}', content)
        
        # Fix type errors
        # 28. Fix broken type declarations with semicolons
        content = re.sub(r'type\s+(\w+)\s*=\s*([^;]+);\s*;\s*([^;]*)', r'type \1 = \2\3;', content)
        
        # Fix generic errors
        # 29. Fix broken generics with semicolons
        content = re.sub(r'(\w+)<([^>]+);\s*;\s*([^>]*)>', r'\1<\2\3>', content)
        
        # Fix comment errors
        # 30. Fix broken comments with semicolons
        content = re.sub(r'//\s*([^;]+);\s*;\s*([^\\n]*)', r'// \1\2', content)
        
        # Fix semicolon placement errors
        # 31. Fix misplaced semicolons
        content = re.sub(r';\s*;\s*', r';', content)
        
        # Fix trailing comma errors
        # 32. Fix trailing commas in wrong places
        content = re.sub(r',\s*;\s*', r',', content)
        
        # Fix function parameter errors
        # 33. Fix broken function parameters with semicolons
        content = re.sub(r'\(\s*([^)]+);\s*;\s*([^)]*)\)', r'(\1\2)', content)
        
        # Fix array access errors
        # 34. Fix broken array access with semicolons
        content = re.sub(r'(\w+)\[\s*([^\]]+);\s*;\s*([^\]]*)\]', r'\1[\2]', content)
        
        # Fix object access errors
        # 35. Fix broken object access with semicolons
        content = re.sub(r'(\w+)\.\s*([^.;]+);\s*;\s*([^.;]*)', r'\1.\2', content)
        
        # Fix conditional operator errors
        # 36. Fix broken conditional operators with semicolons
        content = re.sub(r'(\w+)\s*\?\s*([^:]+);\s*;\s*([^:]+)', r'\1 ? \2 : \3', content)
        
        # Fix JSX errors
        # 37. Fix broken JSX with semicolons
        content = re.sub(r'</([^>]+);\s*;\s*([^>]*)>', r'</\1>', content)
        
        # 38. Fix broken JSX attributes with semicolons
        content = re.sub(r'(\w+)="([^"]+);\s*;\s*([^"]*)"', r'\1="\2\3"', content)
        
        # Fix operator errors
        # 39. Fix broken operators with semicolons
        content = re.sub(r'(\w+);\s*\+\s*;\s*\+\s*;\s*', r'\1++;', content)
        
        # 40. Fix broken operators with semicolons
        content = re.sub(r'(\w+)\s*=\s*;\s*(\d+)', r'\1 = \2', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix remaining syntax errors"""
    # Get all TypeScript and JavaScript files
    ts_files = glob.glob('src/**/*.ts', recursive=True)
    tsx_files = glob.glob('src/**/*.tsx', recursive=True)
    js_files = glob.glob('src/**/*.js', recursive=True)
    jsx_files = glob.glob('src/**/*.jsx', recursive=True)
    
    all_files = ts_files + tsx_files + js_files + jsx_files
    
    fixed_count = 0
    for file_path in all_files:
        if fix_remaining_errors(file_path):
            fixed_count += 1
            print(f"Fixed remaining syntax errors in: {file_path}")
    
    print(f"\nTotal files fixed: {fixed_count}")

if __name__ == "__main__":
    main()