import { use Effect, use Callback } from 'react';
    const body = J SO N.stringify(metric);
    const url = '/api/analytics';
      navigator.send Beacon(url, body);
      fetch(url, { body, method: 'P OS T', keepalive: true }).catch(console.error);
    }
  }, []);
      // Monitor Core Web Vitals
      
          });
        }
      });
      observer.observe({ entry Types: ['navigation', 'paint', 'largest-contentful-paint'] });
      return () => observer.disconnect();
    }
  }, [report Web Vitals]);
  return { report Web Vitals };
};
