'use client'
import React from 'react';

interface OptimizedImageProps {
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Optimized Image</h2>
      <p className="text-gray-600">This is a placeholder component for Optimized Image.</p>
    </div>
  );
};

export default OptimizedImage;
