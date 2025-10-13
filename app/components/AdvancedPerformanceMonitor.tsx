'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memoryUsage: number | null
  loadTime: number | null
}

interface PerformanceRecommendation {
  type: 'warning' | 'error' | 'info';
  message: string;
  impact: 'high' | 'medium' | 'low';
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null
  })

  useEffect(() => {
    // Import web-vitals dynamically
    const measureWebVitals = async () => {
      try {
        const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import('web-vitals')

        onCLS((metric: any) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }))
          reportMetric('CLS', metric.value)
        })

        onINP((metric: any) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }))
          reportMetric('INP', metric.value)
        })

        onFCP((metric: any) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }))
          reportMetric('FCP', metric.value)
        })

        onLCP((metric: any) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }))
          reportMetric('LCP', metric.value)
        })

        onTTFB((metric: any) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }))
          reportMetric('TTFB', metric.value)
        })
      } catch (error) {
      }
    }

    // Measure memory usage
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        const memoryUsage = (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100
        setMetrics(prev => ({ ...prev, memoryUsage }))
        reportMetric('Memory Usage', memoryUsage)
      }
    }

    // Measure page load time
    const measureLoadTime = () => {
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        setMetrics(prev => ({ ...prev, loadTime }))
        reportMetric('Load Time', loadTime)
      })
    }

    // Report metrics to analytics
    const reportMetric = (name: string, value: number) => {
      // Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          metric_name: name,
          metric_value: Math.round(value),
          metric_delta: Math.round(value)
        })
      }

      // Send to custom analytics
      if (typeof window !== 'undefined' && (window as any).analytics) {
        (window as any).analytics.track('Performance Metric', {
          name,
          value: Math.round(value),
          timestamp: Date.now()
        })
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance metric:', { name, value, timestamp: Date.now() });
=======
        console.log('Performance metric:', { name, value, timestamp: Date.now() });
>>>>>>> cursor/website-audit-and-update-with-deployment-6e33
      }
    }

    // Monitor resource loading performance
    const monitorResourcePerformance = () => {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming
            const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart
            
            // Report slow resources
            if (loadTime > 1000) {
              reportMetric('Slow Resource', loadTime);
            }
          }
        })
      })

      observer.observe({ entryTypes: ['resource'] })
    }

    // Monitor long tasks
    const monitorLongTasks = () => {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const longTask = entry as PerformanceEntry
          if (longTask.duration > 50) {
            reportMetric('Long Task', longTask.duration)
            }
        })
      })

      observer.observe({ entryTypes: ['longtask'] })
    }

    // Initialize all monitoring
    measureWebVitals()
    measureMemoryUsage()
    measureLoadTime()
    monitorResourcePerformance()
    monitorLongTasks()

    // Periodic memory monitoring
    const memoryInterval = setInterval(measureMemoryUsage, 30000)

    // Cleanup
    return () => {
      clearInterval(memoryInterval)
    }
  }, [])

  // Performance score calculation
  const calculatePerformanceScore = () => {
    const scores = []
    
    if (metrics.fcp !== null) {
      scores.push(metrics.fcp < 1800 ? 100 : Math.max(0, 100 - (metrics.fcp - 1800) / 100))
    }
    
    if (metrics.lcp !== null) {
      scores.push(metrics.lcp < 2500 ? 100 : Math.max(0, 100 - (metrics.lcp - 2500) / 100))
    }
    
    if (metrics.fid !== null) {
      scores.push(metrics.fid < 100 ? 100 : Math.max(0, 100 - (metrics.fid - 100) / 10))
    }
    
    if (metrics.cls !== null) {
      scores.push(metrics.cls < 0.1 ? 100 : Math.max(0, 100 - metrics.cls * 1000))
    }

    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null
  }

  const performanceScore = calculatePerformanceScore()

  // Render performance dashboard in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
        <div className="font-bold mb-2">Performance Metrics</div>
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
        <div>Memory: {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}%` : 'N/A'}</div>
        <div>Load: {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}</div>
        {performanceScore && (
          <div className="mt-2 pt-2 border-t border-gray-600">
            <div>Score: {performanceScore}/100</div>
          </div>
        )}
      </div>
    )
  }

  return null
}

export default AdvancedPerformanceMonitor
=======
    memory: null
  });

  const [isVisible, setIsVisible] = useState(false);
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure First Contentful Paint (FCP)
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });
    observer.observe({ entryTypes: ['paint'] });

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ ...prev, memory: memory.usedJSHeapSize }));
    }

    return () => {
      observer.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
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
          // Fallback to manual measurement
          measurePerformance();
        });
    } catch {
      // Fallback to manual measurement
      measurePerformance();
    }
  }, [measurePerformance]);

  const getPerformanceRecommendations = useCallback((): PerformanceRecommendation[] => {
    const recs: PerformanceRecommendation[] = [];

    if (metrics.fcp && metrics.fcp > 1800) {
      recs.push({
        type: 'warning',
        message: 'First Contentful Paint is slow. Consider optimizing critical rendering path.',
        impact: 'high'
      });
    }

    if (metrics.lcp && metrics.lcp > 2500) {
      recs.push({
        type: 'error',
        message: 'Largest Contentful Paint is too slow. Optimize images and reduce render-blocking resources.',
        impact: 'high'
      });
    }

    if (metrics.fid && metrics.fid > 100) {
      recs.push({
        type: 'warning',
        message: 'First Input Delay is high. Reduce JavaScript execution time.',
        impact: 'medium'
      });
    }

    if (metrics.cls && metrics.cls > 0.1) {
      recs.push({
        type: 'warning',
        message: 'Cumulative Layout Shift is high. Ensure stable layout during loading.',
        impact: 'medium'
      });
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      recs.push({
        type: 'info',
        message: 'Time to First Byte is slow. Consider server optimization or CDN.',
        impact: 'medium'
      });
    }

    if (metrics.memory && metrics.memory > 50 * 1024 * 1024) {
      recs.push({
        type: 'info',
        message: 'High memory usage detected. Check for memory leaks.',
        impact: 'low'
      });
    }

    return recs;
  }, [metrics]);

  useEffect(() => {
    const cleanup = measureCoreWebVitals();
    return cleanup;
  }, [measureCoreWebVitals]);

  useEffect(() => {
    const recs = getPerformanceRecommendations();
    setRecommendations(recs);
  }, [getPerformanceRecommendations]);

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return <Activity className="w-4 h-4" />;
    if (value <= thresholds.good) return <CheckCircle className="w-4 h-4 text-green-400" />;
    if (value <= thresholds.poor) return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
    return <AlertTriangle className="w-4 h-4 text-red-400" />;
  };

  if (process.env.NODE_ENV !== 'development' && !isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        aria-label="Open performance monitor"
      >
        <Zap className="w-6 h-6" />
      </button>
    );
  }

  if (process.env.NODE_ENV !== 'development' && !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm text-gray-900 dark:text-white flex items-center">
          <Activity className="w-4 h-4 mr-2" />
          Performance Monitor
        </h3>
        {process.env.NODE_ENV === 'development' && (
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            aria-label="Close performance monitor"
          >
            ×
          </button>
        )}
      </div>
      
      <div className="text-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">FCP:</span>
          <div className="flex items-center">
            {getScoreIcon(metrics.fcp, { good: 1800, poor: 3000 })}
            <span className={`ml-1 ${getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}`}>
              {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">LCP:</span>
          <div className="flex items-center">
            {getScoreIcon(metrics.lcp, { good: 2500, poor: 4000 })}
            <span className={`ml-1 ${getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}`}>
              {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">FID:</span>
          <div className="flex items-center">
            {getScoreIcon(metrics.fid, { good: 100, poor: 300 })}
            <span className={`ml-1 ${getScoreColor(metrics.fid, { good: 100, poor: 300 })}`}>
              {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">CLS:</span>
          <div className="flex items-center">
            {getScoreIcon(metrics.cls, { good: 0.1, poor: 0.25 })}
            <span className={`ml-1 ${getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}`}>
              {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
          <div className="flex items-center">
            {getScoreIcon(metrics.ttfb, { good: 600, poor: 1500 })}
            <span className={`ml-1 ${getScoreColor(metrics.ttfb, { good: 600, poor: 1500 })}`}>
              {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">Memory:</span>
          <span className="text-gray-600 dark:text-gray-400">
            {metrics.memory ? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB` : 'N/A'}
          </span>
        </div>
      </div>
      
      {recommendations.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-xs text-red-600 dark:text-red-400 mb-2">
            Recommendations:
          </h4>
          <ul className="text-xs text-red-600 dark:text-red-400 space-y-1">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-1">•</span>
                <span>{rec.message}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;
>>>>>>> cursor/fix-errors-and-merge-to-main-0ca7
