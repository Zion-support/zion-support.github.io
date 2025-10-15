import React, { useEffect, useState } from 'react';

interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  cls?: number;
  ttfb?: number;
  inp?: number;
  loadTime?: number;
  domContentLoaded?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Monitor Core Web Vitals with proper analytics
    const sendToAnalytics = (metric: WebVitalMetric) => {
      // Update local state
      setMetrics(prev => ({
        ...prev,
        [metric.name.toLowerCase()]: metric.value
      }));

      // Send to analytics service (replace with your analytics provider)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Also log in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${metric.name}:`, metric.value);
      }
    };

    // Load web-vitals dynamically
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(sendToAnalytics);
        onFCP(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
        onINP(sendToAnalytics);
      }).catch((error) => {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Failed to load web-vitals:', error);
        }
      });
    }

    // Monitor page load performance
    const measurePageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          setMetrics(prev => ({
            ...prev,
            loadTime,
            domContentLoaded
          }));
          
          if (process.env.NODE_ENV === 'development') {
            console.log(`[Performance] Page Load Time: ${loadTime}ms`);
            console.log(`[Performance] DOM Content Loaded: ${domContentLoaded}ms`);
          }
        }
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    // Monitor resource loading
    const monitorResources = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const resources = window.performance.getEntriesByType('resource');
        const slowResources = resources.filter((resource: any) => resource.duration > 1000);
        
        if (slowResources.length > 0 && process.env.NODE_ENV === 'development') {
          console.warn('[Performance] Slow resources detected:', slowResources);
        }
      }
    };

    // Monitor memory usage
    const monitorMemory = () => {
      if (typeof window !== 'undefined' && (window as any).performance?.memory) {
        const memory = (window as any).performance.memory;
        if (process.env.NODE_ENV === 'development') {
          console.log('[Performance] Memory usage:', {
            used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + 'MB',
            total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + 'MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + 'MB'
          });
        }
      }
    };

    // Monitor long tasks
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (process.env.NODE_ENV === 'development') {
              console.warn('[Performance] Long task detected:', entry.duration + 'ms');
            }
          });
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (error) {
        // Long task observer not supported
      }
    }

    // Monitor layout shifts
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        const layoutShiftObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput && entry.value > 0.1) {
              if (process.env.NODE_ENV === 'development') {
                console.warn('[Performance] Layout shift detected:', entry.value);
              }
            }
          });
        });
        layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        // Layout shift observer not supported
      }
    }

    // Set up monitoring
    setTimeout(monitorResources, 2000);
    setTimeout(monitorMemory, 3000);

    return () => {
      window.removeEventListener('load', measurePageLoad);
    };
  }, []);

  // Toggle performance panel visibility (development only)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'P') {
          setIsVisible(prev => !prev);
        }
      };
      
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  if (process.env.NODE_ENV === 'development' && isVisible) {
    return (
      <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs font-mono max-w-sm z-50">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold">Performance Metrics</h3>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>
        <div className="space-y-1">
          {metrics.fcp && <div>FCP: {Math.round(metrics.fcp)}ms</div>}
          {metrics.lcp && <div>LCP: {Math.round(metrics.lcp)}ms</div>}
          {metrics.cls && <div>CLS: {metrics.cls.toFixed(3)}</div>}
          {metrics.ttfb && <div>TTFB: {Math.round(metrics.ttfb)}ms</div>}
          {metrics.inp && <div>INP: {Math.round(metrics.inp)}ms</div>}
          {metrics.loadTime && <div>Load: {Math.round(metrics.loadTime)}ms</div>}
          {metrics.domContentLoaded && <div>DOM: {Math.round(metrics.domContentLoaded)}ms</div>}
        </div>
        <div className="mt-2 text-gray-400 text-xs">
          Press Ctrl+Shift+P to toggle
        </div>
      </div>
    );
  }

  return null;
};

export default PerformanceMonitor;