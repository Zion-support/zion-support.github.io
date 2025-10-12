import React, { useEffect } from 'react';

interface AnalyticsProps {
  measurementId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ measurementId = 'GA_MEASUREMENT_ID' }) => {
  useEffect(() => {
    const initAnalytics = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', measurementId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };
    initAnalytics();
  }, [measurementId]);

  return null; // This component doesn't render anything
};

export default Analytics;