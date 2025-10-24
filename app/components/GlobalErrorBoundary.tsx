'use client';
import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>GlobalErrorBoundary</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default GlobalErrorBoundary;
