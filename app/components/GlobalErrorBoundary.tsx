import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GlobalErrorBoundary({ className, children }: GlobalErrorBoundaryProps) {
  return (
    <div className={`globalerrorboundary-component ${className || ''}`}>
      {children}
    </div>
  );
}
