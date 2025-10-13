import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const WebVitalsTracker: React.FC = () => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackMetric = (metric: WebVitalsMetric) => {
      // Send to analytics service (Google Analytics, etc.)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        // Use a more structured logging approach
        const logData = {
          metric: metric.name,
          value: metric.value,
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType
        };
        // Only log in development mode
        if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
          console.log(`[Web Vitals] ${metric.name}:`, logData);
        }
      }
    };

    // Measure all Core Web Vitals
    onCLS(trackMetric);
    onINP(trackMetric);
    onFCP(trackMetric);
    onLCP(trackMetric);
    onTTFB(trackMetric);

    // Track additional performance metrics
    const trackAdditionalMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            'DOM Content Loaded': navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            'Load Complete': navigation.loadEventEnd - navigation.loadEventStart,
            'First Byte': navigation.responseStart - navigation.requestStart,
            'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
            'TCP Connection': navigation.connectEnd - navigation.connectStart,
          };

          Object.entries(metrics).forEach(([name, value]) => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'performance_metric', {
                event_category: 'Performance',
                event_label: name,
                value: Math.round(value),
                non_interaction: true,
              });
            }
          });
        }
      }
    };

    // Track additional metrics after page load
    if (document.readyState === 'complete') {
      trackAdditionalMetrics();
    } else {
      window.addEventListener('load', trackAdditionalMetrics);
    }

    return () => {
      window.removeEventListener('load', trackAdditionalMetrics);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default WebVitalsTracker;