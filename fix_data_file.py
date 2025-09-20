#!/usr/bin/env python3

import re

def fix_data_file():
    """Fix syntax errors in the data file"""
    
    file_path = '/workspace/src/data/innovativeMicroSaasServices2030.ts'
    
    try:
        with open(file_path, 'r') as f:
            content = f.read()
        
        # Fix missing commas in object properties
        content = re.sub(r'(\w+):\s*(\w+),(\w+):', r'\1: \2,\n    \3:', content)
        content = re.sub(r'(\w+):\s*"([^"]*)",(\w+):', r'\1: "\2",\n    \3:', content)
        content = re.sub(r'(\w+):\s*(\d+),(\w+):', r'\1: \2,\n    \3:', content)
        content = re.sub(r'(\w+):\s*(\[.*?\]),(\w+):', r'\1: \2,\n    \3:', content)
        
        # Fix missing commas in arrays
        content = re.sub(r'(\[.*?\]),(\w+):', r'\1,\n    \2:', content)
        
        # Fix missing commas in object literals
        content = re.sub(r'(\{[^}]*\}),(\w+):', r'\1,\n    \2:', content)
        
        # Fix missing commas after strings
        content = re.sub(r'"([^"]*)"(\w+)', r'"\1",\n    \2', content)
        
        # Fix missing commas after numbers
        content = re.sub(r'(\d+)(\w+)', r'\1,\n    \2', content)
        
        # Fix missing commas after booleans
        content = re.sub(r'(true|false)(\w+)', r'\1,\n    \2', content)
        
        # Clean up extra spaces and fix indentation
        lines = content.split('\n')
        fixed_lines = []
        
        for line in lines:
            # Remove extra spaces
            line = re.sub(r'\s+', ' ', line.strip())
            
            # Fix indentation for object properties
            if re.match(r'^\w+:', line):
                line = '    ' + line
            elif re.match(r'^\}', line):
                line = line
            elif re.match(r'^\{', line):
                line = line
            elif re.match(r'^\],', line):
                line = '  ' + line
            elif re.match(r'^\],', line):
                line = '    ' + line
            
            fixed_lines.append(line)
        
        # Join lines and clean up
        content = '\n'.join(fixed_lines)
        
        # Fix specific patterns
        content = re.sub(r'},\s*{', '},\n  {', content)
        content = re.sub(r'\],\s*{', '],\n  {', content)
        
        # Write back to file
        with open(file_path, 'w') as f:
            f.write(content)
        
        print(f"✅ Fixed syntax errors in {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error fixing file: {e}")
        return False

if __name__ == "__main__":
    fix_data_file()