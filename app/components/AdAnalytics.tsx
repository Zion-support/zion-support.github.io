import React from 'react';

interface AdanalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Adanalytics({ className = '', children }: AdanalyticsProps) {
  return (
    <div className={`AdAnalytics-component ${className}`}>
      {children}
    </div>
  );
}