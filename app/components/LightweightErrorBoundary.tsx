import React from 'react';

interface LightweightErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LightweightErrorBoundary({ className = '', children }: LightweightErrorBoundaryProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
