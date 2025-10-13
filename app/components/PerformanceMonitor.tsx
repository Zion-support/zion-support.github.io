import React, { useEffect, useState } from 'react';
import { Monitor } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
  domContentLoaded: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
    domContentLoaded: null
  });

  useEffect(() => {
    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fid = (entry as any).processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
          loadTime: navigationEntry.loadEventEnd - navigationEntry.navigationStart,
          domContentLoaded: navigationEntry.domContentLoadedEventEnd - navigationEntry.navigationStart
        }));
      }
    };

    // Measure resource loading performance
    const measureResourcePerformance = () => {
      const resources = performance.getEntriesByType('resource');
      const totalSize = resources.reduce((acc, resource) => {
        const transferSize = (resource as PerformanceResourceTiming).transferSize || 0;
        return acc + transferSize;
      }, 0);

      console.log('Total resources loaded:', resources.length);
      console.log('Total transfer size:', (totalSize / 1024).toFixed(2), 'KB');
    };

    // Measure memory usage (if available)
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: (memory.usedJSHeapSize / 1024 / 1024).toFixed(2) + ' MB',
          total: (memory.totalJSHeapSize / 1024 / 1024).toFixed(2) + ' MB',
          limit: (memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2) + ' MB'
        });
      }
    };

    // Run measurements



    // Log metrics to console in development
    if (process.env.NODE_ENV === 'development') {
      const logMetrics = () => {
        console.group('🚀 Performance Metrics');
        console.log('First Contentful Paint (FCP):', metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Measuring...');
        console.log('Largest Contentful Paint (LCP):', metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Measuring...');
        console.log('First Input Delay (FID):', metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'Measuring...');
        console.log('Cumulative Layout Shift (CLS):', metrics.cls ? metrics.cls.toFixed(4) : 'Measuring...');
        console.log('Time to First Byte (TTFB):', metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Measuring...');
        console.log('Page Load Time:', metrics.loadTime ? `${metrics.loadTime.toFixed(2)}ms` : 'Measuring...');
        console.log('DOM Content Loaded:', metrics.domContentLoaded ? `${metrics.domContentLoaded.toFixed(2)}ms` : 'Measuring...');
        console.groupEnd();
      };

      // Log initial metrics

      // Log final metrics after page load
      window.addEventListener('load', () => {

      });
    }

    // Send metrics to analytics in production
    if (process.env.NODE_ENV === 'production') {
      const sendMetricsToAnalytics = () => {
        // Example: Send to Google Analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'Core Web Vitals',
            value: Math.round(metrics.lcp || 0),
            custom_map: {
              fcp: metrics.fcp,
              lcp: metrics.lcp,
              fid: metrics.fid,
              cls: metrics.cls,
              ttfb: metrics.ttfb
            }
          });
        }
      };

      // Send metrics after a delay to ensure all measurements are complete

    }

  }, [metrics]);

  // Performance recommendations
  const getPerformanceRecommendations = () => {
    const recommendations = [];

    if (metrics.fcp && metrics.fcp > 1800) {
      recommendations.push('Consider optimizing First Contentful Paint - aim for < 1.8s');
    }

    if (metrics.lcp && metrics.lcp > 2500) {
      recommendations.push('Optimize Largest Contentful Paint - aim for < 2.5s');
    }

    if (metrics.fid && metrics.fid > 100) {
      recommendations.push('Reduce First Input Delay - aim for < 100ms');
    }

    if (metrics.cls && metrics.cls > 0.1) {
      recommendations.push('Minimize Cumulative Layout Shift - aim for < 0.1');
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      recommendations.push('Improve Time to First Byte - aim for < 600ms');
    }

    return recommendations;
  };

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const recommendations = getPerformanceRecommendations();

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-lg text-white p-4 rounded-lg max-w-sm text-xs z-50">
      <h3 className="font-semibold mb-2">Performance Monitor</h3>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '...'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '...'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '...'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : '...'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '...'}</div>
      </div>
      
      {recommendations.length > 0 && (
        <div className="mt-2 pt-2 border-t border-gray-600">
          <div className="text-yellow-400 font-semibold mb-1">Recommendations:</div>
          {recommendations.map((rec, index) => (
            <div key={index} className="text-yellow-300">• {rec}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
