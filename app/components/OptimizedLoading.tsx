import React from 'react';

interface OptimizedloadingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Optimizedloading({ className = '', children }: OptimizedloadingProps) {
  return (
    <div className={`OptimizedLoading-component ${className}`}>
      {children}
    </div>
  );
}