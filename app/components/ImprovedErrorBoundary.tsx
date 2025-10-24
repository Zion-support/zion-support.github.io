'use client'
import React from 'react';

interface ImprovedErrorBoundaryProps {
  className?: string;
}

const ImprovedErrorBoundary: React.FC<ImprovedErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Improved Error Boundary</h2>
      <p className="text-gray-600">This is a placeholder component for Improved Error Boundary.</p>
    </div>
  );
};

export default ImprovedErrorBoundary;
