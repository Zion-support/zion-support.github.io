import React from 'react';

interface PerformanceDashboardProps {
  className?: string;
}

export default function PerformanceDashboard({ className }: PerformanceDashboardProps) {
  return (
    <div className={className}>
      <h1>PerformanceDashboard</h1>
      <p>Component content</p>
    </div>
  );
}