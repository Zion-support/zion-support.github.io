"use client";
import React from 'react';

interface ErrorHandlerProps {
  className?: string;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        ErrorHandler
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default ErrorHandler;