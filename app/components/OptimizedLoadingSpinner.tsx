import React from 'react';

interface OptimizedloadingspinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Optimizedloadingspinner({ className = '', children }: OptimizedloadingspinnerProps) {
  return (
    <div className={`OptimizedLoadingSpinner-component ${className}`}>
      {children}
    </div>
  );
}