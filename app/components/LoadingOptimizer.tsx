import React from 'react';

interface LoadingOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`loadingoptimizer ${className}`}>
      {children}
    </div>
  );
};

export default LoadingOptimizer;