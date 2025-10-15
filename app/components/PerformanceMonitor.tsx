import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  cls: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    const loadWebVitals = async () => {
      try {
        const { onCLS, onFCP, onLCP, onTTFB } = await import('web-vitals');
        
        onCLS((metric) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }));
          console.log('CLS:', metric);
        });
        
        onFCP((metric) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }));
          console.log('FCP:', metric);
        });
        
        onLCP((metric) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }));
          console.log('LCP:', metric);
        });
        
        onTTFB((metric) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          console.log('TTFB:', metric);
        });
        
        // FID is deprecated, using INP instead
        // onFID((metric) => {
        //   setMetrics(prev => ({ ...prev, fid: metric.value }));
        //   console.log('FID:', metric);
        // });
      } catch (error) {
        console.warn('Failed to load web-vitals:', error);
      }
    };

    loadWebVitals();

    // Monitor resource loading performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', entry);
        } else if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          if (resource.duration > 1000) {
            console.warn('Slow resource:', resource.name, resource.duration + 'ms');
          }
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Only show metrics in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs font-mono z-50">
      <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
      <div>FCP: {metrics.fcp?.toFixed(0) || 'N/A'}ms</div>
      <div>LCP: {metrics.lcp?.toFixed(0) || 'N/A'}ms</div>
      <div>TTFB: {metrics.ttfb?.toFixed(0) || 'N/A'}ms</div>
    </div>
  );
};

export default PerformanceMonitor;