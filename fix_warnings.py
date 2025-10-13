#!/usr/bin/env python3
import os
import re

def fix_warnings():
    """Fix unused variable warnings"""
    
    # Fix specific files with warnings
    files_to_fix = [
        ('__tests__/image-optimizer.test.tsx', 'callback', ''),
        ('app/components/AccessibilityEnhancer.tsx', 'React, ReactNode', ''),
        ('app/components/AnalyticsProvider.tsx', 'AnalyticsproviderProps', ''),
        ('app/components/CriticalResourcePreloader.tsx', 'CriticalresourcepreloaderProps', ''),
        ('app/components/EnhancedErrorFeedback.tsx', 'className', ''),
        ('app/components/ErrorBoundary.tsx', 'className', ''),
        ('app/components/Footer.tsx', 'Brain, Zap, Globe, Cloud, Code, BarChart3', ''),
        ('app/components/ImageOptimizer.tsx', 'ImageOptimizer', ''),
        ('app/components/Navigation.tsx', 'onSidebarToggle', ''),
        ('app/components/Sidebar.tsx', 'SidebarProps', ''),
        ('app/components/WebVitalsTracker.tsx', 'React, useEffect', '')
    ]
    
    for file_path, unused_vars, replacement in files_to_fix:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Remove unused imports/variables
                if 'React' in unused_vars:
                    content = re.sub(r"import React[^;]*;", "", content)
                if 'ReactNode' in unused_vars:
                    content = re.sub(r", ReactNode", "", content)
                if 'useEffect' in unused_vars:
                    content = re.sub(r", useEffect", "", content)
                
                # Remove unused interface definitions
                if 'Props' in unused_vars:
                    content = re.sub(r"interface \w+Props[^}]*}", "", content, flags=re.DOTALL)
                
                # Remove unused variable assignments
                if 'className' in unused_vars:
                    content = re.sub(r"className = '[^']*'", "", content)
                
                # Remove unused icon imports
                icon_imports = ['Brain', 'Zap', 'Globe', 'Cloud', 'Code', 'BarChart3']
                for icon in icon_imports:
                    if icon in unused_vars:
                        content = re.sub(f"\\s*{icon},?", "", content)
                        content = re.sub(f",\\s*{icon}", "", content)
                
                # Remove unused function assignments
                if 'ImageOptimizer' in unused_vars:
                    content = re.sub(r"const ImageOptimizer[^;]*;", "", content)
                
                # Remove unused parameters
                if 'onSidebarToggle' in unused_vars:
                    content = re.sub(r"onSidebarToggle\?: \(\) => void;", "", content)
                    content = re.sub(r"onSidebarToggle\?\)", ")", content)
                
                # Remove unused callback parameters
                if 'callback' in unused_vars:
                    content = re.sub(r"callback: [^,)]*", "", content)
                    content = re.sub(r",\\s*callback", "", content)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"Fixed warnings in: {file_path}")
            except Exception as e:
                print(f"Error fixing {file_path}: {e}")

if __name__ == "__main__":
    fix_warnings()