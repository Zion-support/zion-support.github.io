import React from 'react';

interface AnalyticsProviderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AnalyticsProvider({ className = '', children }: AnalyticsProviderProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}