import React from 'react';

interface PerformancedashboardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Performancedashboard({ className = '', children }: PerformancedashboardProps) {
  return (
    <div className={`PerformanceDashboard-component ${className}`}>
      {children}
    </div>
  );
}