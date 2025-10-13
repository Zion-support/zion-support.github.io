import React from 'react';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  return (
    <div className="analytics-provider">
      {children}
    </div>
  );
}