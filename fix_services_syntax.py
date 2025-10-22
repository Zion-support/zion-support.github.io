#!/usr/bin/env python3
"""
Script to fix syntax errors in services.ts file
"""

import re

<<<<<<< HEAD
def fix_services_syntax(file_path):
    """Fix syntax errors in the services.ts file."""
=======
def fix_services_syntax():
    """Fix syntax errors in services.ts file."""
    file_path = '/workspace/app/data/services.ts'
    
>>>>>>> cursor/fix-errors-and-merge-to-main-6188
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        # Fix common syntax issues
        # 1. Remove extra commas before closing braces
        content = re.sub(r',(\s*})', r'\1', content)
        
        # 2. Fix malformed object structures like "contact: {,"
        content = re.sub(r'(\w+):\s*{\s*,', r'\1: {', content)
        
        # 3. Fix malformed object structures like "pricing: {,"
        content = re.sub(r'(\w+):\s*{\s*,', r'\1: {', content)
        
        # 4. Fix malformed array structures like "features: [,"
        content = re.sub(r'(\w+):\s*\[\s*,', r'\1: [', content)
        
        # 5. Fix malformed array structures like "benefits: [,"
        content = re.sub(r'(\w+):\s*\[\s*,', r'\1: [', content)
        
        # 6. Fix malformed array structures like "useCases: [,"
        content = re.sub(r'(\w+):\s*\[\s*,', r'\1: [', content)
        
        # 7. Fix malformed export statement like "export const services: Service[] = [,"
        content = re.sub(r'export const services: Service\[\] = \[\s*,', r'export const services: Service[] = [', content)
        
        # 8. Fix malformed comments like "// AI Services,"
        content = re.sub(r'//\s*([^,]+),\s*$', r'// \1', content, flags=re.MULTILINE)
        
        # 9. Fix malformed object properties like "path: string,"
        # This should be part of the Service interface, not in the middle of the file
        # Let's find and fix the interface definition
        lines = content.split('\n')
        fixed_lines = []
        in_interface = False
        interface_end = False
        
        for i, line in enumerate(lines):
            if 'interface Service' in line:
                in_interface = True
                fixed_lines.append(line)
            elif in_interface and line.strip() == '}':
                in_interface = False
                interface_end = True
                fixed_lines.append(line)
            elif in_interface:
                # Clean up interface lines
                line = line.strip()
                if line and not line.startswith('//'):
                    # Remove trailing commas
                    line = re.sub(r',\s*$', '', line)
                    fixed_lines.append(line)
                else:
                    fixed_lines.append(line)
            elif interface_end and line.strip() in ['path: string,', 'contact: {,', 'marketPrice?: {min: number,']:
                # Skip these malformed lines that shouldn't be here
                continue
            else:
                fixed_lines.append(line)
        
        # Join the lines back
        content = '\n'.join(fixed_lines)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed syntax errors in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

if __name__ == "__main__":
    fix_services_syntax("/workspace/app/data/services.ts")
=======
        # Fix common syntax errors
        # Remove extra commas before closing braces
        content = re.sub(r',\s*}', '}', content)
        content = re.sub(r',\s*]', ']', content)
        
        # Fix malformed object structures
        content = re.sub(r'{\s*,', '{', content)
        content = re.sub(r',\s*{', ' {', content)
        
        # Fix array declarations
        content = re.sub(r'\[\s*,', '[', content)
        content = re.sub(r',\s*\]', ']', content)
        
        # Fix specific patterns
        content = re.sub(r'contact:\s*{\s*,', 'contact: {', content)
        content = re.sub(r'marketPrice\?\s*:\s*{\s*min:\s*number,\s*max:\s*number,\s*currency:\s*string,\s*}\s*}', 'marketPrice?: {min: number, max: number, currency: string}}', content)
        
        # Fix the Service interface
        content = re.sub(r'}\s*path:\s*string,', '},\n  path: string,', content)
        content = re.sub(r'contact:\s*{\s*,', 'contact: {', content)
        content = re.sub(r'}\s*}\s*marketPrice\?\s*:', '}\n  },\n  marketPrice?:', content)
        
        # Fix export statement
        content = re.sub(r'export const services:\s*Service\[\]\s*=\s*\[\s*,', 'export const services: Service[] = [', content)
        
        # Fix individual service objects
        content = re.sub(r'{\s*id:\s*[\'"]\w+[\'"],\s*name:\s*[\'"].*?[\'"],\s*category:\s*[\'"]\w+[\'"],\s*subcategory:\s*[\'"].*?[\'"],\s*description:\s*[\'"].*?[\'"],\s*features:\s*\[\s*,', 
                        lambda m: m.group(0).replace('features: [', 'features: ['), content)
        
        # Remove extra commas in arrays
        content = re.sub(r',\s*,', ',', content)
        
        # Fix specific malformed structures
        content = re.sub(r'pricing:\s*{\s*,', 'pricing: {', content)
        content = re.sub(r'benefits:\s*\[\s*,', 'benefits: [', content)
        content = re.sub(r'useCases:\s*\[\s*,', 'useCases: [', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("Fixed syntax errors in services.ts")
        return True
        
    except Exception as e:
        print(f"Error fixing services.ts: {e}")
        return False

if __name__ == "__main__":
    fix_services_syntax()
>>>>>>> cursor/fix-errors-and-merge-to-main-6188
