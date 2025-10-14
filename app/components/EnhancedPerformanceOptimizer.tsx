'use client';
import React from 'react';

interface EnhancedPerformanceOptimizerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedPerformanceOptimizer({ children, className = '' }: EnhancedPerformanceOptimizerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}