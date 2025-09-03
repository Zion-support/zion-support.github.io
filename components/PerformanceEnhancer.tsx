<<<<<<< HEAD
'use client';

import React, { useEffect, useState, useCallback } from 'react';

<<<<<<< HEAD
// import { usePerformanceOptimization } from '../src/utils/performanceOptimizer';

=======
>>>>>>> main
interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
  memoryUsage: number | null;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
'use client';
'
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTim,
    e: number | null;
  memoryUsag,
    e: number | null;
>>>>>>> main
}

const PerformanceEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
<<<<<<< HEAD
    memoryUsage: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  // const optimizer = usePerformanceOptimization();

  // Only show in development or when explicitly enabled
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' || process.env['NEXT_PUBLIC_SHOW_PERFORMANCE'] === 'true') {
=======
    memoryUsage: null
  });
  
  const [isVisible, setIsVisible] = useState(false);
=======
'use client'

import React, { useEffect, useState, useCallback } from 'react'
// import { usePerformanceOptimization }  from '../src/utils/performanceOptimizer';interface PerformanceMetrics {
  fcp: number | null
   lcp: number | null
   fid: number | null
   cls: number | null
   ttfb: number | null
   loadTime: number | null
   memoryUsage: number | null
>>>>>>> main
}

const PerformanceEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
<<<<<<< HEAD
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
    memoryUsage: null
  });
  const [isVisible, setIsVisible] = useState(false);
=======
    fcp: null, lcp: null, fid: null, cls: null, ttfb: null, loadTime: null, memoryUsage: null})

  const [isVisible, setIsVisible] = useState(false)
  // const optimizer = usePerformanceOptimization()
>>>>>>> main
>>>>>>> main

  // Only show in development or when explicitly enabled
  useEffect(() => {'
    if (process.env.NODE_ENV === 'development' || process.env['NEXT_PUBLIC_SHOW_PERFORMANCE'] === 'true') {
<<<<<<< HEAD
      setIsVisible(true);
=======
<<<<<<< HEAD
>>>>>>> main
      setIsVisible(true);
    }
  }, []);

  // Measure Core Web Vitals
<<<<<<< HEAD
  useEffect(() => {
    if (typeof window === 'undefined' || !isVisible) return;
=======
  useEffect(() => {'
    if (typeof window === 'undefined' || !isVisible) return;
=======
      setIsVisible(true)
>>>>>>> main
    }
  }, []);

  // Measure Core Web Vitals
  useEffect(() => {
<<<<<<< HEAD
    if (typeof window === 'undefined' || !isVisible) return;
=======
    if (typeof window === 'undefined' || !isVisible) return
>>>>>>> main
>>>>>>> main
>>>>>>> main

    const measurePerformance = () => {
      // Measure First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
=======
<<<<<<< HEAD
>>>>>>> main
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Measure Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
<<<<<<< HEAD
=======
=======
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }))
>>>>>>> main
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Measure Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
<<<<<<< HEAD
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
=======
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
>>>>>>> main
>>>>>>> main
>>>>>>> main

        // Measure First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({
<<<<<<< HEAD
              ...prev,
              fid: entry.processingStart - entry.startTime,
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
              ...prev,
              fid: entry.processingStart - entry.startTime
>>>>>>> main
            }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main

        // Measure Cumulative Layout Shift (CLS)
        let clsValue = 0;
=======

        // Measure Cumulative Layout Shift (CLS)
        let clsValue = 0;
=======
              ...prev, fid: entry.processingStart - entry.startTime
            }))
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Measure Cumulative Layout Shift (CLS)
        let clsValue = 0
>>>>>>> main
>>>>>>> main
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
<<<<<<< HEAD
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
=======
              clsValue += entry.value
              setMetrics(prev => ({ ...prev, cls: clsValue }))
            }
          })
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
>>>>>>> main
>>>>>>> main
>>>>>>> main

        // Measure Time to First Byte (TTFB)
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({
<<<<<<< HEAD
              ...prev,
              ttfb: entry.responseStart - entry.requestStart,
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
              ...prev,
              ttfb: entry.responseStart - entry.requestStart
>>>>>>> main
            }));
          });
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });
<<<<<<< HEAD

        // Measure page load time
=======
<<<<<<< HEAD

        // Measure page load time'
>>>>>>> main
        window.addEventListener('load', () => {
          const loadTime = performance.now();
          setMetrics(prev => ({ ...prev, loadTime }));
        });
