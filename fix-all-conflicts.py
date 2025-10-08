#!/usr/bin/env python3
"""
Script to resolve all git merge conflict markers in files
"""

import re
import sys
from pathlib import Path

files_with_conflicts = [
    "src/utils/codeSplitting.ts",
    "src/utils/analytics.ts",
    "src/hooks/usePerformance.ts",
    "src/data/bannerConfigurations.ts",
    "src/components/PerformanceMonitor.tsx",
    "app/page-optimized.tsx",
    "app/hooks/useEnhancedPerformance.ts",
    "app/utils/accessibilityChecker.ts",
    "app/utils/accessibilityEnhancer.ts",
    "app/components/ErrorBoundary.tsx",
    "app/contact/page.tsx",
    "App.tsx"
]

def resolve_conflicts(content):
    """Remove git conflict markers, keeping the incoming version (after =======)"""
    
    # Pattern to match conflict blocks
    # <<<<<<< HEAD
    # ... current content ...
    # =======
    # ... incoming content ...
    # >>>>>>> branch-name
    
    # Try multiple passes to handle nested conflicts
    max_iterations = 10
    for _ in range(max_iterations):
        original_content = content
        
        # Pattern 1: Keep incoming (after =======)
        pattern1 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n?'
        content = re.sub(pattern1, r'\2\n', content, flags=re.DOTALL)
        
        # Pattern 2: Handle cases where there's no HEAD marker but still conflicts
        pattern2 = r'=======\n(.*?)\n>>>>>>> [^\n]+\n?'
        content = re.sub(pattern2, r'\1\n', content, flags=re.DOTALL)
        
        # Pattern 3: Handle orphaned conflict markers
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # If nothing changed, we're done
        if content == original_content:
            break
    
    return content

def main():
    workspace = Path("/workspace")
    fixed_count = 0
    
    for file_path in files_with_conflicts:
        full_path = workspace / file_path
        
        if not full_path.exists():
            print(f"Skipping {file_path} (not found)")
            continue
        
        try:
            # Read the file
            with open(full_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if file has conflicts
            if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>>' in content:
                print(f"Fixing conflicts in {file_path}...")
                
                # Resolve conflicts
                fixed_content = resolve_conflicts(content)
                
                # Write back
                with open(full_path, 'w', encoding='utf-8') as f:
                    f.write(fixed_content)
                
                fixed_count += 1
                print(f"  ✓ Fixed {file_path}")
            else:
                print(f"  - No conflicts in {file_path}")
                
        except Exception as e:
            print(f"  ✗ Error processing {file_path}: {e}")
            sys.exit(1)
    
    print(f"\n✓ Fixed {fixed_count} files!")
    return 0

if __name__ == "__main__":
    sys.exit(main())