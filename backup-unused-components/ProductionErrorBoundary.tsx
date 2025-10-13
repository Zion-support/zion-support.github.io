import React from 'react';

interface ProductionErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ProductionErrorBoundary({ className = '', children }: ProductionErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}