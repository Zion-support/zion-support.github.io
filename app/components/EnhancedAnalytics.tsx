import React from 'react';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  return (
    <div className="analytics-provider">
      {children}
    </div>
  );
};
