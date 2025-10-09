'use client';
export         if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: 'POST', keepalive: true }).catch(() => {
        // Analytics reporting failed;
      });
    }
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals;
              }
      });
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
      return () => observer.disconnect();
    }
  }, [reportWebVitals]);
  return { reportWebVitals }
}