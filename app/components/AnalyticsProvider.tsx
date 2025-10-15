import React from 'react';

interface AnalyticsproviderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Analyticsprovider({ className = '', children }: AnalyticsproviderProps) {
  return (
    <div className={`AnalyticsProvider-component ${className}`}>
      {children}
    </div>
  );
}