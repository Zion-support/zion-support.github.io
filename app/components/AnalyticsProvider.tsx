import React, { createContext, useContext, useEffect, ReactNode } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    // Initialize Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;
