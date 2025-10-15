import React from 'react';

interface LightweighterrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Lightweighterrorboundary({ className = '', children }: LightweighterrorboundaryProps) {
  return (
    <div className={`LightweightErrorBoundary-component ${className}`}>
      {children}
    </div>
  );
}