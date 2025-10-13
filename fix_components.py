#!/usr/bin/env python3
"""
Script to fix common syntax issues in component files
"""
import os
import re
import glob

def fix_component_file(file_path):
    """Fix common syntax issues in a component file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix extra closing parentheses and braces at the end
        content = re.sub(r'export default (\w+);\s*\);\s*}', r'export default \1;', content)
        
        # Fix missing React imports
        if 'React' in content and 'import React' not in content:
            if 'useState' in content or 'useEffect' in content or 'useRef' in content:
                content = 'import React from \'react\';\n' + content
        
        # Fix missing specific imports
        if 'useState' in content and 'import { useState' not in content and 'import React' in content:
            content = content.replace('import React from \'react\';', 'import React, { useState } from \'react\';')
        
        if 'useEffect' in content and 'import { useEffect' not in content and 'import React' in content:
            if 'useState' in content:
                content = content.replace('import React, { useState } from \'react\';', 'import React, { useState, useEffect } from \'react\';')
            else:
                content = content.replace('import React from \'react\';', 'import React, { useEffect } from \'react\';')
        
        if 'useRef' in content and 'import { useRef' not in content and 'import React' in content:
            if 'useState' in content and 'useEffect' in content:
                content = content.replace('import React, { useState, useEffect } from \'react\';', 'import React, { useState, useEffect, useRef } from \'react\';')
            elif 'useState' in content:
                content = content.replace('import React, { useState } from \'react\';', 'import React, { useState, useRef } from \'react\';')
            elif 'useEffect' in content:
                content = content.replace('import React, { useEffect } from \'react\';', 'import React, { useEffect, useRef } from \'react\';')
            else:
                content = content.replace('import React from \'react\';', 'import React, { useRef } from \'react\';')
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all component files"""
    # Get all component files
    component_files = []
    
    for root, dirs, files in os.walk('./app/components'):
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                file_path = os.path.join(root, file)
                component_files.append(file_path)
    
    print(f"Found {len(component_files)} component files")
    
    fixed_count = 0
    for file_path in component_files:
        if fix_component_file(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Fixed {fixed_count} component files")

if __name__ == "__main__":
    main()