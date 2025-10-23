"use client";
import React from 'react';

interface ImageOptimizerProps {
  className?: string;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        ImageOptimizer
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default ImageOptimizer;