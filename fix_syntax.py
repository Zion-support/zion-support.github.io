#!/usr/bin/env python3
import os
import re
import glob

def fix_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix "use client" directive
        content = re.sub(r'"use client",\n', '"use client";\n', content)
        content = re.sub(r"'use client',\n", "'use client";\n", content)
        
        # Fix interface definitions with missing closing braces
        def fix_interface(match):
            name = match.group(1)
            body = match.group(2)
            next_part = match.group(3)
            if not body.strip().endswith('}'):
                return f"interface {name} {{{body}\n}}\n{next_part}"
            return match.group(0)
        
        content = re.sub(r'interface\s+(\w+)\s*\{([^}]*?)(\n\s*const|\n\s*function|\n\s*export|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)', fix_interface, content, flags=re.MULTILINE)
        
        # Fix class definitions with missing closing braces
        def fix_class(match):
            name = match.group(1)
            body = match.group(2)
            next_part = match.group(3)
            if not body.strip().endswith('}'):
                return f"class {name} {{{body}\n}}\n{next_part}"
            return match.group(0)
        
        content = re.sub(r'class\s+(\w+)[^{]*\{([^}]*?)(\n\s*const|\n\s*function|\n\s*export|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)', fix_class, content, flags=re.MULTILINE)
        
        # Fix extra commas in interface properties
        content = re.sub(r'(\w+):\s*([^;,\n]+),(\s*\n\s*[a-zA-Z_])', r'\1: \2;\n\3', content)
        content = re.sub(r'(\w+):\s*([^;,\n]+),(\s*\n\s*})', r'\1: \2;\n\3', content)
        
        # Fix missing semicolons after variable declarations
        content = re.sub(r'(\w+):\s*([^;,\n]+)(\s*\n\s*[a-zA-Z_])', r'\1: \2;\n\3', content)
        content = re.sub(r'(\w+):\s*([^;,\n]+)(\s*\n\s*})', r'\1: \2;\n\3', content)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
        
    except Exception as e:
        print(f"Error fixing {filepath}: {e}")
        return False

def process_directory(dirpath):
    fixed_count = 0
    
    for root, dirs, files in os.walk(dirpath):
        # Skip certain directories
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', '.next', 'dist', 'build']]
        
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                filepath = os.path.join(root, file)
                if fix_file(filepath):
                    fixed_count += 1
                    print(f"Fixed: {filepath}")
    
    return fixed_count

if __name__ == "__main__":
    print("Starting syntax fixes...")
    fixed_count = process_directory('/workspace')
    print(f"Fixed {fixed_count} files")