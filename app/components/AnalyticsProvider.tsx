import React from 'react';

interface AnalyticsProviderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AnalyticsProvider({ className = '', children, ...props }: AnalyticsProviderProps) {
  return (
    <div className={`analytics-provider-component ${className}`} {...props}>
      {children}
    </div>
  );
}