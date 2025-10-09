#!/usr/bin/env python3
import re

def fix_indentation(file_path):
    """Fix indentation issues in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix common indentation issues
        lines = content.split('\n')
        fixed_lines = []
        indent_level = 0
        
        for line in lines:
            # Skip empty lines
            if not line.strip():
                fixed_lines.append(line)
                continue
                
            # Calculate proper indentation
            if line.strip().startswith('</') and not line.strip().startswith('</div>') and not line.strip().startswith('</section>'):
                indent_level = max(0, indent_level - 1)
            
            # Apply indentation
            if line.strip():
                fixed_lines.append('  ' * indent_level + line.strip())
            else:
                fixed_lines.append('')
            
            # Increase indent for opening tags
            if line.strip().startswith('<') and not line.strip().startswith('</') and not line.strip().endswith('/>'):
                indent_level += 1
                
        return '\n'.join(fixed_lines)
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return None

def main():
    # Fix the ai-fintech page
    file_path = '/workspace/app/ai-fintech/page.tsx'
    fixed_content = fix_indentation(file_path)
    if fixed_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"Fixed indentation in {file_path}")

if __name__ == "__main__":
    main()