#!/usr/bin/env python3
import re
import os

def remove_merge_conflicts(filepath):
    """Remove git merge conflict markers from a file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers
        content = re.sub(r'^<<<<<<< .*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^=======.*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>> .*$', '', content, flags=re.MULTILINE)
        
        # Remove extra blank lines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f'✓ Fixed {filepath}')
        return True
    except Exception as e:
        print(f'✗ Error fixing {filepath}: {e}')
        return False

def fix_setup_tests():
    """Fix app/setupTests.tsx - remove extra closing brace."""
    filepath = './app/setupTests.tsx'
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        # Remove line 34 if it's just '});'
        if len(lines) > 33 and lines[33].strip() == '});':
            lines.pop(33)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(lines)
        
        print(f'✓ Fixed {filepath}')
        return True
    except Exception as e:
        print(f'✗ Error fixing {filepath}: {e}')
        return False

def fix_error_handler():
    """Fix app/utils/enhancedErrorHandler.ts - fix optional chaining."""
    filepath = './app/utils/enhancedErrorHandler.ts'
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix optional chaining syntax
        content = content.replace("target?['src']", "target?.src")
        content = content.replace("target?['href']", "target?.href")
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f'✓ Fixed {filepath}')
        return True
    except Exception as e:
        print(f'✗ Error fixing {filepath}: {e}')
        return False

def close_comments(filepath):
    """Ensure all comment blocks are closed."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Count open and close comment markers
        open_count = content.count('/*')
        close_count = content.count('*/')
        
        if open_count > close_count:
            content += '\n*/\n'
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f'✓ Fixed unclosed comments in {filepath}')
        else:
            print(f'✓ {filepath} - comments OK')
        
        return True
    except Exception as e:
        print(f'✗ Error fixing {filepath}: {e}')
        return False

# Main execution
print('Starting error fixes...\n')

# Fix files with merge conflicts
conflict_files = [
    './App.tsx',
    './api/subscribe.js',
    './api/onsite-request.js',
    './api/shipping-rates.js',
    './src/components/PerformanceMonitor.tsx',
    './src/utils/errorHandler.ts',
]

for filepath in conflict_files:
    if os.path.exists(filepath):
        remove_merge_conflicts(filepath)

# Fix specific issues
fix_setup_tests()
fix_error_handler()

# Close unclosed comments
comment_files = [
    './src/utils/analytics.ts',
    './src/utils/errorHandler.ts',
]

for filepath in comment_files:
    if os.path.exists(filepath):
        close_comments(filepath)

print('\n✅ All fixes completed!')