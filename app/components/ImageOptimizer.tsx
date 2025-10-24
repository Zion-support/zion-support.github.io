'use client';
import React from 'react';
<<<<<<< HEAD
interface ImageOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}
const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
=======

interface ImageOptimizerProps {
  className?: string;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>ImageOptimizer</h2>
      <p>ImageOptimizer component for enhanced functionality.</p>
    </div>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
export default ImageOptimizer;