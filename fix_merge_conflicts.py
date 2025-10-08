#!/usr/bin/env python3
import re
import os

def fix_error_boundary():
    """Fix merge conflicts in ErrorBoundary.tsx"""
    filepath = 'app/components/ErrorBoundary.tsx'
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    # Find and remove merge conflict markers
    result = []
    skip_until = None
    in_conflict = False
    use_head = True  # We'll use the HEAD version
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        if line.startswith('<<<<<<< HEAD'):
            in_conflict = True
            use_head = True
            i += 1
            continue
        elif line.startswith('=======') and in_conflict:
            use_head = False
            i += 1
            continue
        elif line.startswith('>>>>>>>') and in_conflict:
            in_conflict = False
            use_head = True
            i += 1
            continue
        
        if not in_conflict or use_head:
            result.append(line)
        
        i += 1
    
    with open(filepath, 'w') as f:
        f.writelines(result)
    print(f"Fixed {filepath}")

def fix_newest_content_banner():
    """Fix syntax errors in NewestContent2025Banner.tsx"""
    filepath = 'app/components/NewestContent2025Banner.tsx'
    
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} - file not found")
        return
    
    # Read the file
    with open(filepath, 'r') as f:
        content = f.read()
    
    # This file has complex syntax errors - let's see if there are merge conflicts first
    if '<<<<<<< HEAD' in content:
        lines = content.split('\n')
        result = []
        in_conflict = False
        use_head = True
        
        for line in lines:
            if line.startswith('<<<<<<< HEAD'):
                in_conflict = True
                use_head = True
                continue
            elif line.startswith('=======') and in_conflict:
                use_head = False
                continue
            elif line.startswith('>>>>>>>') and in_conflict:
                in_conflict = False
                use_head = True
                continue
            
            if not in_conflict or use_head:
                result.append(line)
        
        with open(filepath, 'w') as f:
            f.write('\n'.join(result))
        print(f"Fixed merge conflicts in {filepath}")
    else:
        print(f"No merge conflicts in {filepath}, but may have syntax errors")

def fix_contact_page():
    """Fix syntax errors in contact page"""
    filepath = 'app/contact/page.tsx'
    
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} - file not found")
        return
    
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    result = []
    in_conflict = False
    use_head = True
    
    for line in lines:
        if line.startswith('<<<<<<< HEAD'):
            in_conflict = True
            use_head = True
            continue
        elif line.startswith('=======') and in_conflict:
            use_head = False
            continue
        elif line.startswith('>>>>>>>') and in_conflict:
            in_conflict = False
            use_head = True
            continue
        
        if not in_conflict or use_head:
            result.append(line)
    
    with open(filepath, 'w') as f:
        f.writelines(result)
    print(f"Fixed {filepath}")

def fix_enterprise_page():
    """Fix merge conflicts in enterprise page"""
    filepath = 'app/enterprise/page.tsx'
    
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} - file not found")
        return
    
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    result = []
    in_conflict = False
    use_head = True
    
    for line in lines:
        if line.startswith('<<<<<<< HEAD'):
            in_conflict = True
            use_head = True
            continue
        elif line.startswith('=======') and in_conflict:
            use_head = False
            continue
        elif line.startswith('>>>>>>>') and in_conflict:
            in_conflict = False
            use_head = True
            continue
        
        if not in_conflict or use_head:
            result.append(line)
    
    with open(filepath, 'w') as f:
        f.writelines(result)
    print(f"Fixed {filepath}")

def fix_setup_tests():
    """Fix merge conflicts in setupTests"""
    filepath = 'app/setupTests.tsx'
    
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} - file not found")
        return
    
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    result = []
    in_conflict = False
    use_head = True
    
    for line in lines:
        if line.startswith('<<<<<<< HEAD'):
            in_conflict = True
            use_head = True
            continue
        elif line.startswith('=======') and in_conflict:
            use_head = False
            continue
        elif line.startswith('>>>>>>>') and in_conflict:
            in_conflict = False
            use_head = True
            continue
        
        if not in_conflict or use_head:
            result.append(line)
    
    with open(filepath, 'w') as f:
        f.writelines(result)
    print(f"Fixed {filepath}")

def fix_accessibility_enhancer_util():
    """Fix unterminated template literal in accessibilityEnhancer.ts"""
    filepath = 'app/utils/accessibilityEnhancer.ts'
    
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} - file not found")
        return
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if there are merge conflicts
    if '<<<<<<< HEAD' in content:
        lines = content.split('\n')
        result = []
        in_conflict = False
        use_head = True
        
        for line in lines:
            if line.startswith('<<<<<<< HEAD'):
                in_conflict = True
                use_head = True
                continue
            elif line.startswith('=======') and in_conflict:
                use_head = False
                continue
            elif line.startswith('>>>>>>>') and in_conflict:
                in_conflict = False
                use_head = True
                continue
            
            if not in_conflict or use_head:
                result.append(line)
        
        with open(filepath, 'w') as f:
            f.write('\n'.join(result))
        print(f"Fixed {filepath}")
    else:
        # Check for unterminated template literals
        # Count backticks to see if they're balanced
        backtick_count = content.count('`')
        if backtick_count % 2 != 0:
            print(f"WARNING: {filepath} has unbalanced backticks, manual fix may be needed")
        else:
            print(f"No obvious issues in {filepath}")

def fix_performance_monitor():
    """Fix unterminated template literal in performanceMonitor.ts"""
    filepath = 'app/utils/performanceMonitor.ts'
    
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} - file not found")
        return
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if there are merge conflicts
    if '<<<<<<< HEAD' in content:
        lines = content.split('\n')
        result = []
        in_conflict = False
        use_head = True
        
        for line in lines:
            if line.startswith('<<<<<<< HEAD'):
                in_conflict = True
                use_head = True
                continue
            elif line.startswith('=======') and in_conflict:
                use_head = False
                continue
            elif line.startswith('>>>>>>>') and in_conflict:
                in_conflict = False
                use_head = True
                continue
            
            if not in_conflict or use_head:
                result.append(line)
        
        with open(filepath, 'w') as f:
            f.write('\n'.join(result))
        print(f"Fixed {filepath}")
    else:
        # Check for unterminated template literals
        backtick_count = content.count('`')
        if backtick_count % 2 != 0:
            print(f"WARNING: {filepath} has unbalanced backticks, manual fix may be needed")
        else:
            print(f"No obvious issues in {filepath}")

def main():
    print("Starting merge conflict resolution...")
    print("-" * 50)
    
    fix_error_boundary()
    fix_newest_content_banner()
    fix_contact_page()
    fix_enterprise_page()
    fix_setup_tests()
    fix_accessibility_enhancer_util()
    fix_performance_monitor()
    
    print("-" * 50)
    print("Merge conflict resolution complete!")

if __name__ == '__main__':
    main()