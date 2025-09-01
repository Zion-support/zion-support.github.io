import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  loadTime?: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime;
      
      const newMetrics: PerformanceMetrics = {
        fcp: fcp ? Math.round(fcp) : undefined,
        lcp: lcp ? Math.round(lcp) : undefined,
        ttfb: navigation ? Math.round(navigation.responseStart - navigation.requestStart) : undefined,
        loadTime: navigation ? Math.round(navigation.loadEventEnd - navigation.navigationStart) : undefined,
      };

      setMetrics(newMetrics);

      // Log to console for development
      console.group('🚀 Performance Metrics');
      console.log('First Contentful Paint:', fcp ? `${Math.round(fcp)}ms` : 'N/A');
      console.log('Largest Contentful Paint:', lcp ? `${Math.round(lcp)}ms` : 'N/A');
      console.log('Time to First Byte:', newMetrics.ttfb ? `${newMetrics.ttfb}ms` : 'N/A');
      console.log('Total Load Time:', newMetrics.loadTime ? `${newMetrics.loadTime}ms` : 'N/A');
      console.groupEnd();
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // This would require the web-vitals library
      // import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 bg-blue-600 text-white p-2 rounded-full shadow-lg z-50 hover:bg-blue-700 transition-colors"
        title="Performance Monitor"
      >
        📊
      </button>

      {/* Performance panel */}
      {isVisible && (
        <div className="fixed bottom-16 left-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 min-w-64">
          <h3 className="font-bold text-gray-800 mb-3">Performance Metrics</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">FCP:</span>
              <span className={`font-mono ${metrics.fcp && metrics.fcp < 1800 ? 'text-green-600' : 'text-red-600'}`}>
                {metrics.fcp ? `${metrics.fcp}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">LCP:</span>
              <span className={`font-mono ${metrics.lcp && metrics.lcp < 2500 ? 'text-green-600' : 'text-red-600'}`}>
                {metrics.lcp ? `${metrics.lcp}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">TTFB:</span>
              <span className={`font-mono ${metrics.ttfb && metrics.ttfb < 600 ? 'text-green-600' : 'text-red-600'}`}>
                {metrics.ttfb ? `${metrics.ttfb}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Load Time:</span>
              <span className={`font-mono ${metrics.loadTime && metrics.loadTime < 3000 ? 'text-green-600' : 'text-red-600'}`}>
                {metrics.loadTime ? `${metrics.loadTime}ms` : 'N/A'}
              </span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Green: Good | Red: Needs improvement
            </p>
          </div>
        </div>
      )}
    </>
  );
};

// Hook for measuring component performance
export const usePerformanceMeasure = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`🎯 ${componentName} render time: ${Math.round(renderTime)}ms`);
      }
    };
  }, [componentName]);
};

// Hook for measuring async operations
export const useAsyncPerformance = () => {
  const measureAsync = async <T,>(operation: () => Promise<T>, operationName: string): Promise<T> => {
    const startTime = performance.now();
    
    try {
      const result = await operation();
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`⏱️ ${operationName} completed in: ${Math.round(duration)}ms`);
      }
      
      return result;
    } catch (error) {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      if (process.env.NODE_ENV === 'development') {
        console.error(`❌ ${operationName} failed after: ${Math.round(duration)}ms`, error);
      }
      
      throw error;
    }
  };

  return { measureAsync };
};