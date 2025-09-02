import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined' || !window.performance) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      // Core Web Vitals
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Largest Contentful Paint
      let lcp = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        lcp = lastEntry.startTime;
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      let fid = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          fid = entry.processingStart - entry.startTime;
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let cls = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            cls += entry.value;
          }
        });
      }).observe({ entryTypes: ['layout-shift'] });

      // Time to Interactive (approximation)
      const tti = navigation.loadEventEnd - navigation.fetchStart;

      const performanceMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
        firstContentfulPaint: fcp,
        largestContentfulPaint: lcp,
        firstInputDelay: fid,
        cumulativeLayoutShift: cls,
        timeToInteractive: tti
      };

      setMetrics(performanceMetrics);
      setIsMonitoring(true);

      // Send metrics to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'performance',
          event_label: 'core_web_vitals',
          value: Math.round(fcp),
          custom_map: {
            lcp: Math.round(lcp),
            fid: Math.round(fid),
            cls: Math.round(cls * 1000) / 1000
          }
        });
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Monitor resource loading
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter((resource: any) => resource.duration > 1000);
      
      if (slowResources.length > 0) {
        console.warn('Slow loading resources detected:', slowResources);
        
        // Track slow resources
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'slow_resource', {
            event_category: 'performance',
            event_label: 'slow_loading',
            value: slowResources.length
          });
        }
      }
    };

    // Monitor memory usage
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1048576), // MB
          total: Math.round(memory.totalJSHeapSize / 1048576), // MB
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
        };

        // Alert if memory usage is high
        if (memoryUsage.used / memoryUsage.limit > 0.8) {
          console.warn('High memory usage detected:', memoryUsage);
          
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'high_memory_usage', {
              event_category: 'performance',
              event_label: 'memory_warning',
              value: memoryUsage.used
            });
          }
        }
      }
    };

    // Set up monitoring intervals
    const resourceInterval = setInterval(monitorResources, 30000); // Every 30 seconds
    const memoryInterval = setInterval(monitorMemory, 60000); // Every minute

    return () => {
      window.removeEventListener('load', measurePerformance);
      clearInterval(resourceInterval);
      clearInterval(memoryInterval);
    };
  }, []);

  // Performance optimization suggestions
  const getOptimizationSuggestions = (metrics: PerformanceMetrics) => {
    const suggestions = [];

    if (metrics.firstContentfulPaint > 1800) {
      suggestions.push('Consider optimizing images and reducing render-blocking resources');
    }

    if (metrics.largestContentfulPaint > 2500) {
      suggestions.push('Optimize largest contentful paint by preloading critical resources');
    }

    if (metrics.firstInputDelay > 100) {
      suggestions.push('Reduce JavaScript execution time to improve interactivity');
    }

    if (metrics.cumulativeLayoutShift > 0.1) {
      suggestions.push('Add size attributes to images and avoid inserting content above existing content');
    }

    return suggestions;
  };

  if (!isMonitoring || !metrics) {
    return null;
  }

  const suggestions = getOptimizationSuggestions(metrics);

  return (
    <div className="performance-monitor">
      {/* Performance metrics display (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-xs">
          <h4 className="font-bold mb-2">Performance Metrics</h4>
          <div className="space-y-1">
            <div>Load Time: {Math.round(metrics.loadTime)}ms</div>
            <div>FCP: {Math.round(metrics.firstContentfulPaint)}ms</div>
            <div>LCP: {Math.round(metrics.largestContentfulPaint)}ms</div>
            <div>FID: {Math.round(metrics.firstInputDelay)}ms</div>
            <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
          </div>
          {suggestions.length > 0 && (
            <div className="mt-2 pt-2 border-t border-gray-600">
              <div className="font-semibold text-yellow-400">Suggestions:</div>
              <ul className="text-xs mt-1">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="text-yellow-200">• {suggestion}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EnhancedPerformanceMonitor;