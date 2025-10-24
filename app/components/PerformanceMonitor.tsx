import React, { useEffect } from 'react';

<<<<<<< HEAD
interface PerformanceMonitorProps {
  performanceData?: any;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ performanceData }) => {
  useEffect(() => {
    // Monitor Core Web Vitals
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      const logMetric = (metric: any) => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.log(metric);
        }
      };
      onCLS(logMetric);
      onINP(logMetric);
      onFCP(logMetric);
      onLCP(logMetric);
      onTTFB(logMetric);
    });

    // Monitor performance metrics
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paint = performance.getEntriesByType('paint');
          
          if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.log('Performance Metrics: ', {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
              firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
            });
          }
        }, 0);
      });
    }

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Memory Usage: ', {
          used: Math.round(memory.usedJSHeapSize / 1048576),
          total: Math.round(memory.totalJSHeapSize / 1048576),
          limit: Math.round(memory.jsHeapSizeLimit / 1048576),
        });
      }
=======
interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals with proper analytics
    const sendToAnalytics = (metric: WebVitalMetric) => {
      // Send to analytics service (replace with your analytics provider)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true
        });
      }
      
      // Log in development for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${metric.name}:`, metric.value);
      }
      
      // Send to analytics service in production
      if (process.env.NODE_ENV === 'production') {
        // Example: sendToAnalytics(metric);
      }
    };

    // Only load web-vitals in production or when needed
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(sendToAnalytics);
        onFCP(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
        onINP(sendToAnalytics);
      }).catch((error) => {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Failed to load web-vitals: ', error);
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
>>>>>>> origin/main
    }
  }, []);

<<<<<<< HEAD
  if (!performanceData) {
    return null;
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-4">Performance Monitor</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-300">DOM Content Loaded:</span>
          <span className="text-emerald-400">{performanceData.domContentLoaded}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Load Complete:</span>
          <span className="text-emerald-400">{performanceData.loadComplete}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">First Paint:</span>
          <span className="text-emerald-400">{performanceData.firstPaint}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">First Contentful Paint:</span>
          <span className="text-emerald-400">{performanceData.firstContentfulPaint}ms</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
=======
  return null;
};

export default PerformanceMonitor;
>>>>>>> origin/main
