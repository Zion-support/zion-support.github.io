'use client';
import React from 'react';

interface EnhancedSEOOptimizerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedSEOOptimizer({ children, className = '' }: EnhancedSEOOptimizerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}