import React from 'react';

interface AdAnalyticsDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AdAnalyticsDashboard({ className = '', children }: AdAnalyticsDashboardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
