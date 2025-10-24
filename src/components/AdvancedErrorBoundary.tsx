import React from 'react';

interface AdvancedErrorBoundaryProps {
  className?: string;
}

export default function AdvancedErrorBoundary({ className }: AdvancedErrorBoundaryProps) {
  return (
    <div className={className}>
      <h1>AdvancedErrorBoundary</h1>
      <p>Component content</p>
    </div>
  );
}