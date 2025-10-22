import React from 'react';

interface ImageOptimizerProps {
  className?: string;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>ImageOptimizer</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default ImageOptimizer;