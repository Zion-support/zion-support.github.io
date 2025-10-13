import React from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AnalyticsContext.Provider value={{}}>
        {children}
      </AnalyticsContext.Provider>
    );
};

export default AnalyticsProvider;