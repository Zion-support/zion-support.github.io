import React from 'react';
'use client'
export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Components</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.</p>
      </div>
    </div>
  )
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ children }) => {
  useEffect(() => {
    const sendToAnalytics = (metric: WebVitalsData) => {
      // Send to Google Analytics or other analytics service
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Send to custom analytics endpoint
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/web-vitals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(metric),
        }).catch(console.error);
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric);
      }
    };

    // Track Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Track additional performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Track page load time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          sendToAnalytics({
            name: 'LOAD_TIME',
            value: loadTime,
            delta: loadTime,
            id: 'load-time',
            navigationType: navigation.type,
          });
        }
      });

      // Track memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        sendToAnalytics({
          name: 'MEMORY_USAGE',
          value: memoryUsage,
          delta: memoryUsage,
          id: 'memory-usage',
          navigationType: 'reload',
        });
      }
    }
    // Track Core Web Vitals
    const trackWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            console.log('CLS:', metric);
          });
          getFID((metric) => {
            console.log('FID:', metric);
          });
          getFCP((metric) => {
            console.log('FCP:', metric);
          });
          getLCP((metric) => {
            console.log('LCP:', metric);
          });
          getTTFB((metric) => {
            console.log('TTFB:', metric);
          });
        });
      }
    };

    trackWebVitals();
  }, []);

  return <>{children}</>;
};
