import React, { createContext, useContext, ReactNode } from "react";

type AnalyticsContextType = Record<string, unknown>;

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export const AnalyticsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AnalyticsContext.Provider value={{}}>
      {children}
    </AnalyticsContext.Provider>
  );
};