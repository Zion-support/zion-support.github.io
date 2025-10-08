#!/usr/bin/env python3
import re
import sys

def resolve_conflicts(filepath):
    """Remove merge conflict markers and keep the incoming version"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Pattern to match conflict blocks
        # <<<<<<< HEAD\n...\n=======\n...\n>>>>>>> branch
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n?'
        
        # Replace with just the incoming version (group 2)
        resolved = re.sub(pattern, r'\2\n', content, flags=re.DOTALL)
        
        if resolved != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(resolved)
            print(f"✓ Resolved conflicts in {filepath}")
            return True
        else:
            print(f"  No conflicts found in {filepath}")
            return True
            
    except Exception as e:
        print(f"✗ Error in {filepath}: {e}")
        return False

# Files to fix
files = [
    "app/components/ImprovedErrorBoundary.tsx",
    "app/enterprise/page.tsx",
    "app/not-found.tsx",
    "app/page-optimized.tsx",
    "app/hooks/useEnhancedPerformance.ts",
    "app/utils/enhancedErrorHandler.ts",
    "app/utils/performanceMonitor.ts",
    "src/components/PerformanceMonitor.tsx",
]

print("Resolving merge conflicts...\n")
success = True
for filepath in files:
    if not resolve_conflicts(filepath):
        success = False

if success:
    print("\n✓ All conflicts resolved successfully!")
    sys.exit(0)
else:
    print("\n✗ Some files had errors")
    sys.exit(1)