<<<<<<< HEAD

        // Measure memory usage
        const updateMemoryUsage = () => {
          if ('memory' in performance) {
            const memory = (performance as any).memory;
            setMetrics(prev => ({
              ...prev,
              memoryUsage: memory.usedJSHeapSize / 1024 / 1024, // Convert to MB
=======
=======

        // Measure page load time
        window.addEventListener('load', () => {
          const loadTime = performance.now();
          setMetrics(prev => ({ ...prev, loadTime }));
        });
=======
              ...prev, ttfb: entry.responseStart - entry.requestStart
            }))
          })
        })
        navigationObserver.observe({ entryTypes: ['navigation'] })

        // Measure page load time
        window.addEventListener('load', () => {
          const loadTime = performance.now()
          setMetrics(prev => ({ ...prev, loadTime }))
        })
>>>>>>> main
>>>>>>> main

        // Measure memory usage
        const updateMemoryUsage = () => {'
          if ('memory' in performance) {
            const memory = (performance as any).memory;
            setMetrics(prev => ({
<<<<<<< HEAD
              ...prev,
              memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
            }));
=======
<<<<<<< HEAD
              ...prev,
              memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
>>>>>>> main
            }));
          }
        };

        updateMemoryUsage();
        const memoryInterval = setInterval(updateMemoryUsage, 5000);

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          navigationObserver.disconnect();
          clearInterval(memoryInterval);
        };
      }
    };

    const cleanup = measurePerformance();
    return cleanup;
  }, [isVisible]);
<<<<<<< HEAD

  // Send metrics to analytics
=======
=======
              ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
            }))
>>>>>>> main
          }
        };

        updateMemoryUsage();
        const memoryInterval = setInterval(updateMemoryUsage, 5000);

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          navigationObserver.disconnect();
          clearInterval(memoryInterval);
        };
      }
      
      return undefined;
    };

<<<<<<< HEAD
    measurePerformance();
  }, [isVisible]);

  // Send metrics to analytics
  const sendToAnalytics = useCallback((metricName: string, value: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
=======
    const cleanup = measurePerformance()
    return cleanup
  }, [isVisible])
>>>>>>> main

  // Send metrics to analytics
<<<<<<< HEAD
  const sendToAnalytics = useCallback((metricName: string, value: number) => {'
    if (typeof gtag !== 'undefined') {'
=======
>>>>>>> main
  const sendToAnalytics = useCallback((metricName: string, value: number) => {
    if (typeof gtag !== 'undefined') {
<<<<<<< HEAD
>>>>>>> main
      gtag('event', 'web_vitals', {
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
        name: metricName,
        value: Math.round(value),
        event_category: 'Performance',
        event_label: metricName,
<<<<<<< HEAD
        non_interaction: true,
      });
    }
  }, []);
=======
        non_interaction: true
      });
<<<<<<< HEAD
    }
  }, []);
=======
    }
  }, []);
=======
      gtag('event,web_vitals', {
        name: metricName, value: Math.round(value), event_category: 'Performance', event_label: metricName, non_interaction: true})
    }
  }, [])
>>>>>>> main
>>>>>>> main
>>>>>>> main

  // Send metrics when they change
  useEffect(() => {
    Object.entries(metrics).forEach(([key, value]) => {
<<<<<<< HEAD
      if (value !== null) {
        sendToAnalytics(key, value);
=======
<<<<<<< HEAD
      if (value !== null) {
        sendToAnalytics(key, value);
      }
    });
  }, [metrics, sendToAnalytics]);

  if (!isVisible) {
    return null;
  }

<<<<<<< HEAD
  return ('
    <div className="fixed bottom-4 left-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">"
      <div className="mb-2 font-bold">Performance Metrics</div>"
=======
  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <h3 className="font-bold mb-2 text-green-400">Performance Metrics</h3>
      <div className="space-y-1">
        {metrics.fcp && (
          <div>FCP: <span className="text-yellow-400">{metrics.fcp.toFixed(2)}ms</span></div>
        )}
        {metrics.lcp && (
          <div>LCP: <span className="text-yellow-400">{metrics.lcp.toFixed(2)}ms</span></div>
        )}
        {metrics.fid && (
          <div>FID: <span className="text-yellow-400">{metrics.fid.toFixed(2)}ms</span></div>
        )}
        {metrics.cls && (
          <div>CLS: <span className="text-yellow-400">{metrics.cls.toFixed(4)}</span></div>
        )}
        {metrics.ttfb && (
          <div>TTFB: <span className="text-yellow-400">{metrics.ttfb.toFixed(2)}ms</span></div>
        )}
        {metrics.loadTime && (
          <div>Load: <span className="text-yellow-400">{metrics.loadTime.toFixed(2)}ms</span></div>
        )}
=======
      if (value !== null && value !== undefined) {
<<<<<<< HEAD
        sendToAnalytics(key.toUpperCase(), value)}
    })}, [metrics, sendToAnalytics]);
  if (!isVisible) return null
  const getScoreColor = (value: number | null, thresholds: { good: number needsImprovement: number }) => {
    if (value === null) return 'text-gray-500'
=======
<<<<<<< HEAD
        sendToAnalytics(key.toUpperCase(), value);
=======
        sendToAnalytics(key.toUpperCase(), value)
>>>>>>> main
>>>>>>> main
      }
    });
  }, [metrics, sendToAnalytics]);

