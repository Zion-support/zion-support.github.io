#!/usr/bin/env python3
"""
Fix remaining merge conflicts with more aggressive approach
"""
import re

def fix_file(filepath):
    """Fix merge conflicts in a file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        result = []
        in_conflict = False
        keep_section = False
        conflict_depth = 0
        
        i = 0
        while i < len(lines):
            line = lines[i]
            
            if line.startswith('<<<<<<< HEAD'):
                in_conflict = True
                keep_section = True
                conflict_depth += 1
                i += 1
                continue
            elif line.startswith('=======') and in_conflict:
                keep_section = False
                i += 1
                continue
            elif line.startswith('>>>>>>>') and in_conflict:
                conflict_depth -= 1
                if conflict_depth == 0:
                    in_conflict = False
                    keep_section = False
                i += 1
                continue
            
            if not in_conflict:
                result.append(line)
            elif keep_section:
                result.append(line)
            
            i += 1
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(result)
        
        print(f"✓ Fixed: {filepath}")
        return True
    except Exception as e:
        print(f"✗ Error fixing {filepath}: {e}")
        return False

# Files that still have conflicts
files = [
    '/workspace/app/components/NewestContent2025Banner.tsx',
    '/workspace/app/hooks/useEnhancedPerformance.ts',
    '/workspace/app/page-optimized.tsx',
    '/workspace/src/hooks/usePerformance.ts',
    '/workspace/src/utils/analytics.ts',
    '/workspace/src/utils/codeSplitting.ts',
    '/workspace/src/utils/errorHandler.ts'
]

print("🔧 Fixing remaining conflicts...")
for file in files:
    fix_file(file)
print("✓ Done!")