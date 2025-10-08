#!/usr/bin/env python3
import os

files_to_fix = [
    '/workspace/app/utils/accessibilityEnhancer.ts',
    '/workspace/app/utils/performanceMonitor.ts'
]

for filepath in files_to_fix:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file ends properly
        stripped = content.rstrip()
        
        # Count braces
        open_braces = content.count('{')
        close_braces = content.count('}')
        
        if open_braces > close_braces:
            diff = open_braces - close_braces
            # Add missing closing braces
            content = stripped + '\n' + ('}\n' * diff)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Added {diff} closing brace(s) to {filepath}")
        
        # Fix unterminated template literals
        backtick_count = content.count('`')
        if backtick_count % 2 == 1:
            content = content.rstrip() + '`\n'
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed unterminated template literal in {filepath}")

print("Done!")