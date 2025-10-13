import React from 'react';

interface PerformanceDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceDashboard({ className = '', children }: PerformanceDashboardProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}