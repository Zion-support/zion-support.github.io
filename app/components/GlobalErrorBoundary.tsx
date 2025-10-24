'use client'
import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Global Error Boundary</h2>
      <p className="text-gray-600">This is a placeholder component for Global Error Boundary.</p>
    </div>
  );
};

export default GlobalErrorBoundary;
