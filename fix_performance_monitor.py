#!/usr/bin/env python3
"""
Fix the PerformanceMonitor component merge conflicts
"""

def fix_performance_monitor():
    file_path = '/workspace/app/components/PerformanceMonitor.tsx'
    
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Fix the LCP section
    content = content.replace(
        '''<span className={`font-mono ${metrics.largestContentfulPaint ? getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
                {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(0)}ms` : 'N/A'}
=======
              <span className={`font-mono ${metrics.largestContentfulPaint ? getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
                {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(0)}ms` : 'N/A'}

              </span>''',
        '''<span className={`font-mono ${metrics.largestContentfulPaint ? getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
                {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(0)}ms` : 'N/A'}
              </span>'''
    )
    
    # Fix the INP/FID section
    content = content.replace(
        '''<span className="text-gray-600">INP:</span>

              <span className={`font-mono ${metrics.interactionToNextPaint ? getMetricColor(metrics.interactionToNextPaint, { good: 200, poor: 500 }) : 'text-gray-400'}`}>
                {metrics.interactionToNextPaint ? `${metrics.interactionToNextPaint.toFixed(0)}ms` : 'N/A'}
=======
              <span className="text-gray-600">FID:</span>
              <span className={`font-mono ${metrics.firstInputDelay ? getMetricColor(metrics.firstInputDelay, { good: 100, poor: 300 }) : 'text-gray-400'}`}>
                {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(0)}ms` : 'N/A'}

              </span>''',
        '''<span className="text-gray-600">FID:</span>
              <span className={`font-mono ${metrics.firstInputDelay ? getMetricColor(metrics.firstInputDelay, { good: 100, poor: 300 }) : 'text-gray-400'}`}>
                {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(0)}ms` : 'N/A'}
              </span>'''
    )
    
    # Fix the CLS section
    content = content.replace(
        '''<span className={`font-mono ${metrics.cumulativeLayoutShift !== undefined ? getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
                {metrics.cumulativeLayoutShift !== undefined ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}
=======
              <span className={`font-mono ${metrics.cumulativeLayoutShift ? getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
                {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}

              </span>''',
        '''<span className={`font-mono ${metrics.cumulativeLayoutShift ? getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
                {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}
              </span>'''
    )
    
    with open(file_path, 'w') as f:
        f.write(content)
    
    print("Fixed PerformanceMonitor merge conflicts")

if __name__ == "__main__":
    fix_performance_monitor()