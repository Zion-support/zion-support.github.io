'use client';
import React from 'react';

interface PerformanceDashboardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PerformanceDashboard({ children, className = '' }: PerformanceDashboardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}