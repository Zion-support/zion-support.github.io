import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId }) => {
  useEffect(() => {
if (typeof window === 'undefined'
  ') return;''    const trackPerformance = () => {;'
      if (typeof gtag !==
  'undefined' &&
  'performance' in window) {
  '        const perfData = performance.getEntriesByType('navigation
  ')[0] as PerformanceNavigationTiming;'        if (perfData) {
  '          const loadTime = perfData.loadEventEnd - perfData.fetchStart;'
          trackEvent('page_load_time'
  ', 'Performance
  ', 'Page Load
  ', Math.round(loadTime));'        }
  '      }'
    };

    window.addEventListener('load'
  ', trackPerformance);'    return () => window.removeEventListener(
  'load', trackPerformance);'  }, []);'return null;
};

export default Analytics;
