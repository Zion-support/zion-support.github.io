'use client'
import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Error Boundary</h2>
      <p className="text-gray-600">This is a placeholder component for Error Boundary.</p>
    </div>
  );
};

export default ErrorBoundary;
