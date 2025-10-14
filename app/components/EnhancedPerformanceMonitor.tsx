'use client';
import React from 'react';

interface EnhancedPerformanceMonitorProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedPerformanceMonitor({ children, className = '' }: EnhancedPerformanceMonitorProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}