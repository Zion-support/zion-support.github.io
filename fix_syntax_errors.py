#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in TypeScript/JavaScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing newlines after 'use client'
        content = re.sub(r"'use client'import", "'use client'\nimport", content)
        content = re.sub(r"'use client'import", "'use client'\nimport", content)
        
        # Fix missing newlines after imports
        content = re.sub(r"from 'react-helmet-async'import", "from 'react-helmet-async'\nimport", content)
        content = re.sub(r"from 'lucide-react'const", "from 'lucide-react'\nconst", content)
        content = re.sub(r"from 'lucide-react'import", "from 'lucide-react'\nimport", content)
        content = re.sub(r"from 'lucide-react'}\n", "from 'lucide-react'\n}\n", content)
        
        # Fix missing newlines after const declarations
        content = re.sub(r"const [A-Za-z]+: React\.FC.*?= \(\) => {const", "const [A-Za-z]+: React.FC = () => {\n  const", content)
        content = re.sub(r"useState<number\[\]>\(\[\]\)const", "useState<number[]>([])\n  const", content)
        content = re.sub(r"useState<number\[\]>\(\[\]\)\nconst", "useState<number[]>([])\n  const", content)
        
        # Fix missing newlines after function declarations
        content = re.sub(r"const toggleItem.*?= \(\) => {const", "const toggleItem = () => {\n    const", content)
        content = re.sub(r"const toggleItem.*?= \(\) => {\nconst", "const toggleItem = () => {\n    const", content)
        
        # Fix missing newlines after closing braces
        content = re.sub(r"}\nconst", "}\n\nconst", content)
        content = re.sub(r"}\nimport", "}\n\nimport", content)
        content = re.sub(r"}\n'use client'", "}\n\n'use client'", content)
        
        # Fix missing newlines after return statements
        content = re.sub(r"return \(<div", "return (\n    <div", content)
        
        # Fix missing newlines after JSX closing tags
        content = re.sub(r"</div>\nconst", "</div>\n  )\n}\n\nconst", content)
        content = re.sub(r"</div>\n}\nconst", "</div>\n  )\n}\n\nconst", content)
        
        # Fix missing semicolons
        content = re.sub(r"}\nconst", "};\n\nconst", content)
        content = re.sub(r"}\nimport", "};\n\nimport", content)
        content = re.sub(r"}\n'use client'", "};\n\n'use client'", content)
        
        # Fix missing newlines before export
        content = re.sub(r"}\nexport", "}\n\nexport", content)
        content = re.sub(r"}\nApp\.displayName", "}\n\nApp.displayName", content)
        
        # Clean up multiple newlines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Write the cleaned content back
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            total_files += 1
            if fix_syntax_errors(file_path):
                fixed_count += 1
    
    print(f"\nProcessed {total_files} files")
    print(f"Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()