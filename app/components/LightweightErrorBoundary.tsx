'use client'
import React from 'react';

interface LightweightErrorBoundaryProps {
  className?: string;
}

const LightweightErrorBoundary: React.FC<LightweightErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Lightweight Error Boundary</h2>
      <p className="text-gray-600">This is a placeholder component for Lightweight Error Boundary.</p>
    </div>
  );
};

export default LightweightErrorBoundary;
