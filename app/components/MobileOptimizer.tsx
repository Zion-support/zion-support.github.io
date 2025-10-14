'use client';
import React from 'react';

interface MobileOptimizerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function MobileOptimizer({ children, className = '' }: MobileOptimizerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}