#!/usr/bin/env python3
"""
Script to fix remaining syntax errors and merge conflicts
"""

import re
import os

def fix_services_commas(file_path):
    """Fix missing commas in services.ts file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix missing commas after object properties
        # Pattern: property name followed by newline and another property
        content = re.sub(r'(\w+):\s*([^,\n]+)\n\s*(\w+):', r'\1: \2,\n    \3:', content)
        
        # Fix missing commas after string values
        content = re.sub(r"'([^']+)'\n\s*(\w+):", r"'\1',\n    \2:", content)
        content = re.sub(r'"([^"]+)"\n\s*(\w+):', r'"\1",\n    \2:', content)
        
        # Fix missing commas after array values
        content = re.sub(r'\]\n\s*(\w+):', r'],\n    \1:', content)
        
        # Fix missing commas after object values
        content = re.sub(r'}\n\s*(\w+):', r'},\n    \1:', content)
        
        # Fix missing commas after boolean/number values
        content = re.sub(r'(true|false|\d+)\n\s*(\w+):', r'\1,\n    \2:', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed missing commas in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_merge_conflicts(file_path):
    """Fix merge conflicts by keeping the latest version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<<' not in content:
            return False
        
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        keep_lines = False
        
        for line in lines:
            if line.strip().startswith('<<<<<<<'):
                in_conflict = True
                keep_lines = False
                continue
            elif line.strip().startswith(''):
                if in_conflict:
                    keep_lines = True
                    continue
            elif line.strip().startswith(''):
                if in_conflict:
                    in_conflict = False
                    keep_lines = False
                    continue
            
            if not in_conflict or keep_lines:
                fixed_lines.append(line)
        
        fixed_content = '\n'.join(fixed_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Fix services.ts
    fix_services_commas("/workspace/app/data/services.ts")
    
    # Fix merge conflicts in other files
    files_to_fix = [
        "/workspace/main.tsx",
        "/workspace/vite.config.ts"
    ]
    
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            fix_merge_conflicts(file_path)

if __name__ == "__main__":
    main()