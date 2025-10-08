#!/usr/bin/env python3
import re

files_to_fix = [
    'app/App.tsx',
    'app/components/AccessibilityEnhancer.tsx',
    'app/components/PerformanceMonitor.tsx',
    'app/setupTests.tsx',
    'app/utils/performanceOptimizer.ts',
    'tsconfig.json'
]

for filepath in files_to_fix:
    try:
        with open(filepath, 'r') as f:
            content = f.read()
        
        # Remove merge conflict markers - keep incoming changes (after =======)
        lines = content.split('\n')
        result = []
        skip = False
        in_conflict = False
        
        for line in lines:
            if line.startswith('<<<<<<< HEAD'):
                skip = True
                in_conflict = True
                continue
            elif line.startswith('=======') and in_conflict:
                skip = False
                continue
            elif line.startswith('>>>>>>>') and in_conflict:
                in_conflict = False
                continue
            
            if not skip:
                result.append(line)
        
        with open(filepath, 'w') as f:
            f.write('\n'.join(result))
        
        print(f"Fixed {filepath}")
    except Exception as e:
        print(f"Error fixing {filepath}: {e}")

print("Done!")