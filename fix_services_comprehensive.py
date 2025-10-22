#!/usr/bin/env python3
"""
Comprehensive script to fix all syntax errors in services.ts file
"""

import re

def fix_services_comprehensive():
    """Fix all syntax errors in services.ts file."""
    file_path = '/workspace/app/data/services.ts'
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix the Service interface first
        interface_pattern = r'interface Service \{[^}]*\}'
        interface_match = re.search(interface_pattern, content, re.DOTALL)
        
        if interface_match:
            interface_content = interface_match.group(0)
            # Fix the interface structure
            interface_content = re.sub(r'}\s*path:\s*string,', '},\n  path: string,', interface_content)
            interface_content = re.sub(r'contact:\s*{\s*,', 'contact: {', interface_content)
            interface_content = re.sub(r'}\s*}\s*marketPrice\?\s*:', '}\n  },\n  marketPrice?:', interface_content)
            interface_content = re.sub(r'}\s*}\s*export', '}\n}\n\nexport', interface_content)
            
            content = content.replace(interface_match.group(0), interface_content)
        
        # Fix the export statement
        content = re.sub(r'export const services:\s*Service\[\]\s*=\s*\[\s*,', 'export const services: Service[] = [', content)
        
        # Fix individual service objects - remove extra commas and fix structure
        content = re.sub(r',\s*}', '}', content)
        content = re.sub(r',\s*]', ']', content)
        content = re.sub(r'{\s*,', '{', content)
        content = re.sub(r',\s*{', ' {', content)
        content = re.sub(r'\[\s*,', '[', content)
        
        # Fix specific malformed patterns
        content = re.sub(r'}\s*}\s*{\s*id:', '}\n  },\n  {\n    id:', content)
        content = re.sub(r'currency:\s*[\'"]USD[\'"]\s*}\s*}\s*{\s*id:', 'currency: "USD"\n    }\n  },\n  {\n    id:', content)
        
        # Fix contact object structure
        content = re.sub(r'contact:\s*{\s*phone:', 'contact: {\n      phone:', content)
        content = re.sub(r'email:\s*[\'"].*?[\'"],\s*demo:\s*[\'"].*?[\'"]\s*}', 
                        lambda m: m.group(0).replace('email: ', '\n      email: ').replace('demo: ', '\n      demo: '), content)
        
        # Fix marketPrice object structure
        content = re.sub(r'marketPrice:\s*{\s*min:', 'marketPrice: {\n      min:', content)
        content = re.sub(r'max:\s*\d+,\s*currency:\s*[\'"].*?[\'"]\s*}', 
                        lambda m: m.group(0).replace('max: ', '\n      max: ').replace('currency: ', '\n      currency: '), content)
        
        # Remove any remaining extra commas
        content = re.sub(r',\s*,', ',', content)
        content = re.sub(r',\s*\n\s*}', '\n  }', content)
        content = re.sub(r',\s*\n\s*]', '\n  ]', content)
        
        # Fix the end of the file
        content = re.sub(r'}\s*$', '}\n];', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("Fixed comprehensive syntax errors in services.ts")
        return True
        
    except Exception as e:
        print(f"Error fixing services.ts: {e}")
        return False

if __name__ == "__main__":
    fix_services_comprehensive()