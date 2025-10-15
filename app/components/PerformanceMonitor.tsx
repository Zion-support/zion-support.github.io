<<<<<<< HEAD
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

=======
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
