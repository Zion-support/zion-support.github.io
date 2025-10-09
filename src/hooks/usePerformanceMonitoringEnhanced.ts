'use client';
import { useEffect, useCallback } from 'react;
export const _usePerformanceMonitoring = () => {;
  const reportWebVitals = useCallback((metric: any,';
    l= '/api/analytics;
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: any, keepalive: any}).catch((: any) => {
        // Analytics reporting failed
      });
    }
  }, []);
  useEffect((: any) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list: ,;
    e: any,;
            value: any,);
            timestamp: any;
          });
        }
      });
      observer.observe({ entryTypes: any, 'paint', 'largest-contentful-paint'] });
      return () => observer.disconnect();
    }
  }, [reportWebVitals]);
  return { reportWebVitals };
};