<<<<<<< HEAD
  if (!isVisible) return null;

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-500';
>>>>>>> main
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.needsImprovement) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'Measuring...';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Performance Metrics</h3>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
=======
  if (!isVisible) {
    return null;
  }

  return (
<<<<<<< HEAD
    <div className="fixed bottom-4 left-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="mb-2 font-bold">Performance Metrics</div>
>>>>>>> main
      <div className="space-y-1">
        {metrics.fcp !== null && (
          <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
        )}
        {metrics.lcp !== null && (
          <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
        )}
        {metrics.fid !== null && (
          <div>FID: {metrics.fid.toFixed(2)}ms</div>
        )}
        {metrics.cls !== null && (
          <div>CLS: {metrics.cls.toFixed(4)}</div>
        )}
        {metrics.ttfb !== null && (
          <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
        )}
        {metrics.loadTime !== null && (
          <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
        )}
        {metrics.memoryUsage !== null && (
          <div>Memory: {metrics.memoryUsage.toFixed(2)}MB</div>
        )}
      </div>
=======
    <div className='fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50'>
      <h3 className='text-sm font-semibold text-gray-900 mb-3'>Performance Metrics</h3>
      <div className='space-y-2 text-xs'>
        <div className='flex justify-between'>
>>>>>>> main
          <span>FCP: </span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Measuring...'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={getScoreColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>
            {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'Measuring...'}
          </span>
        </div>
>>>>>>> main
        {metrics.memoryUsage && (
<<<<<<< HEAD
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className={getScoreColor(metrics.memoryUsage, { good: 50, needsImprovement: 100 })}>
              {Math.round(metrics.memoryUsage)}MB
            </span>
          </div>
        )}
      </div>
      <div className="mt-3 pt-2 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Overall Score: {(() => {
            const scores = [
              getScoreText(metrics.fcp, { good: 1800, needsImprovement: 3000 }),
              getScoreText(metrics.lcp, { good: 2500, needsImprovement: 4000 }),
              getScoreText(metrics.fid, { good: 100, needsImprovement: 300 }),
              getScoreText(metrics.cls, { good: 0.1, needsImprovement: 0.25 }),
            ];
            const goodCount = scores.filter(score => score === 'Good').length;
            const totalCount = scores.filter(score => score !== 'Measuring...').length;
            if (totalCount === 0) return 'Measuring...';
            if (goodCount === totalCount) return 'Excellent';
<<<<<<< HEAD
=======
            if (goodCount >= totalCount * 0.75) return 'Good';
            if (goodCount >= totalCount * 0.5) return 'Needs Improvement';
            return 'Poor';
=======
          <div>Memory: <span className="text-yellow-400">{metrics.memoryUsage.toFixed(2)}MB</span></div>
        )}
      </div>
<<<<<<< HEAD
    </div>
  );
};

<<<<<<< HEAD
export default PerformanceEnhancer;"
=======
export default PerformanceEnhancer;
=======
      <div className='mt-3 pt-2 border-t border-gray-200'>
        <div className='text-xs text-gray-500'>
          Overall Score: {(() => {
            const scores = [
              getScoreText(metrics.fcp, { good: 1800, needsImprovement: 3000 }), getScoreText(metrics.lcp, { good: 2500, needsImprovement: 4000 }), getScoreText(metrics.fid, { good: 100, needsImprovement: 300 }), getScoreText(metrics.cls, { good: 0.1, needsImprovement: 0.25 })]

            const goodCount = scores.filter(score => score === 'Good').length
            const totalCount = scores.filter(score => score !== 'Measuring...').length

            if (totalCount === 0) return 'Measuring...'
            if (goodCount === totalCount) return 'Excellent'
>>>>>>> main
            if (goodCount >= totalCount * 0.75) return 'Good'
            if (goodCount >= totalCount * 0.5) return 'Needs Improvement'
            return 'Poor'
>>>>>>> main
          })()}
        </div>
      </div>
>>>>>>> main
    </div>
<<<<<<< HEAD
  )}

export default PerformanceEnhancer
=======
  );
};

<<<<<<< HEAD
export default PerformanceEnhancer;
=======
<<<<<<< HEAD
export default PerformanceEnhancer;
=======
export default PerformanceEnhancer
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
