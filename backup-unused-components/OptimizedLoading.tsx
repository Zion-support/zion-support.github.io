import React from 'react';

interface OptimizedLoadingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function OptimizedLoading({ className = '', children }: OptimizedLoadingProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}