'use client';
import React from 'react';

interface PerformanceOptimizerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PerformanceOptimizer({ children, className = '' }: PerformanceOptimizerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}