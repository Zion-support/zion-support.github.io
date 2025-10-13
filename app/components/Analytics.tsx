import React from 'react';

interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Analytics({ className = '', children }: AnalyticsProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}