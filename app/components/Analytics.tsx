import React, { useEffect } from 'react';

interface AnalyticsProps {
  children: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
    console.log('Analytics initialized');
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    console.log('Event tracked:', eventName, parameters);
  };

  const trackPageView = (pageName: string) => {
    console.log('Page view tracked:', pageName);
  };

  const trackConversion = (conversionId: string, value?: number) => {
    console.log('Conversion tracked:', conversionId, value);
  };

  return (
    <div>
      {children}
    </div>
  );
};

export default Analytics;