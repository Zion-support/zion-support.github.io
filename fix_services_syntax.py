#!/usr/bin/env python3
"""
Script to fix syntax errors in services.ts file
"""

import re

def fix_services_syntax():
    """Fix syntax errors in services.ts file."""
    file_path = '/workspace/app/data/services.ts'
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
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