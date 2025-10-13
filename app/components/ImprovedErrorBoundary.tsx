import React from 'react';

interface ImprovedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedErrorBoundary({ className = '', children }: ImprovedErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}