#!/usr/bin/env python3
"""
Fix logger.error calls to match signature:
error(message: string, error?: Error, context?: string, metadata?: Record<string, unknown>)
"""

import re
from pathlib import Path

def fix_file(file_path):
    """Fix logger.error calls in a file."""
    content = Path(file_path).read_text()
    
    # Pattern: logger.error('msg', {metadata}, error)
    # Should be: logger.error('msg', error, undefined, {metadata})
    
    # Multi-line pattern for logger.error calls
    pattern = r"logger\.error\(\s*([^,]+),\s*(\{[^}]+\}),\s*([^)]+)\s*\)"
    
    def replacer(match):
        message = match.group(1).strip()
        metadata = match.group(2).strip()
        error = match.group(3).strip()
        
        # Check if the second param looks like metadata (starts with {)
        if metadata.startswith('{'):
            return f"logger.error({message}, {error}, undefined, {metadata})"
        else:
            return match.group(0)  # No change
    
    fixed_content = re.sub(pattern, replacer, content, flags=re.MULTILINE | re.DOTALL)
    
    Path(file_path).write_text(fixed_content)
    print(f"Fixed {file_path}")

# Fix all files
files = [
    "/workspace/app/components/AdvancedErrorBoundary.tsx",
    "/workspace/app/middleware/requestMiddleware.ts",
    "/workspace/app/services/BaseService.ts",
]

for f in files:
    if Path(f).exists():
        fix_file(f)
    else:
        print(f"Skipping {f} - not found")