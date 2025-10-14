'use client';
import React from 'react';

interface AdAnalyticsDashboardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AdAnalyticsDashboard({ children, className = '' }: AdAnalyticsDashboardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}