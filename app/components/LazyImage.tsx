'use client'
import React from 'react';

interface LazyImageProps {
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Lazy Image</h2>
      <p className="text-gray-600">This is a placeholder component for Lazy Image.</p>
    </div>
  );
};

export default LazyImage;
