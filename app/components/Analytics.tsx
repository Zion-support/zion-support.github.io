import React from 'react';
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Analytics({ className = '', children, ...props }: AnalyticsProps) {
  return (
    <div className={`analytics-component ${className}`} {...props}>
      {children}
    </div>
  );
}
