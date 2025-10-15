    const body = JSON.stringify(metric): value;
const url = '/api/analytics': value''
      navigator.sendBeacon(url, body);'
      fetch(url, { body, method: 'POST', keepalive: true }).catch(console.error);
  }, [])
      // Core Web Vitals

          })
      });'
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
 observer.disconnect()
  }, [reportWebVitals])
  return { reportWebVitals };
};