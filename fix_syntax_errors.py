#!/usr/bin/env python3
"""
Script to fix syntax errors caused by incomplete merge conflict resolution.
"""

import os
import re
import sys

def fix_incomplete_jsx(file_path):
    """Fix incomplete JSX and React components."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        lines = content.split('\n')
        new_lines = []
        
        # Track if we're in a component
        in_component = False
        component_name = None
        brace_count = 0
        paren_count = 0
        
        for i, line in enumerate(lines):
            stripped = line.strip()
            
            # Skip empty lines at the start
            if not new_lines and not stripped:
                continue
                
            # Detect component start
            if 'import React' in line and not in_component:
                new_lines.append(line)
                continue
                
            # Look for incomplete component structure
            if stripped.startswith('return (') and not in_component:
                in_component = True
                # Try to find component name from previous lines
                for j in range(len(new_lines) - 1, -1, -1):
                    if 'function' in new_lines[j] or 'const' in new_lines[j]:
                        if '=' in new_lines[j]:
                            component_name = new_lines[j].split('=')[0].strip().split()[-1]
                        break
                
                if not component_name:
                    component_name = 'Component'
                
                # Add proper component structure
                new_lines.append(f'export default function {component_name}() {{')
                new_lines.append('  return (')
                continue
            
            # Handle incomplete JSX fragments
            if stripped == '<>' and in_component:
                new_lines.append('    <>')
                continue
                
            if stripped == '</>' and in_component:
                new_lines.append('    </>')
                continue
                
            # Handle incomplete divs
            if stripped == '</div>' and in_component:
                new_lines.append('      </div>')
                continue
                
            if stripped == ');' and in_component:
                new_lines.append('  );')
                new_lines.append('}')
                in_component = False
                continue
                
            # Handle incomplete closing braces
            if stripped == '}' and in_component:
                new_lines.append('}')
                in_component = False
                continue
            
            # Skip malformed lines that are just fragments
            if stripped in ['</div>', '</>', ');', '}'] and not in_component:
                continue
                
            # Skip lines that are just whitespace or incomplete fragments
            if not stripped or stripped in ['<div>', '<>', 'return (', 'return(']:
                continue
                
            # Add the line if it looks valid
            if stripped or (new_lines and new_lines[-1].strip()):
                new_lines.append(line)
        
        # Ensure proper component structure
        if in_component:
            if not any(');' in line for line in new_lines):
                new_lines.append('  );')
            if not any(line.strip() == '}' for line in new_lines):
                new_lines.append('}')
        
        new_content = '\n'.join(new_lines)
        
        # Additional cleanup
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed syntax errors in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_specific_files():
    """Fix specific problematic files."""
    problematic_files = [
        'app/404.tsx',
        'app/5g-data-analytics/page.tsx',
        'app/5g-edge-computing/page.tsx',
        'app/5g-solutions/page.tsx',
        'app/components/ErrorFallback.tsx',
        'app/components/LightweightErrorBoundary.tsx',
        'app/components/OptimizedLoading.tsx',
        'app/components/PerformanceEnhancer.tsx'
    ]
    
    for file_path in problematic_files:
        if os.path.exists(file_path):
            fix_incomplete_jsx(file_path)

def main():
    """Main function."""
    fix_specific_files()

if __name__ == "__main__":
    main()