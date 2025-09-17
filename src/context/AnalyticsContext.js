// Analytics context
import React, { createContext, useContext } from 'react';
const AnalyticsContext = createContext();
export const AnalyticsProvider = ({ children }) => {
  const value = {
    track: () => {},
    page: () => {}
  };
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
export const useAnalytics = () => useContext(AnalyticsContext);
