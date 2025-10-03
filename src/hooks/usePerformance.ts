import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectMetrics = () => {
      if (typeof window === 'undefined' || !window.performance) {
        setIsLoading(false);
        return;
      }

      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = window.performance.getEntriesByType('paint');

      const performanceMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
        firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0,
        timeToInteractive: 0,
      };

      // Collect Web Vitals if available
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            setMetrics(prev => prev ? { ...prev, cumulativeLayoutShift: metric.value } : null);
          });

          getFID((metric) => {
            setMetrics(prev => prev ? { ...prev, firstInputDelay: metric.value } : null);
          });

          getFCP((metric) => {
            setMetrics(prev => prev ? { ...prev, firstContentfulPaint: metric.value } : null);
          });

          getLCP((metric) => {
            setMetrics(prev => prev ? { ...prev, largestContentfulPaint: metric.value } : null);
          });

          getTTFB((metric) => {
            setMetrics(prev => prev ? { ...prev, timeToInteractive: metric.value } : null);
          });
        });
      }

      setMetrics(performanceMetrics);
      setIsLoading(false);
    };

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
    }

    return () => {
      window.removeEventListener('load', collectMetrics);
    };
  }, []);

  const logMetrics = () => {
    if (metrics) {
      console.group('🚀 Performance Metrics');
      console.log(`Load Time: ${metrics.loadTime.toFixed(2)}ms`);
      console.log(`DOM Content Loaded: ${metrics.domContentLoaded.toFixed(2)}ms`);
      console.log(`First Paint: ${metrics.firstPaint.toFixed(2)}ms`);
      console.log(`First Contentful Paint: ${metrics.firstContentfulPaint.toFixed(2)}ms`);
      console.log(`Largest Contentful Paint: ${metrics.largestContentfulPaint.toFixed(2)}ms`);
      console.log(`Cumulative Layout Shift: ${metrics.cumulativeLayoutShift.toFixed(4)}`);
      console.log(`First Input Delay: ${metrics.firstInputDelay.toFixed(2)}ms`);
      console.log(`Time to Interactive: ${metrics.timeToInteractive.toFixed(2)}ms`);
      console.groupEnd();
    }
  };

  const getPerformanceScore = () => {
    if (!metrics) return 0;

    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.firstContentfulPaint > 3000) score -= 20;
    else if (metrics.firstContentfulPaint > 1800) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint > 4000) score -= 25;
    else if (metrics.largestContentfulPaint > 2500) score -= 15;
    
    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift > 0.25) score -= 25;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 15;
    
    // FID scoring (0-100)
    if (metrics.firstInputDelay > 300) score -= 20;
    else if (metrics.firstInputDelay > 100) score -= 10;
    
    return Math.max(0, Math.round(score));
  };

  return {
    metrics,
    isLoading,
    logMetrics,
    performanceScore: getPerformanceScore(),
  };
};