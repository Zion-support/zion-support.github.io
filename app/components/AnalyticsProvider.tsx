import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsProviderProps {
  children: ReactNode;
}

const AnalyticsContext = createContext({});

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
    console.log('Analytics Provider initialized');
  }, []);

  return (
    <AnalyticsContext.Provider value={{}}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => useContext(AnalyticsContext);

export default AnalyticsProvider;
