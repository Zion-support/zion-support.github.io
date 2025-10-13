import React, { useEffect } from 'react';

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
    console.log('Analytics initialized');
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;