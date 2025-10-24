'use client';
import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>GlobalErrorBoundary</h2>
      <p>GlobalErrorBoundary component for enhanced functionality.</p>
    </div>
  );
};

export default GlobalErrorBoundary;