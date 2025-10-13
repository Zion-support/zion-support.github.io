import React from 'react';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  React.useEffect(() => {
    // Basic analytics setup
    if (typeof window !== 'undefined') {
      console.log('Analytics initialized');
    }
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;
