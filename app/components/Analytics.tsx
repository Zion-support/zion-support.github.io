import React, { useEffect } from 'react';

interface AnalyticsProps {
  measurementId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ measurementId = 'GA_MEASUREMENT_ID' }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      (window as Window & { gtag: Function }).gtag = (window as Window & { gtag: Function }).gtag || function() {
        ((window as Window & { gtag: Function }).gtag.q = (window as Window & { gtag: Function }).gtag.q || []).push(arguments);
      };

      (window as Window & { gtag: Function }).gtag('js', new Date());
      (window as Window & { gtag: Function }).gtag('config', measurementId);
    }
  }, [measurementId]);

  return null;
};

export default Analytics;