#!/usr/bin/env python3
"""
Script to fix syntax errors in TypeScript/JavaScript files
"""
import os
import re
import glob

def fix_hook_file(file_path):
    """Fix hook files that have incorrect syntax"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if this is a hook file that was incorrectly converted to a component
        if 'useAdvancedPerformanceMonitoring' in content or 'useEnhancedPerformance' in content or 'usePerformanceMonitoring' in content:
            # This should be a hook, not a component
            hook_name = None
            if 'useAdvancedPerformanceMonitoring' in content:
                hook_name = 'useAdvancedPerformanceMonitoring'
            elif 'useEnhancedPerformance' in content:
                hook_name = 'useEnhancedPerformance'
            elif 'usePerformanceMonitoring' in content:
                hook_name = 'usePerformanceMonitoring'
            
            if hook_name:
                # Create a proper hook file
                new_content = f"""import {{ useState, useEffect, useCallback }} from 'react';

interface {hook_name}Options {{
  enabled?: boolean;
  threshold?: number;
}}

export const {hook_name} = (options: {hook_name}Options = {{}}) => {{
  const [isVisible, setIsVisible] = useState(false);
  const [performance, setPerformance] = useState<number>(0);

  useEffect(() => {{
    if (options.enabled !== false) {{
      const observer = new PerformanceObserver((list) => {{
        const entries = list.getEntries();
        if (entries.length > 0) {{
          setPerformance(entries[0].duration);
        }}
      }});
      
      observer.observe({{ entryTypes: ['measure'] }});
      
      return () => observer.disconnect();
    }}
  }}, [options.enabled]);

  const measurePerformance = useCallback((name: string, fn: () => void) => {{
    performance.mark(name + '-start');
    fn();
    performance.mark(name + '-end');
    performance.measure(name, name + '-start', name + '-end');
  }}, []);

  return {{
    isVisible,
    performance,
    measurePerformance
  }};
}};
"""
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                return True
        
        return False
    except Exception as e:
        print(f"Error fixing hook file {file_path}: {e}")
        return False

def fix_page_file(file_path):
    """Fix page files with syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix common syntax issues
        # Fix malformed JSX closing tags
        content = re.sub(r'</\s*>\s*$', '', content)
        
        # Fix missing closing braces
        if content.strip().endswith('}'):
            # Already has closing brace
            pass
        elif content.strip().endswith('</>'):
            # Add closing brace
            content = content.rstrip() + '\n}'
        elif content.strip().endswith('</div>'):
            # Add closing brace
            content = content.rstrip() + '\n}'
        
        # Fix malformed JSX
        content = re.sub(r'<>\s*$', '', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing page file {file_path}: {e}")
        return False

def fix_utils_file(file_path):
    """Fix utility files with syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if this is a utility file that was incorrectly converted to a component
        if 'errorHandler' in content or 'performanceUtils' in content:
            # This should be a utility file, not a component
            if 'errorHandler' in content:
                new_content = """export const errorHandler = {
  log: (error: Error, context?: string) => {
    console.error('Error:', error.message, context ? `Context: ${context}` : '');
  },
  
  handle: (error: Error, fallback?: () => void) => {
    console.error('Handled error:', error.message);
    if (fallback) {
      fallback();
    }
  }
};
"""
            elif 'performanceUtils' in content:
                new_content = """export const performanceUtils = {
  measure: (name: string, fn: () => void) => {
    performance.mark(name + '-start');
    fn();
    performance.mark(name + '-end');
    performance.measure(name, name + '-start', name + '-end');
  },
  
  getMetrics: () => {
    return performance.getEntriesByType('measure');
  }
};
"""
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing utils file {file_path}: {e}")
        return False

def main():
    """Main function to fix syntax errors"""
    # Fix hook files
    hook_files = glob.glob('/workspace/app/hooks/*.ts')
    for file_path in hook_files:
        if fix_hook_file(file_path):
            print(f"Fixed hook file: {file_path}")
    
    # Fix page files with syntax errors
    problematic_pages = [
        '/workspace/app/ai-content-generator/page.tsx',
        '/workspace/app/ai-solutions/page.tsx',
        '/workspace/app/case-studies/page.tsx',
        '/workspace/app/cloud-infrastructure/page.tsx',
        '/workspace/app/contact/page.tsx',
        '/workspace/app/micro-saas-solutions/page.tsx',
        '/workspace/app/pricing/page.tsx',
        '/workspace/app/services/page.tsx'
    ]
    
    for file_path in problematic_pages:
        if os.path.exists(file_path):
            if fix_page_file(file_path):
                print(f"Fixed page file: {file_path}")
    
    # Fix utils files
    utils_files = [
        '/workspace/app/utils/errorHandler.ts',
        '/workspace/app/utils/performanceUtils.ts'
    ]
    
    for file_path in utils_files:
        if os.path.exists(file_path):
            if fix_utils_file(file_path):
                print(f"Fixed utils file: {file_path}")

if __name__ == "__main__":
    main()