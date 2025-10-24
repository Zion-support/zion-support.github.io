'use client'
import React from 'react';

interface ErrorFallbackProps {
  className?: string;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Error Fallback</h2>
      <p className="text-gray-600">This is a placeholder component for Error Fallback.</p>
    </div>
  );
};

export default ErrorFallback;
