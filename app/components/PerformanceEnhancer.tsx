'use client';
import React from 'react';

interface PerformanceEnhancerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PerformanceEnhancer({ children, className = '' }: PerformanceEnhancerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}