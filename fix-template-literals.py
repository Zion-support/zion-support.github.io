#!/usr/bin/env python3
"""
Script to fix unterminated template literals in TypeScript files.
"""

def fix_accessibility_enhancer():
    """Fix unterminated template literal in accessibilityEnhancer.ts"""
    filepath = '/workspace/app/utils/accessibilityEnhancer.ts'
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if the file ends with an unterminated template literal
    if content.rstrip().endswith('Accessibility Report:'):
        # Add proper closing for the template literal and function
        content = content.rstrip() + """
- Images without alt: ${metrics.imagesWithoutAlt}
- Links without text: ${metrics.linksWithoutText}
- Headings without content: ${metrics.headingsWithoutContent}
- Keyboard Navigation Score: ${metrics.keyboardNavigationScore}/100
- Screen Reader Score: ${metrics.screenReaderScore}/100
- Overall Score: ${metrics.overallScore}/100
    `;
  }
}

export default new AccessibilityEnhancer();
"""
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"✓ Fixed {filepath}")

def fix_performance_monitor():
    """Fix unterminated template literal in performanceMonitor.ts"""
    filepath = '/workspace/app/utils/performanceMonitor.ts'
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if the file ends with an unterminated template literal
    if content.rstrip().endswith('Performance Report:'):
        # Add proper closing for the template literal and function
        content = content.rstrip() + """
- Score: ${score}/100
- FCP: ${metrics.fcp?.toFixed(2) || 'N/A'}ms
- LCP: ${metrics.lcp?.toFixed(2) || 'N/A'}ms
- FID: ${metrics.fid?.toFixed(2) || 'N/A'}ms
- CLS: ${metrics.cls?.toFixed(3) || 'N/A'}
- TTFB: ${metrics.ttfb?.toFixed(2) || 'N/A'}ms
    `;
  }
}

export const performanceMonitor = new PerformanceMonitor();
"""
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"✓ Fixed {filepath}")

# Fix both files
fix_accessibility_enhancer()
fix_performance_monitor()

print("\n✅ All template literals fixed!")