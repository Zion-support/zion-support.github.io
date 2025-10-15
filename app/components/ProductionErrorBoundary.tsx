import React from 'react';

interface ProductionerrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Productionerrorboundary({ className = '', children }: ProductionerrorboundaryProps) {
  return (
    <div className={`ProductionErrorBoundary-component ${className}`}>
      {children}
    </div>
  );
}