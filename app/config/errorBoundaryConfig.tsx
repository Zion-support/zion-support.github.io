'use client'
import React from 'react';

interface errorBoundaryConfigProps {
  className?: string;
}

const errorBoundaryConfig: React.FC<errorBoundaryConfigProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Error Boundary Config</h2>
      <p className="text-gray-600">This is a placeholder component for Error Boundary Config.</p>
    </div>
  );
};

export default errorBoundaryConfig;
