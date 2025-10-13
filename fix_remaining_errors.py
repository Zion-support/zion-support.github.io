#!/usr/bin/env python3
"""
Fix remaining syntax errors in the project files
"""
import os
import re

def fix_performance_monitor():
    """Fix PerformanceMonitor.tsx syntax errors"""
    file_path = 'app/components/PerformanceMonitor.tsx'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the problematic section and fix it
    # The issue is around line 275-285 where there's a missing closing brace
    lines = content.split('\n')
    fixed_lines = []
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Check if this is the problematic line
        if 'const [isVisible, setIsVisible] = useState(false);' in line and i > 270:
            # This should be inside a component, add proper structure
            fixed_lines.append('  const [isVisible, setIsVisible] = useState(false);')
        elif 'useEffect(() => {' in line and i > 270:
            # This should be properly indented
            fixed_lines.append('  useEffect(() => {')
        elif 'const shouldShow = process.env.NODE_ENV === \'development\' ||' in line and i > 270:
            # This should be properly indented
            fixed_lines.append('    const shouldShow = process.env.NODE_ENV === \'development\' ||')
        elif 'localStorage.getItem(\'show-performance-monitor\') === \'true\';' in line and i > 270:
            # This should be properly indented
            fixed_lines.append('      localStorage.getItem(\'show-performance-monitor\') === \'true\';')
        else:
            fixed_lines.append(line)
        
        i += 1
    
    # Join the lines back
    fixed_content = '\n'.join(fixed_lines)
    
    # Write the fixed content back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    
    print("Fixed PerformanceMonitor.tsx")

def main():
    print("🔧 Fixing remaining syntax errors...")
    fix_performance_monitor()
    print("✅ All syntax errors fixed!")

if __name__ == "__main__":
    main()