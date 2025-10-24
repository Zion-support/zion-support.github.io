<<<<<<< HEAD
import React from 'react';

interface LoadingOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default LoadingOptimizer;
=======
'use client'

import React from 'react'

const LoadingOptimizer: React.FC = () => {
  return (
    <div className="loading-optimizer">
      <div className="optimized-spinner"></div>
    </div>
  )
}

export default LoadingOptimizer
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
