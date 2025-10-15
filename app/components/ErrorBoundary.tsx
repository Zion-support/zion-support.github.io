import React from 'react';

interface ErrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Errorboundary({ className = '', children }: ErrorboundaryProps) {
  return (
    <div className={`ErrorBoundary-component ${className}`}>
      {children}
    </div>
  );
}