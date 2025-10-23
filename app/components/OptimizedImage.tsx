"use client";
import React from 'react';

interface OptimizedImageProps {
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        OptimizedImage
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default OptimizedImage;