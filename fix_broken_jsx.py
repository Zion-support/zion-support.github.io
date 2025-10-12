#!/usr/bin/env python3
"""
Fix broken JSX structure in specific files
"""

import os
import re
import glob

def fix_broken_jsx_structure(content):
    """Fix completely broken JSX structure"""
    lines = content.split('\n')
    result = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Fix malformed className attributes
        line = re.sub(r'className="([^"]*?)\s+([a-zA-Z])', r'className="\1\2', line)
        line = re.sub(r'className="([^"]*?)\s+([a-zA-Z])', r'className="\1\2', line)
        
        # Fix specific broken patterns
        line = re.sub(r'm i n-h-s creen', 'min-h-screen', line)
        line = re.sub(r'm a x-w-7x l', 'max-w-7xl', line)
        line = re.sub(r't e x t-4xl', 'text-4xl', line)
        line = re.sub(r't e x t-lgtext-', 'text-lg text-', line)
        line = re.sub(r'b g-g r adient-to-r', 'bg-gradient-to-r', line)
        line = re.sub(r'from-cyan-500to-purple-600', 'from-cyan-500 to-purple-600', line)
        line = re.sub(r'hover:from-cyan-600 hover:to-purple-700', 'hover:from-cyan-600 hover:to-purple-700', line)
        line = re.sub(r'w-5 h-5m l-2', 'w-5 h-5 ml-2', line)
        
        # Fix broken JSX structure
        if line.strip() == '<>' and i + 1 < len(lines):
            # Look for the matching closing tag
            jsx_content = []
            i += 1
            while i < len(lines) and not lines[i].strip().startswith('</>'):
                jsx_content.append(lines[i])
                i += 1
            
            # Reconstruct the JSX properly
            result.append('  return (')
            result.append('    <>')
            
            # Fix the Helmet structure
            helmet_started = False
            for jsx_line in jsx_content:
                if '<Helmet>' in jsx_line:
                    helmet_started = True
                    result.append('      <Helmet>')
                elif '</Helmet>' in jsx_line:
                    helmet_started = False
                    result.append('      </Helmet>')
                elif helmet_started and ('<title>' in jsx_line or '<meta' in jsx_line):
                    result.append('        ' + jsx_line.strip())
                elif not helmet_started and jsx_line.strip():
                    # Fix indentation and structure
                    fixed_line = jsx_line.strip()
                    if fixed_line.startswith('<div') and not fixed_line.endswith('>'):
                        fixed_line += '>'
                    result.append('      ' + fixed_line)
            
            result.append('    </>')
            result.append('  );')
            i += 1  # Skip the original closing tag
            continue
        
        result.append(line)
        i += 1
    
    return '\n'.join(result)

def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_broken_jsx_structure(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed broken JSX: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function"""
    # Target specific problematic files
    target_files = [
        '/workspace/app/5g-data-analytics/page.tsx',
        '/workspace/app/5g-edge-computing/page.tsx',
        '/workspace/app/5g-implementation/page.tsx',
        '/workspace/app/5g-iot-solutions/page.tsx',
        '/workspace/app/5g-mobile-applications/page.tsx',
        '/workspace/app/5g-network-infrastructure/page.tsx',
        '/workspace/app/5g-private-networks/page.tsx',
        '/workspace/app/5g-smart-city-solutions/page.tsx',
        '/workspace/app/5g-solutions/page.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for file_path in target_files:
        if os.path.isfile(file_path):
            files_processed += 1
            if process_file(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()