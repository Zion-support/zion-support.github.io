import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children
}) => {
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Google Analytics initialization
      if (window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    }
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;