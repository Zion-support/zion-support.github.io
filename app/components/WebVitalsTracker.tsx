import React, { useEffect } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const WebVitalsTracker: React.FC = () => {
  useEffect(() => {
    // Import web-vitals dynamically to avoid blocking the main thread
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        // Track Core Web Vitals
        getCLS((metric: WebVitalsData) => {
          console.log('CLS:', metric);
          // Send to analytics service
          sendToAnalytics('CLS', metric.value);
        });

        getFID((metric: WebVitalsData) => {
          console.log('FID:', metric);
          sendToAnalytics('FID', metric.value);
        });

        getFCP((metric: WebVitalsData) => {
          console.log('FCP:', metric);
          sendToAnalytics('FCP', metric.value);
        });

        getLCP((metric: WebVitalsData) => {
          console.log('LCP:', metric);
          sendToAnalytics('LCP', metric.value);
        });

        getTTFB((metric: WebVitalsData) => {
          console.log('TTFB:', metric);
          sendToAnalytics('TTFB', metric.value);
        });
      } catch (error) {
        console.warn('Failed to load web-vitals:', error);
      }
    };

    // Send metrics to analytics service
    const sendToAnalytics = (metricName: string, value: number) => {
      // Send to Google Analytics, custom analytics, or logging service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metricName, {
          event_category: 'Web Vitals',
          value: Math.round(value),
          non_interaction: true,
        });
      }

      // Store in localStorage for debugging
      const storedMetrics = JSON.parse(localStorage.getItem('web-vitals') || '{}');
      storedMetrics[metricName] = {
        value,
        timestamp: Date.now(),
      };
      localStorage.setItem('web-vitals', JSON.stringify(storedMetrics));
    };

    // Track page load performance
    const trackPageLoad = () => {
      if (typeof window === 'undefined') return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        const firstByte = navigation.responseStart - navigation.requestStart;

        sendToAnalytics('Page Load Time', loadTime);
        sendToAnalytics('DOM Content Loaded', domContentLoaded);
        sendToAnalytics('Time to First Byte', firstByte);
      }
    };

    // Track resource loading performance
    const trackResourcePerformance = () => {
      if (typeof window === 'undefined') return;

      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter((resource: PerformanceResourceTiming) => 
        resource.duration > 1000 // Resources taking more than 1 second
      );

      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources);
        sendToAnalytics('Slow Resources Count', slowResources.length);
      }
    };

    // Track memory usage (if available)
    const trackMemoryUsage = () => {
      if (typeof window !== 'undefined' && (performance as any).memory) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit,
        };

        sendToAnalytics('Memory Used (MB)', Math.round(memoryUsage.used / 1024 / 1024));
        sendToAnalytics('Memory Total (MB)', Math.round(memoryUsage.total / 1024 / 1024));
      }
    };

    // Track user interactions
    const trackUserInteractions = () => {
      if (typeof window === 'undefined') return;

      let interactionCount = 0;
      const trackInteraction = () => {
        interactionCount++;
        sendToAnalytics('User Interactions', interactionCount);
      };

      // Track clicks, scrolls, and key presses
      document.addEventListener('click', trackInteraction, { passive: true });
      document.addEventListener('scroll', trackInteraction, { passive: true });
      document.addEventListener('keydown', trackInteraction, { passive: true });

      return () => {
        document.removeEventListener('click', trackInteraction);
        document.removeEventListener('scroll', trackInteraction);
        document.removeEventListener('keydown', trackInteraction);
      };
    };

    // Track page visibility changes
    const trackVisibilityChanges = () => {
      if (typeof document === 'undefined') return;

      let visibilityChanges = 0;
      const handleVisibilityChange = () => {
        visibilityChanges++;
        sendToAnalytics('Visibility Changes', visibilityChanges);
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    };

    // Initialize tracking
    loadWebVitals();
    trackPageLoad();
    trackResourcePerformance();
    trackMemoryUsage();
    const cleanupInteractions = trackUserInteractions();
    const cleanupVisibility = trackVisibilityChanges();

    // Track performance on page unload
    const handleBeforeUnload = () => {
      trackMemoryUsage();
      trackResourcePerformance();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      cleanupInteractions?.();
      cleanupVisibility?.();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default WebVitalsTracker;
