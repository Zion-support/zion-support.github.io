import React, { useEffect } from 'react';

const CoreWebVitals: React.FC = () => {
  useEffect(() => {
    // Import web-vitals library dynamically
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Measure Core Web Vitals
      getCLS((data) => {
        console.log('CLS:', data);
        // Send to analytics service
        sendToAnalytics('CLS', data.value);
      });

      getFID((data) => {
        console.log('FID:', data);
        sendToAnalytics('FID', data.value);
      });

      getFCP((data) => {
        console.log('FCP:', data);
        sendToAnalytics('FCP', data.value);
      });

      getLCP((data) => {
        console.log('LCP:', data);
        sendToAnalytics('LCP', data.value);
      });

      getTTFB((data) => {
        console.log('TTFB:', data);
        sendToAnalytics('TTFB', data.value);
      });
    }).catch((error) => {
      console.warn('Failed to load web-vitals:', error);
    });

    // Function to send metrics to analytics
    const sendToAnalytics = (metricName: string, value: number) => {
      // In a real implementation, you would send this to your analytics service
      console.log('Web Vital:', metricName, value);
      
      // Example: Send to Google Analytics
      // gtag('event', 'web_vital', {
      //   metric_name: metricName,
      //   metric_value: value,
      //   metric_rating: getMetricRating(metricName, value)
      // });
    };

    // Function to determine metric rating
    const getMetricRating = (metricName: string, value: number): string => {
      const thresholds = {
        CLS: { good: 0.1, poor: 0.25 },
        FID: { good: 100, poor: 300 },
        FCP: { good: 1800, poor: 3000 },
        LCP: { good: 2500, poor: 4000 },
        TTFB: { good: 800, poor: 1800 }
      };

      const threshold = thresholds[metricName as keyof typeof thresholds];
      if (!threshold) return 'unknown';

      if (value <= threshold.good) return 'good';
      if (value <= threshold.poor) return 'needs-improvement';
      return 'poor';
    };

  }, []);

  return null; // This component doesn't render anything
};

export default CoreWebVitals;
