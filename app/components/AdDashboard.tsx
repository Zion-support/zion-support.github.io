import React from 'react';

interface AdDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AdDashboard({ className = '', children }: AdDashboardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
