<<<<<<< HEAD
import { useEffect, useCallback } from 'react'

export const usePerformanceMonitoring = () => {
  const reportWebVitals = useCallback((metric: any) => {
    const body = JSON.stringify(metric)
    const url = '/api/analytics'

    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body)
    } else {
      fetch(url, { body, method: 'POST', keepalive: true }).catch(console.error)
    }
  }, [])
=======
import { useEffect, useCallback } from 'react';

export const usePerformanceMonitoring = () => {
  const reportWebVitals = useCallback((metric: any) => {
    const body = JSON.stringify(metric);
    const url = '/api/analytics';

    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: 'POST', keepalive: true }).catch(console.error);
    }
  }, []);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f5eb

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          reportWebVitals({
            name: entry.name,
            value: entry.startTime,
            timestamp: Date.now()
<<<<<<< HEAD
          })
        }
      })

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })

      return () => observer.disconnect()
    }
  }, [reportWebVitals])

  return { reportWebVitals }
}
=======
          });
        }
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

      return () => observer.disconnect();
    }
  }, [reportWebVitals]);

  return { reportWebVitals };
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f5eb
