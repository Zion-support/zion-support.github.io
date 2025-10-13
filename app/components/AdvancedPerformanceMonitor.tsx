<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
interface AdvancedPerformanceMonitorProps {
  className?: string;
}

export default function AdvancedPerformanceMonitor({ className = '' }: AdvancedPerformanceMonitorProps) {
  return (
    <div className={`advanced-performance-monitor ${className}`}>
      <h3>Performance Monitor</h3>
      <p>Advanced performance monitoring component</p>
=======
'use client'
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memoryUsage: number | null
  loadTime: number | null
}

const AdvancedPerformanceMonitor = () => {
=======
import React, { useEffect, useState, useCallback } from 'react';


interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
}) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
=======
'use client';
import React, { useEffect, useState, useCallback } from 'react';
interface PerformanceMetrics {fcp: number | null;,}
  lcp: number | null;,
  fid: number | null;,
  cls: number | null;,
  ttfb: number | null,
  memory: number | null;,}interface PerformanceMonitorProps {onMetricsUpdate?: (metrics: PerformanceMetrics) => void,}
  enableRealTimeMonitoring?: boolean;}const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({,
  onMetricsUpdate,
  enableRealTimeMonitoring = true,}) => {const [metrics, setMetrics] = useState<PerformanceMetrics>({
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
<<<<<<< HEAD
    memoryUsage: null,
    loadTime: null
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run in development
    if (process.env['NODE_ENV'] !== 'development') return

<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
    </div>
  );
}
  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

<<<<<<< HEAD
=======
    memory: null,
  });

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    if (typeof PerformanceObserver === 'undefined') return;

    const observers: PerformanceObserver[] = [];

    // Measure First Contentful Paint (FCP)
    const fcpEntries = performance.getEntriesByName('first-contentful-paint') || [];
    const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;

    // Measure Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        observers.push(lcpObserver);
      } catch (error) {
<<<<<<< HEAD
        console.warn('LCP observer not supported:', error);
      }
=======
         
        }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1256
    }

    // Measure First Input Delay (FID)
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (
              entry.entryType === 'first-input' &&
              'processingStart' in entry &&
              'startTime' in entry
            ) {
              const fidEntry = entry as PerformanceEventTiming;
              setMetrics(prev => ({
                ...prev,
                fid: fidEntry.processingStart - fidEntry.startTime,
              }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        observers.push(fidObserver);
      } catch (error) {
<<<<<<< HEAD
        console.warn('FID observer not supported:', error);
      }
=======
         
        }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1256
    }

    // Measure Cumulative Layout Shift (CLS)
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (
              entry.entryType === 'layout-shift' &&
              'hadRecentInput' in entry &&
              'value' in entry
            ) {
              const clsEntry = entry as LayoutShift;
              if (!clsEntry.hadRecentInput) {
                clsValue += clsEntry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        observers.push(clsObserver);
      } catch (error) {
<<<<<<< HEAD
        console.warn('CLS observer not supported:', error);
      }
=======
         
        }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1256
    }

    // Measure Time to First Byte (TTFB)
    try {
      const navigationEntries = performance.getEntriesByType?.('navigation') || [];
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry
        ? navigationEntry.responseStart - navigationEntry.requestStart
        : null;

      // Measure Memory Usage
      const memory =
        (performance as Performance & { memory?: { usedJSHeapSize: number } })
          .memory?.usedJSHeapSize || null;

      setMetrics(prev => ({
        ...prev,
        fcp,
        ttfb,
        memory,
      }));
    } catch (error) {
<<<<<<< HEAD
      console.warn('Performance measurement failed:', error);
=======
    const measurePerformance = () => {
      // Measure Core Web Vitals using web-vitals library
      if (typeof window !== 'undefined') {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value })))
          getFID((metric) => setMetrics(prev => ({ ...prev, firstInputDelay: metric.value })))
          getFCP((metric) => setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value })))
          getLCP((metric) => setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value })))
          getTTFB((metric) => setMetrics(prev => ({ ...prev, timeToFirstByte: metric.value })))
        }).catch((error) => {
          console.warn('Failed to load web-vitals:', error)
        })
      }

      // Measure memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }))
      }

      // Measure load time
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
      })

      // Measure DOM content loaded
      document.addEventListener('DOMContentLoaded', () => {
        const domContentLoaded = performance.now()
        setMetrics(prev => ({ ...prev, domContentLoaded }))
      })
    }

    measurePerformance()

    // Keyboard shortcut to toggle visibility (Ctrl+Shift+M)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'M') {
        e.preventDefault()
        setIsVisible(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Calculate performance score
  const calculateScore = () => {
    let score = 100
    let factors = 0

    if (metrics.firstContentfulPaint !== null) {
      factors++
      if (metrics.firstContentfulPaint > 1800) score -= 20
      else if (metrics.firstContentfulPaint > 1000) score -= 10
    }

    if (metrics.largestContentfulPaint !== null) {
      factors++
      if (metrics.largestContentfulPaint > 2500) score -= 20
      else if (metrics.largestContentfulPaint > 1500) score -= 10
    }

    if (metrics.cumulativeLayoutShift !== null) {
      factors++
      if (metrics.cumulativeLayoutShift > 0.25) score -= 20
      else if (metrics.cumulativeLayoutShift > 0.1) score -= 10
    }

    if (metrics.firstInputDelay !== null) {
      factors++
      if (metrics.firstInputDelay > 300) score -= 20
      else if (metrics.firstInputDelay > 100) score -= 10
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
    }

=======
       
      }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1256
    // Cleanup observers
    return () => {
      observers.forEach(observer => {
        try {
          observer.disconnect();
        } catch (error) {
<<<<<<< HEAD
          console.warn('Error disconnecting observer:', error);
        }
=======
           
          }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1256
      });
    };
  }, []);

  const measureResourceTiming = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

