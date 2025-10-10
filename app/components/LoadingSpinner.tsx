'use client';
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="spinner mb-4"></div>
        <p className="text-white">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;