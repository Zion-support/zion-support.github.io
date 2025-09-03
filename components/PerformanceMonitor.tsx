<<<<<<< HEAD
'use client';

=======
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
=======
<<<<<<< HEAD
'use client';''
''
=======
'use client';
<<<<<<< HEAD
'
=======

>>>>>>> main
>>>>>>> main
>>>>>>> main
import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
<<<<<<< HEAD
  ttf,
    b: number | null;
  loadTim,
    e: number | null;
=======
  ttfb: number | null;
  loadTime: number | null;
>>>>>>> main
>>>>>>> main
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
<<<<<<< HEAD
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_SHOW_PERFORMANCE === 'true') {
      setIsVisible(true);
    }
=======
<<<<<<< HEAD
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });
=======
<<<<<<< HEAD

    fcp: null, lcp: null,
    fid: null, cls: null,
    ttfb: null, loadTime: null});
<<<<<<< HEAD
=======
=======
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null
  });
>>>>>>> main
>>>>>>> main

<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    // Only show in development or when explicitly enabled'
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
''
    // Only show in development or when explicitly enabled''
=======
    // Only show in development or when explicitly enabled
>>>>>>> main
>>>>>>> main
    if (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_SHOW_PERFORMANCE === 'true') {
      setIsVisible(true);
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
''
    // Measure First Contentful Paint (FCP)''
    if ('PerformanceObserver' in window) {
=======
>>>>>>> main
>>>>>>> main

    // Measure First Contentful Paint (FCP)
    if ('PerformanceObserver' in window) {
      const fcpObserver = new PerformanceObserver((list) => {
<<<<<<< HEAD
        const entries = list.getEntries();
        const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
''
        const entries = list.getEntries();''
=======
        const entries = list.getEntries();
>>>>>>> main
        const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
        }''
      });''
=======
        }
      });
>>>>>>> main
>>>>>>> main
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Measure Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
<<<<<<< HEAD
        if (lastEntry) {
<<<<<<< HEAD
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
=======
>>>>>>> main

          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }''
      });''
=======
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
>>>>>>> main
>>>>>>> main
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
<<<<<<< HEAD
        entries.forEach((entry) => {
<<<<<<< HEAD
=======
''
<<<<<<< HEAD

=======
''
>>>>>>> main
>>>>>>> main
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          }
<<<<<<< HEAD
        });
      });
=======
        });''
      });''
=======
        entries.forEach((entry: any) => {
          setMetrics(prev => ({
            ...prev,
            fid: entry.processingStart - entry.startTime
          }));
        });
      });
>>>>>>> main
>>>>>>> main
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Measure Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
<<<<<<< HEAD
=======
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure Time to First Byte (TTFB)
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({
            ...prev,
            ttfb: entry.responseStart - entry.requestStart
          }));
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Measure page load time'
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        setMetrics(prev => ({ ...prev, loadTime }));
      });

=======
  useEffect(() => {
<<<<<<< HEAD
    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name.toLowerCase()]: metric.value
      }));

      // Send to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

    getCLS(handleMetric);
    getFID(handleMetric);
    getFCP(handleMetric);
    getLCP(handleMetric);
    getTTFB(handleMetric);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
=======
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      // Measure First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
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

        // Measure First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({
              ...prev,
              fid: entry.processingStart - entry.startTime
            }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

<<<<<<< HEAD
        // Measure Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
=======
        const entries = list.getEntries();
        entries.forEach((entry) => {
'

          if (entry.entryType === 'first-input') {
>>>>>>> main

        // Measure Time to First Byte (TTFB)
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({
              ...prev,
              ttfb: entry.responseStart - entry.requestStart
            }));
          });
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });

        // Measure page load time
        window.addEventListener('load', () => {
          const loadTime = performance.now();
          setMetrics(prev => ({ ...prev, loadTime }));
        });

<<<<<<< HEAD
        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          navigationObserver.disconnect();
        };
=======
>>>>>>> main
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
<<<<<<< HEAD
        navigationObserver.disconnect();
      };
    }
<<<<<<< HEAD
''
    // Measure Time to First Byte (TTFB)''
    if ('performance' in window) {
''
=======
  }, []);

  if (!isVisible) {
>>>>>>> main
    return null;
  }

