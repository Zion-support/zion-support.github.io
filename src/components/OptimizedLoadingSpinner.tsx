import React from 'react';

interface OptimizedLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function OptimizedLoadingSpinner({ className = '', children }: OptimizedLoadingSpinnerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}