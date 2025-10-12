#!/usr/bin/env python3
"""
Script to fix logger call signatures in TypeScript files.
The logger expects: logger.method(message: string, context?: string, metadata?: object)
But many calls pass: logger.method(message, {metadata})
This script fixes them to: logger.method(message, undefined, {metadata})
"""

import re
import sys
from pathlib import Path

def fix_logger_calls(content: str) -> str:
    """Fix logger method calls to match the correct signature."""
    
    # Pattern 1: logger.debug('message', { object })
    # Should be: logger.debug('message', undefined, { object })
    pattern1 = r"logger\.(debug|info|warn)\(([^,]+),\s*(\{[^}]+\})\)"
    replacement1 = r"logger.\1(\2, undefined, \3)"
    content = re.sub(pattern1, replacement1, content)
    
    # Pattern 2: logger.error('message', error, { object })
    # Should be: logger.error('message', { object }, error)
    # This is more complex - need to swap parameters
    def swap_error_params(match):
        method = match.group(1)
        message = match.group(2)
        error_param = match.group(3)
        metadata = match.group(4)
        return f"logger.{method}({message}, {metadata}, {error_param})"
    
    pattern2 = r"logger\.(error)\(([^,]+),\s*([^,{]+),\s*(\{[^}]+\})\)"
    content = re.sub(pattern2, swap_error_params, content)
    
    return content

def main():
    # Files that need fixing based on TypeScript errors
    files_to_fix = [
        "app/middleware/requestMiddleware.ts",
        "app/services/BaseService.ts",
        "app/utils/cacheManager.ts",
        "app/utils/errorTracking.ts",
        "app/utils/healthCheck.ts",
        "app/utils/performanceMonitoring.ts",
    ]
    
    workspace = Path("/workspace")
    
    for file_path in files_to_fix:
        full_path = workspace / file_path
        if not full_path.exists():
            print(f"Skipping {file_path} - file not found")
            continue
            
        print(f"Fixing {file_path}...")
        
        try:
            content = full_path.read_text()
            fixed_content = fix_logger_calls(content)
            
            if content != fixed_content:
                full_path.write_text(fixed_content)
                print(f"  ✓ Fixed {file_path}")
            else:
                print(f"  - No changes needed for {file_path}")
        except Exception as e:
            print(f"  ✗ Error fixing {file_path}: {e}")
    
    print("\nDone!")

if __name__ == "__main__":
    main()