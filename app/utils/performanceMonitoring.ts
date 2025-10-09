import { useCallback } from 'react';

export const useWebVitals = () => {
  const reportWebVitals = useCallback((metric: string, value: number) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Web Vital - ${metric}:`, value);
    }

    // Send to analytics service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: metric,
          value: Math.round(value),
          non_interaction: true,
        });
      }

      // Example: Send to custom analytics
      if (typeof window !== 'undefined' && 'navigator' in window) {
        fetch('/api/analytics/web-vitals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            metric,
            value,
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent,
          }),
        }).catch(console.error);
      }
    }
  }, []);

  return { reportWebVitals };
};

export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  const duration = end - start;
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`Performance - ${name}:`, `${duration.toFixed(2)}ms`);
  }
  
  return duration;
};

export const measureAsyncPerformance = async (name: string, fn: () => Promise<any>) => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  const duration = end - start;
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`Performance - ${name}:`, `${duration.toFixed(2)}ms`);
  }
  
  return { result, duration };
};