'use client';
import React from 'react';

interface OptimizedLoadingSpinnerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function OptimizedLoadingSpinner({ children, className = '' }: OptimizedLoadingSpinnerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}