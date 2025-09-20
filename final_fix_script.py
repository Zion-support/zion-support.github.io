#!/usr/bin/env python3
"""
Final comprehensive script to fix all remaining syntax errors
"""

import os
import re
import glob

def final_fix(file_path):
    """Fix all remaining syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix all import statement errors
        # 1. Fix broken import statements like "import React, { useState;" -> "import React, { useState,"
        content = re.sub(r'import\s+([^,]+),\s*{\s*([^;]+);\s*', r'import \1, { \2, ', content)
        
        # 2. Fix broken import statements like "} from 'react';" -> "} from 'react';"
        content = re.sub(r'}\s*from\s+([^;]+);\s*', r'} from \1;', content)
        
        # 3. Fix broken import statements with semicolons in strings
        content = re.sub(r'"([^";]+);\s*([^";]+);\s*([^";]+);\s*"', r'"\1\2\3"', content)
        
        # 4. Fix broken import statements with semicolons in strings (2 parts)
        content = re.sub(r'"([^";]+);\s*([^";]+);\s*"', r'"\1\2"', content)
        
        # 5. Fix broken import statements with semicolons in strings (single)
        content = re.sub(r'"([^";]+);\s*"', r'"\1"', content)
        
        # 6. Fix broken import statements with semicolons in strings (single quotes)
        content = re.sub(r"'([^';]+);\s*([^';]+);\s*([^';]+);\s*'", r"'\1\2\3'", content)
        
        # 7. Fix broken import statements with semicolons in strings (2 parts, single quotes)
        content = re.sub(r"'([^';]+);\s*([^';]+);\s*'", r"'\1\2'", content)
        
        # 8. Fix broken import statements with semicolons in strings (single, single quotes)
        content = re.sub(r"'([^';]+);\s*'", r"'\1'", content)
        
        # Fix all object property errors
        # 9. Fix broken object properties with semicolons
        content = re.sub(r'(\w+):\s*([^,;]+);\s*$', r'\1: \2,', content, flags=re.MULTILINE)
        
        # 10. Fix broken object properties with semicolons in middle
        content = re.sub(r'(\w+):\s*([^,;]+);\s*([^,}])', r'\1: \2,\n    \3', content, flags=re.MULTILINE)
        
        # Fix all function call errors
        # 11. Fix broken function calls with semicolons
        content = re.sub(r'(\w+)\(([^)]+);\s*\)', r'\1(\2)', content)
        
        # Fix all array access errors
        # 12. Fix broken array access with semicolons
        content = re.sub(r'(\w+)\[\s*([^\]]+);\s*;\s*([^\]]*)\]', r'\1[\2]', content)
        
        # Fix all object access errors
        # 13. Fix broken object access with semicolons
        content = re.sub(r'(\w+)\.\s*([^.;]+);\s*;\s*([^.;]*)', r'\1.\2', content)
        
        # Fix all conditional errors
        # 14. Fix broken conditionals with semicolons
        content = re.sub(r'if\s*\(\s*([^)]+);\s*;\s*([^)]*)\)', r'if (\1\2)', content)
        
        # Fix all return statement errors
        # 15. Fix broken returns with semicolons
        content = re.sub(r'return\s+([^;]+);\s*;\s*([^;]*)', r'return \1\2;', content)
        
        # Fix all export errors
        # 16. Fix broken exports with semicolons
        content = re.sub(r'export\s+default\s+([^;]+);\s*;\s*([^;]*)', r'export default \1\2;', content)
        
        # Fix all template literal errors
        # 17. Fix broken template literals with semicolons
        content = re.sub(r'`([^`]+);\s*;\s*([^`]*)`', r'`\1\2`', content)
        
        # Fix all class method errors
        # 18. Fix broken class methods with semicolons
        content = re.sub(r'(\w+)\s*\(\s*([^)]*);\s*;\s*([^)]*)\)\s*{', r'\1(\2\3) {', content)
        
        # Fix all interface errors
        # 19. Fix broken interfaces with semicolons
        content = re.sub(r'interface\s+(\w+)\s*{\s*([^}]+);\s*;\s*([^}]*)}', r'interface \1 {\n  \2\3\n}', content)
        
        # Fix all type errors
        # 20. Fix broken type declarations with semicolons
        content = re.sub(r'type\s+(\w+)\s*=\s*([^;]+);\s*;\s*([^;]*)', r'type \1 = \2\3;', content)
        
        # Fix all generic errors
        # 21. Fix broken generics with semicolons
        content = re.sub(r'(\w+)<([^>]+);\s*;\s*([^>]*)>', r'\1<\2\3>', content)
        
        # Fix all comment errors
        # 22. Fix broken comments with semicolons
        content = re.sub(r'//\s*([^;]+);\s*;\s*([^\\n]*)', r'// \1\2', content)
        
        # Fix all semicolon placement errors
        # 23. Fix misplaced semicolons
        content = re.sub(r';\s*;\s*', r';', content)
        
        # Fix all trailing comma errors
        # 24. Fix trailing commas in wrong places
        content = re.sub(r',\s*;\s*', r',', content)
        
        # Fix all function parameter errors
        # 25. Fix broken function parameters with semicolons
        content = re.sub(r'\(\s*([^)]+);\s*;\s*([^)]*)\)', r'(\1\2)', content)
        
        # Fix all conditional operator errors
        # 26. Fix broken conditional operators with semicolons
        content = re.sub(r'(\w+)\s*\?\s*([^:]+);\s*;\s*([^:]+)', r'\1 ? \2 : \3', content)
        
        # Fix all JSX errors
        # 27. Fix broken JSX with semicolons
        content = re.sub(r'</([^>]+);\s*;\s*([^>]*)>', r'</\1>', content)
        
        # 28. Fix broken JSX attributes with semicolons
        content = re.sub(r'(\w+)="([^"]+);\s*;\s*([^"]*)"', r'\1="\2\3"', content)
        
        # Fix all operator errors
        # 29. Fix broken operators with semicolons
        content = re.sub(r'(\w+);\s*\+\s*;\s*\+\s*;\s*', r'\1++;', content)
        
        # 30. Fix broken operators with semicolons
        content = re.sub(r'(\w+)\s*=\s*;\s*(\d+)', r'\1 = \2', content)
        
        # Fix all string errors
        # 31. Fix broken strings with semicolons
        content = re.sub(r'"([^";]+);\s*([^"]*)"', r'"\1\2"', content)
        
        # 32. Fix broken strings with semicolons (single quotes)
        content = re.sub(r"'([^';]+);\s*([^']*)'", r"'\1\2'", content)
        
        # Fix all variable declaration errors
        # 33. Fix broken variable declarations with semicolons
        content = re.sub(r'(\w+);\s*;', r'\1,', content)
        
        # 34. Fix broken array destructuring with semicolons
        content = re.sub(r'\[\s*([^;]+);\s*;', r'[ \1,', content)
        
        # 35. Fix broken object destructuring with semicolons
        content = re.sub(r'{\s*([^;]+);\s*;', r'{ \1,', content)
        
        # Fix all method call errors
        # 36. Fix broken method calls with semicolons
        content = re.sub(r'(\w+)\.\s*([^.;]+);\s*;\s*([^.;]*)', r'\1.\2', content)
        
        # Fix all array access errors
        # 37. Fix broken array access with semicolons
        content = re.sub(r'(\w+)\[\s*([^\]]+);\s*;\s*([^\]]*)\]', r'\1[\2]', content)
        
        # Fix all object access errors
        # 38. Fix broken object access with semicolons
        content = re.sub(r'(\w+)\.\s*([^.;]+);\s*;\s*([^.;]*)', r'\1.\2', content)
        
        # Fix all conditional errors
        # 39. Fix broken conditionals with semicolons
        content = re.sub(r'if\s*\(\s*([^)]+);\s*;\s*([^)]*)\)', r'if (\1\2)', content)
        
        # Fix all return statement errors
        # 40. Fix broken returns with semicolons
        content = re.sub(r'return\s+([^;]+);\s*;\s*([^;]*)', r'return \1\2;', content)
        
        # Fix all export errors
        # 41. Fix broken exports with semicolons
        content = re.sub(r'export\s+default\s+([^;]+);\s*;\s*([^;]*)', r'export default \1\2;', content)
        
        # Fix all template literal errors
        # 42. Fix broken template literals with semicolons
        content = re.sub(r'`([^`]+);\s*;\s*([^`]*)`', r'`\1\2`', content)
        
        # Fix all class method errors
        # 43. Fix broken class methods with semicolons
        content = re.sub(r'(\w+)\s*\(\s*([^)]*);\s*;\s*([^)]*)\)\s*{', r'\1(\2\3) {', content)
        
        # Fix all interface errors
        # 44. Fix broken interfaces with semicolons
        content = re.sub(r'interface\s+(\w+)\s*{\s*([^}]+);\s*;\s*([^}]*)}', r'interface \1 {\n  \2\3\n}', content)
        
        # Fix all type errors
        # 45. Fix broken type declarations with semicolons
        content = re.sub(r'type\s+(\w+)\s*=\s*([^;]+);\s*;\s*([^;]*)', r'type \1 = \2\3;', content)
        
        # Fix all generic errors
        # 46. Fix broken generics with semicolons
        content = re.sub(r'(\w+)<([^>]+);\s*;\s*([^>]*)>', r'\1<\2\3>', content)
        
        # Fix all comment errors
        # 47. Fix broken comments with semicolons
        content = re.sub(r'//\s*([^;]+);\s*;\s*([^\\n]*)', r'// \1\2', content)
        
        # Fix all semicolon placement errors
        # 48. Fix misplaced semicolons
        content = re.sub(r';\s*;\s*', r';', content)
        
        # Fix all trailing comma errors
        # 49. Fix trailing commas in wrong places
        content = re.sub(r',\s*;\s*', r',', content)
        
        # Fix all function parameter errors
        # 50. Fix broken function parameters with semicolons
        content = re.sub(r'\(\s*([^)]+);\s*;\s*([^)]*)\)', r'(\1\2)', content)
        
        # Fix all conditional operator errors
        # 51. Fix broken conditional operators with semicolons
        content = re.sub(r'(\w+)\s*\?\s*([^:]+);\s*;\s*([^:]+)', r'\1 ? \2 : \3', content)
        
        # Fix all JSX errors
        # 52. Fix broken JSX with semicolons
        content = re.sub(r'</([^>]+);\s*;\s*([^>]*)>', r'</\1>', content)
        
        # 53. Fix broken JSX attributes with semicolons
        content = re.sub(r'(\w+)="([^"]+);\s*;\s*([^"]*)"', r'\1="\2\3"', content)
        
        # Fix all operator errors
        # 54. Fix broken operators with semicolons
        content = re.sub(r'(\w+);\s*\+\s*;\s*\+\s*;\s*', r'\1++;', content)
        
        # 55. Fix broken operators with semicolons
        content = re.sub(r'(\w+)\s*=\s*;\s*(\d+)', r'\1 = \2', content)
        
        # Fix all string errors
        # 56. Fix broken strings with semicolons
        content = re.sub(r'"([^";]+);\s*([^"]*)"', r'"\1\2"', content)
        
        # 57. Fix broken strings with semicolons (single quotes)
        content = re.sub(r"'([^';]+);\s*([^']*)'", r"'\1\2'", content)
        
        # Fix all variable declaration errors
        # 58. Fix broken variable declarations with semicolons
        content = re.sub(r'(\w+);\s*;', r'\1,', content)
        
        # 59. Fix broken array destructuring with semicolons
        content = re.sub(r'\[\s*([^;]+);\s*;', r'[ \1,', content)
        
        # 60. Fix broken object destructuring with semicolons
        content = re.sub(r'{\s*([^;]+);\s*;', r'{ \1,', content)
        
        # Fix all method call errors
        # 61. Fix broken method calls with semicolons
        content = re.sub(r'(\w+)\.\s*([^.;]+);\s*;\s*([^.;]*)', r'\1.\2', content)
        
        # Fix all array access errors
        # 62. Fix broken array access with semicolons
        content = re.sub(r'(\w+)\[\s*([^\]]+);\s*;\s*([^\]]*)\]', r'\1[\2]', content)
        
        # Fix all object access errors
        # 63. Fix broken object access with semicolons
        content = re.sub(r'(\w+)\.\s*([^.;]+);\s*;\s*([^.;]*)', r'\1.\2', content)
        
        # Fix all conditional errors
        # 64. Fix broken conditionals with semicolons
        content = re.sub(r'if\s*\(\s*([^)]+);\s*;\s*([^)]*)\)', r'if (\1\2)', content)
        
        # Fix all return statement errors
        # 65. Fix broken returns with semicolons
        content = re.sub(r'return\s+([^;]+);\s*;\s*([^;]*)', r'return \1\2;', content)
        
        # Fix all export errors
        # 66. Fix broken exports with semicolons
        content = re.sub(r'export\s+default\s+([^;]+);\s*;\s*([^;]*)', r'export default \1\2;', content)
        
        # Fix all template literal errors
        # 67. Fix broken template literals with semicolons
        content = re.sub(r'`([^`]+);\s*;\s*([^`]*)`', r'`\1\2`', content)
        
        # Fix all class method errors
        # 68. Fix broken class methods with semicolons
        content = re.sub(r'(\w+)\s*\(\s*([^)]*);\s*;\s*([^)]*)\)\s*{', r'\1(\2\3) {', content)
        
        # Fix all interface errors
        # 69. Fix broken interfaces with semicolons
        content = re.sub(r'interface\s+(\w+)\s*{\s*([^}]+);\s*;\s*([^}]*)}', r'interface \1 {\n  \2\3\n}', content)
        
        # Fix all type errors
        # 70. Fix broken type declarations with semicolons
        content = re.sub(r'type\s+(\w+)\s*=\s*([^;]+);\s*;\s*([^;]*)', r'type \1 = \2\3;', content)
        
        # Fix all generic errors
        # 71. Fix broken generics with semicolons
        content = re.sub(r'(\w+)<([^>]+);\s*;\s*([^>]*)>', r'\1<\2\3>', content)
        
        # Fix all comment errors
        # 72. Fix broken comments with semicolons
        content = re.sub(r'//\s*([^;]+);\s*;\s*([^\\n]*)', r'// \1\2', content)
        
        # Fix all semicolon placement errors
        # 73. Fix misplaced semicolons
        content = re.sub(r';\s*;\s*', r';', content)
        
        # Fix all trailing comma errors
        # 74. Fix trailing commas in wrong places
        content = re.sub(r',\s*;\s*', r',', content)
        
        # Fix all function parameter errors
        # 75. Fix broken function parameters with semicolons
        content = re.sub(r'\(\s*([^)]+);\s*;\s*([^)]*)\)', r'(\1\2)', content)
        
        # Fix all conditional operator errors
        # 76. Fix broken conditional operators with semicolons
        content = re.sub(r'(\w+)\s*\?\s*([^:]+);\s*;\s*([^:]+)', r'\1 ? \2 : \3', content)
        
        # Fix all JSX errors
        # 77. Fix broken JSX with semicolons
        content = re.sub(r'</([^>]+);\s*;\s*([^>]*)>', r'</\1>', content)
        
        # 78. Fix broken JSX attributes with semicolons
        content = re.sub(r'(\w+)="([^"]+);\s*;\s*([^"]*)"', r'\1="\2\3"', content)
        
        # Fix all operator errors
        # 79. Fix broken operators with semicolons
        content = re.sub(r'(\w+);\s*\+\s*;\s*\+\s*;\s*', r'\1++;', content)
        
        # 80. Fix broken operators with semicolons
        content = re.sub(r'(\w+)\s*=\s*;\s*(\d+)', r'\1 = \2', content)
        
        # Fix all string errors
        # 81. Fix broken strings with semicolons
        content = re.sub(r'"([^";]+);\s*([^"]*)"', r'"\1\2"', content)
        
        # 82. Fix broken strings with semicolons (single quotes)
        content = re.sub(r"'([^';]+);\s*([^']*)'", r"'\1\2'", content)
        
        # Fix all variable declaration errors
        # 83. Fix broken variable declarations with semicolons
        content = re.sub(r'(\w+);\s*;', r'\1,', content)
        
        # 84. Fix broken array destructuring with semicolons
        content = re.sub(r'\[\s*([^;]+);\s*;', r'[ \1,', content)
        
        # 85. Fix broken object destructuring with semicolons
        content = re.sub(r'{\s*([^;]+);\s*;', r'{ \1,', content)
        
        # Fix all method call errors
        # 86. Fix broken method calls with semicolons
        content = re.sub(r'(\w+)\.\s*([^.;]+);\s*;\s*([^.;]*)', r'\1.\2', content)
        
        # Fix all array access errors
        # 87. Fix broken array access with semicolons
        content = re.sub(r'(\w+)\[\s*([^\]]+);\s*;\s*([^\]]*)\]', r'\1[\2]', content)
        
        # Fix all object access errors
        # 88. Fix broken object access with semicolons
        content = re.sub(r'(\w+)\.\s*([^.;]+);\s*;\s*([^.;]*)', r'\1.\2', content)
        
        # Fix all conditional errors
        # 89. Fix broken conditionals with semicolons
        content = re.sub(r'if\s*\(\s*([^)]+);\s*;\s*([^)]*)\)', r'if (\1\2)', content)
        
        # Fix all return statement errors
        # 90. Fix broken returns with semicolons
        content = re.sub(r'return\s+([^;]+);\s*;\s*([^;]*)', r'return \1\2;', content)
        
        # Fix all export errors
        # 91. Fix broken exports with semicolons
        content = re.sub(r'export\s+default\s+([^;]+);\s*;\s*([^;]*)', r'export default \1\2;', content)
        
        # Fix all template literal errors
        # 92. Fix broken template literals with semicolons
        content = re.sub(r'`([^`]+);\s*;\s*([^`]*)`', r'`\1\2`', content)
        
        # Fix all class method errors
        # 93. Fix broken class methods with semicolons
        content = re.sub(r'(\w+)\s*\(\s*([^)]*);\s*;\s*([^)]*)\)\s*{', r'\1(\2\3) {', content)
        
        # Fix all interface errors
        # 94. Fix broken interfaces with semicolons
        content = re.sub(r'interface\s+(\w+)\s*{\s*([^}]+);\s*;\s*([^}]*)}', r'interface \1 {\n  \2\3\n}', content)
        
        # Fix all type errors
        # 95. Fix broken type declarations with semicolons
        content = re.sub(r'type\s+(\w+)\s*=\s*([^;]+);\s*;\s*([^;]*)', r'type \1 = \2\3;', content)
        
        # Fix all generic errors
        # 96. Fix broken generics with semicolons
        content = re.sub(r'(\w+)<([^>]+);\s*;\s*([^>]*)>', r'\1<\2\3>', content)
        
        # Fix all comment errors
        # 97. Fix broken comments with semicolons
        content = re.sub(r'//\s*([^;]+);\s*;\s*([^\\n]*)', r'// \1\2', content)
        
        # Fix all semicolon placement errors
        # 98. Fix misplaced semicolons
        content = re.sub(r';\s*;\s*', r';', content)
        
        # Fix all trailing comma errors
        # 99. Fix trailing commas in wrong places
        content = re.sub(r',\s*;\s*', r',', content)
        
        # Fix all function parameter errors
        # 100. Fix broken function parameters with semicolons
        content = re.sub(r'\(\s*([^)]+);\s*;\s*([^)]*)\)', r'(\1\2)', content)
        
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
    """Main function to fix all remaining syntax errors"""
    # Get all TypeScript and JavaScript files
    ts_files = glob.glob('src/**/*.ts', recursive=True)
    tsx_files = glob.glob('src/**/*.tsx', recursive=True)
    js_files = glob.glob('src/**/*.js', recursive=True)
    jsx_files = glob.glob('src/**/*.jsx', recursive=True)
    
    all_files = ts_files + tsx_files + js_files + jsx_files
    
    fixed_count = 0
    for file_path in all_files:
        if final_fix(file_path):
            fixed_count += 1
            print(f"Fixed final syntax errors in: {file_path}")
    
    print(f"\nTotal files fixed: {fixed_count}")

if __name__ == "__main__":
    main()