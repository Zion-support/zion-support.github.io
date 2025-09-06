import React from 'react';

interface ImageOptimizerProps {
  className?: string;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ImageOptimizer</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ImageOptimizer;