'use client';
import React from 'react';

interface LoadingOptimizerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function LoadingOptimizer({ children, className = '' }: LoadingOptimizerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}