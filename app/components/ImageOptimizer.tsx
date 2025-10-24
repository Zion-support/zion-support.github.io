'use client'
import React from 'react';

interface ImageOptimizerProps {
  className?: string;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Image Optimizer</h2>
      <p className="text-gray-600">This is a placeholder component for Image Optimizer.</p>
    </div>
  );
};

export default ImageOptimizer;
