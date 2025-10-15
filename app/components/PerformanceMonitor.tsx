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
      </div>
    </div>
  );
};
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
