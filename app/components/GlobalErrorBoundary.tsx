import React from 'react';

interface GlobalerrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Globalerrorboundary({ className = '', children }: GlobalerrorboundaryProps) {
  return (
    <div className={`GlobalErrorBoundary-component ${className}`}>
      {children}
    </div>
  );
}