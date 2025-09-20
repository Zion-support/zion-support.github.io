import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
}

interface UsePerformanceMonitorOptions {
  trackPageLoad?: boolean;
  trackInteractions?: boolean;
  onMetrics?: (metrics: Partial<PerformanceMetrics>) => void;
}

export const usePerformanceMonitor = (
  componentName: string,
  options: UsePerformanceMonitorOptions = {}
) => {
  const {
    trackPageLoad = true,
    trackInteractions = true,
    onMetrics
  } = options;

  // Track page load performance
  useEffect(() => {
    if (!trackPageLoad) return;

    const startTime = performance.now();

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      for (const entry of entries) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          
          onMetrics?.({ loadTime });
          
          // Log to analytics
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'page_load_time', {
              event_category: 'Performance',
              event_label: componentName,
              value: Math.round(loadTime)
            });
          }
        }
        
        if (entry.entryType === 'paint') {
          const paintEntry = entry as PerformancePaintTiming;
          if (paintEntry.name === 'first-contentful-paint') {
            onMetrics?.({ renderTime: paintEntry.startTime });
          }
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'paint'] });

    return () => {
      observer.disconnect();
      const endTime = performance.now();
      const componentRenderTime = endTime - startTime;
      
      console.log(`${componentName} render time: ${componentRenderTime.toFixed(2)}ms`);
    };
  }, [componentName, trackPageLoad, onMetrics]);

  // Track user interactions
  const trackInteraction = useCallback((interactionName: string) => {
    if (!trackInteractions) return;

    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const interactionTime = endTime - startTime;
      
      onMetrics?.({ interactionTime });
      
      // Log to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'user_interaction', {
          event_category: 'Performance',
          event_label: `${componentName}_${interactionName}`,
          value: Math.round(interactionTime)
        });
      }
      
      console.log(`${componentName} ${interactionName} interaction time: ${interactionTime.toFixed(2)}ms`);
    };
  }, [componentName, trackInteractions, onMetrics]);

  // Get current performance metrics
  const getMetrics = useCallback(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
    const lcp = paint.find(entry => entry.name === 'largest-contentful-paint');
    
    return {
      loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
      renderTime: fcp ? fcp.startTime : 0,
      largestContentfulPaint: lcp ? lcp.startTime : 0,
      domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
      totalPageLoad: navigation ? navigation.loadEventEnd - navigation.fetchStart : 0
    };
  }, []);

  return {
    trackInteraction,
    getMetrics
  };
};