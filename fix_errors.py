#!/usr/bin/env python3
"""
Script to fix TypeScript errors in the codebase
"""
import re

# Fix performanceMonitor.ts
print("Fixing performanceMonitor.ts...")
with open('/workspace/app/utils/performanceMonitor.ts', 'r') as f:
    content = f.read()

# Fix the interface
content = re.sub(
    r'interface PerformanceMetrics \{[^}]+\}',
    '''interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  fmp?: number; // First Meaningful Paint
  tti?: number; // Time to Interactive
  tbt?: number; // Total Blocking Time
  customMetrics?: Record<string, number>;
}''',
    content,
    flags=re.DOTALL
)

# Fix the scores array type
content = content.replace('const scores = [];', 'const scores: number[] = [];')

with open('/workspace/app/utils/performanceMonitor.ts', 'w') as f:
    f.write(content)

print("Fixed performanceMonitor.ts")