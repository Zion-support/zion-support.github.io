import { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`${entry.name}: ${entry.value || entry.startTime}ms`);
        }
      }
    });

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    } catch (e) {
      // PerformanceObserver might not be supported in all browsers
      console.warn('PerformanceObserver not supported');
    }

    // Monitor page load performance
    const handleLoad = () => {
      if (process.env.NODE_ENV === 'development') {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          console.log('Page Load Performance:', {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            totalTime: navigation.loadEventEnd - navigation.fetchStart
          });
        }
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      observer.disconnect();
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