<<<<<<< HEAD
    const resources = performance.getEntriesByType('resource');
    const slowResources = resources.filter(
      (resource: PerformanceResourceTiming) => resource.duration > 1000
    );

    if (slowResources.length > 0) {
<<<<<<< HEAD
       
      console.warn(
        'Slow resources detected:',
        slowResources.map((r: PerformanceResourceTiming) => ({
=======
      // eslint-disable-next-line no-console
      console.log('Slow resources:', slowResources.map(r => ({
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1256
          name: r.name,
          duration: r.duration,
          size: r.transferSize,
        }))
      );
    }
  }, []);

  const measureCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Use web-vitals library if available
    try {
      import('web-vitals')
        .then(webVitals => {
          const { onCLS, onFCP, onLCP, onTTFB } = webVitals;

          if (onCLS) {
            onCLS((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, cls: metric.value }))
            );
          }
          if (onFCP) {
            onFCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, fcp: metric.value }))
            );
          }
          if (onLCP) {
            onLCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, lcp: metric.value }))
            );
          }
          if (onTTFB) {
            onTTFB((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, ttfb: metric.value }))
            );
          }
        })
        .catch(() => {
          // web-vitals not available, continue without it
        });
    } catch {
      // web-vitals not available, continue without it
    }
  }, []);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    const cleanup = measureWebVitals();
    measureResourceTiming();
    measureCoreWebVitals();

    // Monitor performance every 5 seconds
    const interval = setInterval(() => {
      measureResourceTiming();
    }, 5000);

<<<<<<< HEAD
export default AdvancedPerformanceMonitor;
=======
export default AdvancedPerformanceMonitor
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
    return () => {
      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [
    enableRealTimeMonitoring,
    measureWebVitals,
    measureResourceTiming,
    measureCoreWebVitals,
  ]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  // Performance recommendations
  const getPerformanceRecommendations = useCallback(() => {
    const recommendations: string[] = [];

    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push(
        'First Contentful Paint is slow. Consider optimizing critical rendering path.'
      );
    }

    if (metrics.lcp && metrics.lcp > 2500) {
      recommendations.push(
        'Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.'
      );
    }

    if (metrics.fid && metrics.fid > 100) {
      recommendations.push(
        'First Input Delay is high. Reduce JavaScript execution time.'
      );
    }

    if (metrics.cls && metrics.cls > 0.1) {
      recommendations.push(
        'Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.'
      );
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      recommendations.push(
        'Time to First Byte is slow. Optimize server response time.'
      );
    }

    return recommendations;
  }, [metrics]);

  const recommendations = getPerformanceRecommendations();

  if (process.env['NODE_ENV'] === 'development') {
    return (
      <div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'>
        <h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3>
        <div className='text-xs space-y-1'>
          <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
          <div>
            TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
          </div>
          <div>
            Memory:{' '}
            {metrics.memory
              ? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB`
              : 'N/A'}
          </div>
        </div>
        {recommendations.length > 0 && (
          <div className='mt-2'>
            <h4 className='font-semibold text-xs text-red-600'>
              Recommendations:
            </h4>
            <ul className='text-xs text-red-600'>
              {recommendations.map((rec, index) => (
                <li key={index}>• {rec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default AdvancedPerformanceMonitor;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
  if (!isVisible || process.env['NODE_ENV'] !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-cyan-400 font-semibold">Advanced Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.firstContentfulPaint && metrics.firstContentfulPaint > 1800 ? 'text-red-400' : 'text-green-400'}>
            {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(0)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={metrics.largestContentfulPaint && metrics.largestContentfulPaint > 2500 ? 'text-red-400' : 'text-green-400'}>
            {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(0)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={metrics.firstInputDelay && metrics.firstInputDelay > 300 ? 'text-red-400' : 'text-green-400'}>
            {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(0)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={metrics.cumulativeLayoutShift && metrics.cumulativeLayoutShift > 0.25 ? 'text-red-400' : 'text-green-400'}>
            {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(3) : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={metrics.timeToFirstByte && metrics.timeToFirstByte > 600 ? 'text-red-400' : 'text-green-400'}>
            {metrics.timeToFirstByte ? `${metrics.timeToFirstByte.toFixed(0)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className="text-blue-400">
            {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="text-blue-400">
            {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        {performanceScore && (
          <div className="mt-2 pt-2 border-t border-cyan-500/20">
            <div className="flex justify-between">
              <span>Score:</span>
              <span className={performanceScore >= 90 ? 'text-green-400' : performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400'}>
                {performanceScore}/100
              </span>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-3 border-t border-cyan-500/20 text-xs text-cyan-400">
        Press Ctrl+Shift+M to toggle
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
