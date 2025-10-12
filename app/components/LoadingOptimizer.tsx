import React from 'react';

interface LoadingOptimizerProps {
  children?: React.ReactNode;
  className?: string;
}

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default LoadingOptimizer;
