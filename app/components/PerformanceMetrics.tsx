'use client';
import React from 'react';

interface PerformanceMetricsProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PerformanceMetrics({ children, className = '' }: PerformanceMetricsProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}