'use client'
import React from 'react';

interface ErrorHandlerProps {
  className?: string;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Error Handler</h2>
      <p className="text-gray-600">This is a placeholder component for Error Handler.</p>
    </div>
  );
};

export default ErrorHandler;