<<<<<<< HEAD
  return ('
    <div className="fixed bottom-4 left-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">"
      <div className="mb-2 font-bold">Performance Monitor</div>"
=======
  return (
<<<<<<< HEAD
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
      <div>FID: {metrics.fid ? `${metrics.fid.toFixed(1)}ms` : 'N/A'}</div>
      <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(1)}ms` : 'N/A'}</div>
      <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(1)}ms` : 'N/A'}</div>
      <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(1)}ms` : 'N/A'}</div>
    </div>
  );
};

export default PerformanceMonitor;
=======
    <div className="fixed bottom-4 left-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="mb-2 font-bold">Performance Monitor</div>
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
=======
      };
    }

    // Measure Time to First Byte (TTFB)
    if ('performance' in window) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
''
''
=======
'
>>>>>>> main

>>>>>>> main
>>>>>>> main
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
>>>>>>> main
      }
    };

    const cleanup = measurePerformance();
    return cleanup;
  }, []);

<<<<<<< HEAD
  const getScoreColor = (metric: string, value: number | null): string => {
=======
<<<<<<< HEAD
  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.needsImprovement) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'Measuring...';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
=======
  const getScoreColor = (metric: string, value: number | null): string => {
<<<<<<< HEAD
''
=======
<<<<<<< HEAD
''
''
<<<<<<< HEAD
    if (value === null) return 'text-gray-500'
=======
>>>>>>> main
    if (value === null) return 'text-gray-500';
    
>>>>>>> main
    switch (metric) {
<<<<<<< HEAD
      case 'fcp':
        return value <= 1800 ? 'text-green-500' : value <= 3000 ? 'text-yellow-500' : 'text-red-500';
      case 'lcp':
        return value <= 2500 ? 'text-green-500' : value <= 4000 ? 'text-yellow-500' : 'text-red-500';
      case 'fid':
        return value <= 100 ? 'text-green-500' : value <= 300 ? 'text-yellow-500' : 'text-red-500';
      case 'cls':
        return value <= 0.1 ? 'text-green-500' : value <= 0.25 ? 'text-yellow-500' : 'text-red-500';
      default:
=======
''
''
      case 'fcp': ''
        return value <= 1800 ? 'text-green-500' : value <= 3000 ? 'text-yellow-500' : 'text-red-500';''
      case 'lcp': ''
        return value <= 2500 ? 'text-green-500' : value <= 4000 ? 'text-yellow-500' : 'text-red-500';''
      case 'fid': ''
        return value <= 100 ? 'text-green-500' : value <= 300 ? 'text-yellow-500' : 'text-red-500';''
      case 'cls': ''
        return value <= 0.1 ? 'text-green-500' : value <= 0.25 ? 'text-yellow-500' : 'text-red-500';''
      default: ''
=======
'
>>>>>>> main

    if (value === null) return 'text-gray-500';
    
    switch (metric) {
''

<<<<<<< HEAD
      case 'fcp': ''
        return value <= 1800 ? 'text-green-500' : value <= 3000 ? 'text-yellow-500' : 'text-red-500';''
      case 'lcp': ''
        return value <= 2500 ? 'text-green-500' : value <= 4000 ? 'text-yellow-500' : 'text-red-500';''
      case 'fid': ''
        return value <= 100 ? 'text-green-500' : value <= 300 ? 'text-yellow-500' : 'text-red-500';''
      case 'cls': ''
        return value <= 0.1 ? 'text-green-500' : value <= 0.25 ? 'text-yellow-500' : 'text-red-500';''
      default: ''
=======
      case 'fcp':''
        return value <= 1800 ? 'text-green-500' : value <= 3000 ? 'text-yellow-500' : 'text-red-500'
      case 'lcp':''
        return value <= 2500 ? 'text-green-500' : value <= 4000 ? 'text-yellow-500' : 'text-red-500'
      case 'fid':''
        return value <= 100 ? 'text-green-500' : value <= 300 ? 'text-yellow-500' : 'text-red-500'
      case 'cls':''
        return value <= 0.1 ? 'text-green-500' : value <= 0.25 ? 'text-yellow-500' : 'text-red-500
      default:''
>>>>>>> main
>>>>>>> main
>>>>>>> main
        return 'text-gray-500';
    }
  };

  const getScoreLabel = (metric: string, value: number | null): string => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
''
=======
<<<<<<< HEAD
''
''
<<<<<<< HEAD
    if (value === null) return 'N/A'
=======
>>>>>>> main
    if (value === null) return 'N/A';
    
>>>>>>> main
    switch (metric) {
<<<<<<< HEAD
      case 'fcp':
        return value <= 1800 ? 'Good' : value <= 3000 ? 'Needs Improvement' : 'Poor';
      case 'lcp':
        return value <= 2500 ? 'Good' : value <= 4000 ? 'Needs Improvement' : 'Poor';
      case 'fid':
        return value <= 100 ? 'Good' : value <= 300 ? 'Needs Improvement' : 'Poor';
      case 'cls':
        return value <= 0.1 ? 'Good' : value <= 0.25 ? 'Needs Improvement' : 'Poor';
      default:
=======
''
''
      case 'fcp': ''
        return value <= 1800 ? 'Good' : value <= 3000 ? 'Needs Improvement' : 'Poor';''
      case 'lcp': ''
        return value <= 2500 ? 'Good' : value <= 4000 ? 'Needs Improvement' : 'Poor';''
      case 'fid': ''
        return value <= 100 ? 'Good' : value <= 300 ? 'Needs Improvement' : 'Poor';''
      case 'cls': ''
        return value <= 0.1 ? 'Good' : value <= 0.25 ? 'Needs Improvement' : 'Poor';''
      default: ''
=======
'
>>>>>>> main

    if (value === null) return 'N/A';
    
    switch (metric) {
''

<<<<<<< HEAD
      case 'fcp': ''
        return value <= 1800 ? 'Good' : value <= 3000 ? 'Needs Improvement' : 'Poor';''
      case 'lcp': ''
        return value <= 2500 ? 'Good' : value <= 4000 ? 'Needs Improvement' : 'Poor';''
      case 'fid': ''
        return value <= 100 ? 'Good' : value <= 300 ? 'Needs Improvement' : 'Poor';''
      case 'cls': ''
        return value <= 0.1 ? 'Good' : value <= 0.25 ? 'Needs Improvement' : 'Poor';''
      default: ''
=======
      case 'fcp':''
        return value <= 1800 ? 'Good' : value <= 3000 ? 'Needs Improvement' : 'Poor'
      case 'lcp':''
        return value <= 2500 ? 'Good' : value <= 4000 ? 'Needs Improvement' : 'Poor'
      case 'fid':''
        return value <= 100 ? 'Good' : value <= 300 ? 'Needs Improvement' : 'Poor'
      case 'cls':''
        return value <= 0.1 ? 'Good' : value <= 0.25 ? 'Needs Improvement' : 'Poor
      default:''
>>>>>>> main
>>>>>>> main
>>>>>>> main
        return 'N/A';
    }
>>>>>>> main
  };

<<<<<<< HEAD
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
=======
<<<<<<< HEAD
  if (!isVisible) return null;

  return()
    <div className="fixed bottom-4 right-4 bg-white dark: bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-sm z-50">""
      <div className="flex items-center justify-between mb-3">""
>>>>>>> main
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FCP:</span>
          <span className={getScoreColor('fcp', metrics.fcp)}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
          <span className="text-gray-500 text-xs">
            {getScoreLabel('fcp', metrics.fcp)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">LCP:</span>
          <span className={getScoreColor('lcp', metrics.lcp)}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
          <span className="text-gray-500 text-xs">
            {getScoreLabel('lcp', metrics.lcp)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FID:</span>
          <span className={getScoreColor('fid', metrics.fid)}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
          </span>
          <span className="text-gray-500 text-xs">
            {getScoreLabel('fid', metrics.fid)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">CLS:</span>
          <span className={getScoreColor('cls', metrics.cls)}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
          <span className="text-gray-500 text-xs">
            {getScoreLabel('cls', metrics.cls)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
          <span className="text-gray-900 dark:text-white">
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
          <span className="text-gray-900 dark:text-white">
            {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}
          </span>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => window.location.reload()}
          className="w-full text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
        >
          Refresh Metrics
        </button>
=======
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Monitor</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Contentful Paint */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">First Contentful Paint</h3>
          <div className="text-3xl font-bold mb-2">
            <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
              {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '--'}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {getScoreText(metrics.fcp, { good: 1800, needsImprovement: 3000 })}
          </p>
        </div>

        {/* Largest Contentful Paint */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Largest Contentful Paint</h3>
          <div className="text-3xl font-bold mb-2">
            <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
              {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '--'}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {getScoreText(metrics.lcp, { good: 2500, needsImprovement: 4000 })}
          </p>
        </div>

        {/* First Input Delay */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">First Input Delay</h3>
          <div className="text-3xl font-bold mb-2">
            <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
              {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '--'}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {getScoreText(metrics.fid, { good: 100, needsImprovement: 300 })}
          </p>
        </div>

        {/* Cumulative Layout Shift */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Cumulative Layout Shift</h3>
          <div className="text-3xl font-bold mb-2">
            <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
              {metrics.cls ? metrics.cls.toFixed(3) : '--'}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {getScoreText(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}
          </p>
        </div>

        {/* Time to First Byte */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Time to First Byte</h3>
          <div className="text-3xl font-bold mb-2">
            <span className={getScoreColor(metrics.ttfb, { good: 200, needsImprovement: 600 })}>
              {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '--'}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {getScoreText(metrics.ttfb, { good: 200, needsImprovement: 600 })}
          </p>
        </div>

        {/* Load Time */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Load Time</h3>
          <div className="text-3xl font-bold mb-2">
            <span className={getScoreColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>
              {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : '--'}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {getScoreText(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Performance Tips</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Optimize images and use modern formats (WebP, AVIF)</li>
          <li>• Minimize JavaScript and CSS bundles</li>
          <li>• Use lazy loading for below-the-fold content</li>
          <li>• Implement proper caching strategies</li>
          <li>• Consider using a CDN for static assets</li>
        </ul>
>>>>>>> main
>>>>>>> main
      </div>
    </div>
  );
};
<<<<<<< HEAD

export default PerformanceMonitor;
=======
<<<<<<< HEAD
'"`'"
<<<<<<< HEAD
export default PerformanceMonitor'"`'"`
=======
export default PerformanceMonitor;'"`'"`
=======
<<<<<<< HEAD
'"`'"
export default PerformanceMonitor;'"`'"`
=======

<<<<<<< HEAD
export default PerformanceMonitor;"
=======
export default PerformanceMonitor;
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
