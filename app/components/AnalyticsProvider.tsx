import React from 'react';

interface AnalyticsProviderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AnalyticsProvider({ className = '', children, ...props }: AnalyticsProviderProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
