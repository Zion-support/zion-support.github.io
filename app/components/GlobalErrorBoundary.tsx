'use client';
import React from 'react';

const GlobalErrorBoundary: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">GlobalErrorBoundary</h3>
      <p className="text-gray-600">This is a placeholder component for GlobalErrorBoundary.</p>
    </div>
  );
};

export default GlobalErrorBoundary;