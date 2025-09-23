import { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Web Vitals monitoring
    const vitals = {};
    
    getCLS((metric) => {
      vitals.CLS = metric.value;
      console.log('CLS:', metric);
    });
    
    getFID((metric) => {
      vitals.FID = metric.value;
      console.log('FID:', metric);
    });
    
    getFCP((metric) => {
      vitals.FCP = metric.value;
      console.log('FCP:', metric);
    });
    
    getLCP((metric) => {
      vitals.LCP = metric.value;
      console.log('LCP:', metric);
    });
    
    getTTFB((metric) => {
      vitals.TTFB = metric.value;
      console.log('TTFB:', metric);
    });

    setMetrics(vitals);

    // Performance API monitoring
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            console.log('Performance measure:', entry.name, entry.duration);
          }
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
          if (entry.entryType === 'paint') {
            console.log('Paint timing:', entry.name, entry.startTime);
          }
        }
      });
      
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    }

    // Error tracking
    const handleError = (event) => {
      console.error('JavaScript error:', event.error);
      // Send to analytics service
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: event.error?.message || 'Unknown error',
          fatal: false
        });
      }
    };

    const handleUnhandledRejection = (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      // Send to analytics service
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: event.reason?.message || 'Unhandled promise rejection',
          fatal: false
        });
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  // Development mode performance panel
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
        <div className="flex items-center gap-2 mb-2">
          <span>Performance Monitor</span>
          <button 
            onClick={() => setIsVisible(!isVisible)}
            className="text-blue-400 hover:text-blue-300"
          >
            {isVisible ? 'Hide' : 'Show'}
          </button>
        </div>
        {isVisible && (
          <div className="space-y-1">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="flex justify-between gap-4">
                <span>{key}:</span>
                <span className="text-green-400">{value?.toFixed(2) || 'N/A'}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}