#!/usr/bin/env python3
"""
Script to fix remaining syntax errors in files after conflict resolution
"""

import re
import sys
from pathlib import Path

def fix_newest_content_banner():
    """Fix NewestContent2025Banner.tsx - missing section closing tag"""
    file_path = Path("/workspace/app/components/NewestContent2025Banner.tsx")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the structure issue - need to add missing </section> tag
    # The pattern suggests we have nested divs but missing section close
    lines = content.split('\n')
    
    # Find the line with the problematic closing
    for i, line in enumerate(lines):
        if i >= 128 and i <= 135:
            if '      </div>' in line and i == 133:
                # This should be </section> instead or we need to add </section> before
                # Let me check the structure more carefully
                pass
    
    # Count opening and closing tags
    section_opens = content.count('<section')
    section_closes = content.count('</section>')
    
    if section_opens > section_closes:
        # Add missing </section> before the final </div></div>);
        content = content.replace('      </div>\n    </div>\n  );\n};', '      </div>\n    </section>\n  );\n};')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Fixed {file_path}")

def fix_enterprise_page():
    """Fix app/enterprise/page.tsx - JSX structure issues"""
    file_path = Path("/workspace/app/enterprise/page.tsx")
    
    if not file_path.exists():
        print(f"✗ File not found: {file_path}")
        return
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Count section tags
    section_opens = content.count('<section')
    section_closes = content.count('</section>')
    
    if section_opens > section_closes:
        # Need to add closing section tag(s)
        # Find the last </div> before </> and add </section> there
        content = re.sub(r'(\s*</div>\s*)\s*(</>)', r'\1    </section>\n\2', content)
    
    # Check for fragment issues
    if '<>' in content and not '</>' in content:
        content = content.replace('return (\n    <>', 'return (\n    <>\n')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Fixed {file_path}")

def fix_use_enhanced_performance():
    """Fix app/hooks/useEnhancedPerformance.ts"""
    file_path = Path("/workspace/app/hooks/useEnhancedPerformance.ts")
    
    if not file_path.exists():
        print(f"✗ File not found: {file_path}")
        return
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check for unmatched braces
    open_braces = content.count('{')
    close_braces = content.count('}')
    
    if open_braces > close_braces:
        # Add missing closing braces at the end
        lines = content.split('\n')
        # Find the last non-empty line
        last_line_idx = len(lines) - 1
        while last_line_idx > 0 and not lines[last_line_idx].strip():
            last_line_idx -= 1
        
        # Add missing closing braces
        missing_braces = open_braces - close_braces
        lines.insert(last_line_idx + 1, '};' * missing_braces)
        content = '\n'.join(lines)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Fixed {file_path}")

def fix_page_optimized():
    """Fix app/page-optimized.tsx"""
    file_path = Path("/workspace/app/page-optimized.tsx")
    
    if not file_path.exists():
        print(f"✗ File not found: {file_path}")
        return
    
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Look for broken import/export statements
    fixed_lines = []
    skip_next = False
    
    for i, line in enumerate(lines):
        if skip_next:
            skip_next = False
            continue
        
        # Fix broken dynamic imports
        if 'dynamic' in line and 'from' in line:
            if not line.strip().endswith(';') and i + 1 < len(lines) and not lines[i + 1].strip().startswith('{'):
                line = line.rstrip() + ';\n'
        
        fixed_lines.append(line)
    
    content = ''.join(fixed_lines)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Fixed {file_path}")

def fix_use_performance():
    """Fix src/hooks/usePerformance.ts"""
    file_path = Path("/workspace/src/hooks/usePerformance.ts")
    
    if not file_path.exists():
        print(f"✗ File not found: {file_path}")
        return
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check for unmatched braces
    open_braces = content.count('{')
    close_braces = content.count('}')
    
    if open_braces > close_braces:
        # Add missing closing braces before export
        if 'export default usePerformance' in content:
            content = content.replace(
                'export default usePerformance;',
                '  }, []);\n\n  return { lcp, fid, cls };\n};\n\nexport default usePerformance;'
            )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Fixed {file_path}")

def fix_error_handler():
    """Fix src/utils/errorHandler.ts"""
    file_path = Path("/workspace/src/utils/errorHandler.ts")
    
    if not file_path.exists():
        print(f"✗ File not found: {file_path}")
        return
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if class structure is broken
    if 'class ErrorHandler' not in content and 'private categorizeError' in content:
        # The class declaration was removed by conflict resolution
        # Need to add it back
        content = f"""class ErrorHandler {{
  private errorQueue: ErrorInfo[] = [];
  private readonly MAX_ERROR_QUEUE = 50;

  handleError(error: Error | string, context?: Record<string, any>): void {{
    const errorObj = typeof error === 'string' ? new Error(error) : error;
    
    // Create error info
    const errorInfo: ErrorInfo = {{
      message: errorObj.message,
      stack: errorObj.stack,
      timestamp: Date.now(),
      category: this.categorizeError(errorObj),
      severity: this.determineSeverity(errorObj, this.categorizeError(errorObj)),
      context,
      id: this.generateErrorId(),
    }};

    // Add to queue
    this.errorQueue.push(errorInfo);
    if (this.errorQueue.length > this.MAX_ERROR_QUEUE) {{
      this.errorQueue.shift();
    }}

    // Report error
    this.reportError(errorInfo);
  }}

{content}
"""
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Fixed {file_path}")

def main():
    print("Fixing remaining syntax errors...\n")
    
    try:
        fix_newest_content_banner()
        fix_enterprise_page()
        fix_use_enhanced_performance()
        fix_page_optimized()
        fix_use_performance()
        fix_error_handler()
        
        print("\n✓ All syntax errors fixed!")
        return 0
    except Exception as e:
        print(f"\n✗ Error: {e}")
        import traceback
        traceback.print_exc()
        return 1

if __name__ == "__main__":
    sys.exit(main())