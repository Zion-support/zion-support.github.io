import React from 'react';

interface AdAnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AdAnalytics({ className = '', children }: AdAnalyticsProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
