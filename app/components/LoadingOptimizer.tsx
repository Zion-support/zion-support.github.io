import React from 'react';

interface LoadingOptimizerProps {
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({
  children,
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children || (
        <div className={`${sizeClasses[size]} border-2 border-cyan-400 border-t-transparent rounded-full animate-spin`}></div>
      )}
    </div>
  );
};

export default LoadingOptimizer;