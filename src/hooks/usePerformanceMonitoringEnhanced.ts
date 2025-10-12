import { useEffect, useCallback } from 'react';
    const body = JSON.stringify(metric);
    const url = '/api/analytics';
      navigator.sendBeacon(url, body);
      fetch(url, { body, method: 'POST', keepalive: true }).catch(console.error);
    }
  }, []);
      // Monitor Core Web Vitals
      
          });
        }
      });
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
      return () => observer.disconnect();
    }
  }, [reportWebVitals]);
  return { reportWebVitals };
};
