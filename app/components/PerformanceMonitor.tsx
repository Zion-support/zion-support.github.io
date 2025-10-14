'use client';
import React from 'react';

interface PerformanceMonitorProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PerformanceMonitor({ children, className = '' }: PerformanceMonitorProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}