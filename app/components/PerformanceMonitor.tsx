<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
  memoryUsage?: number;
  interactionToNextPaint?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  const updateMetrics = useCallback((name: string, value: number) => {
    setMetrics(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Measure Core Web Vitals
    onCLS((metric) => {
      updateMetrics('cumulativeLayoutShift', metric.value);
    });

    onINP((metric) => {
      updateMetrics('interactionToNextPaint', metric.value);
    });

    onFCP((metric) => {
      updateMetrics('firstContentfulPaint', metric.value);
    });

    onLCP((metric) => {
      updateMetrics('largestContentfulPaint', metric.value);
    });

    onTTFB((metric) => {
      updateMetrics('timeToFirstByte', metric.value);
    });

    // Measure page load time
    const loadTime = performance.now();
    updateMetrics('loadTime', loadTime);

    // Measure memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      updateMetrics('memoryUsage', memory.usedJSHeapSize / 1024 / 1024); // Convert to MB
    }

    // Show performance monitor in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    // Auto-hide after 5 seconds in production
    if (process.env.NODE_ENV === 'production') {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [updateMetrics]);

  // Don't render in production unless there's an issue
  if (process.env.NODE_ENV === 'production' && !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-cyan-400 font-semibold">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        {metrics.loadTime && (
          <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
        )}
        {metrics.firstContentfulPaint && (
          <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
        )}
        {metrics.largestContentfulPaint && (
          <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
        )}
        {metrics.interactionToNextPaint && (
          <div>INP: {metrics.interactionToNextPaint.toFixed(2)}ms</div>
        )}
        {metrics.cumulativeLayoutShift && (
          <div>CLS: {metrics.cumulativeLayoutShift.toFixed(4)}</div>
        )}
        {metrics.timeToFirstByte && (
          <div>TTFB: {metrics.timeToFirstByte.toFixed(2)}ms</div>
        )}
        {metrics.memoryUsage && (
          <div>Memory: {metrics.memoryUsage.toFixed(2)}MB</div>
        )}
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react;'
interface PerformanceMetrics {
  cls: number | null;
  fcp: number | null;}
  lcp: number | null;}
  ttfb: number | null;}
  loadTime: number | null;}
}
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    loadTime: null
  });
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') {''
      return;
    }
    // Simulate performance metrics for development
    const simulateMetrics = () => {
      setMetrics({)
        cls: Math.random() * 0.1,
        fcp: Math.random() * 1000 + 500,}
        lcp: Math.random() * 2000 + 1000,}
        ttfb: Math.random() * 500 + 200,}
        loadTime: Math.random() * 3000 + 1000}
      });
    };
    // Simulate metrics after a delay
    const timer = setTimeout(simulateMetrics, 2000);
    return () => clearTimeout(timer);
  }, []);
  // Don't render anything in production''
  if (process.env.NODE_ENV === 'production') {''
    return null;
  }
  return (
    <div className="fixed bottom-4 left-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">""
      <h3 className="font-bold mb-2">Performance Metrics</h3>""
      <div className="space-y-1 text-sm">""
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}</div>''
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}</div>''
        <div>CLS: {metrics.cls ? `${metrics.cls.toFixed(4)}` : 'Loading...'}</div>''
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>''
        <div>Load Time: {metrics.loadTime ? `${metrics.loadTime.toFixed(2)}ms` : 'Loading...'}</div>''
>>>>>>> main
      </div>
    </div>
  );
};
export default PerformanceMonitor;
=======

<<<<<<< HEAD
export default PerformanceMonitor;
=======
import React, { useEffect, useState } from 'react',
      import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals',
      interface PerformanceMetrics {},
      CLS: number | null,
      INP: number | null,
      FCP: number | null,
      LCP: number | null,
      TTFB: number | null
    },
    {}
const PerformanceMonitor: React.FC = () => {},
      const [metrics, setMetrics] = useState<PerformanceMetrics>({},)
      CLS: null,
      INP: null,
      FCP: null,
      LCP: null,
      TTFB: null
  }),
      useEffect(() => {},
      const handleMetric = (metric: any) => {},
      setMetrics(prev => ({};)
        ...prev;
        [metric.name]: metric.value
      }));

      // Send to analytics (replace with your analytics service)
      if (typeof window !== 'undefined' && (window as any).gtag) {};
        (window as any).gtag('event', metric.name, {},)
      event_category: 'Web Vitals',
      value: Math.round(metric.value),
      event_label: metric.id,
      non_interaction: true})
    },
    {}
    };

    // Measure Core Web Vitals
    onCLS(handleMetric),
      onINP(handleMetric),
      onFCP(handleMetric),
      onLCP(handleMetric),
      onTTFB(handleMetric);

    // Performance observer for additional metrics
    if ($1) {}
  // If body
}
      const observer = new PerformanceObserver((list) => {};
        for (const entry of list.getEntries()) {};
          if (entry.entryType === 'navigation') {};
            // Navigation timing metrics collected
          }
    },
    {}
      }),
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })
    },
    {}
    // Memory usage monitoring
    if ('memory' in performance) {};
      // Memory usage metrics collected
    };
  }, []);

  // Development mode: metrics available for debugging
  useEffect(() => {},
      if (process.env.NODE_ENV === 'development') {};
      // Performance metrics available for debugging
    };
  }, [metrics]),
      return null; // This component doesn't render anything'
},
      export default PerformanceMonitor;

import React from 'react';;';
import SEOHead from './components/SEOHead';
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";
        description="Professional components solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
};
;
export default ComponentsPage;'";'";

>>>>>>> main
>>>>>>> main
