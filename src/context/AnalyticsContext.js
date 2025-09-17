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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-60a7
export const useAnalytics = () => useContext(AnalyticsContext);
