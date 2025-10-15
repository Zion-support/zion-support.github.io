import React from 'react';

interface AddashboardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Addashboard({ className = '', children }: AddashboardProps) {
  return (
    <div className={`AdDashboard-component ${className}`}>
      {children}
    </div>
  );
}