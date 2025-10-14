'use client';
import React from 'react';

interface SEOOptimizerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SEOOptimizer({ children, className = '' }: SEOOptimizerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}