"use client";
import React from 'react';

interface LazyImageProps {
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        LazyImage
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default LazyImage;