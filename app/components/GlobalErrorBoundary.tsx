"use client";
import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        GlobalErrorBoundary
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default GlobalErrorBoundary;