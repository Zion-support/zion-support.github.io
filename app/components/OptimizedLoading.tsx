<<<<<<< HEAD
import React from 'react';

interface OptimizedLoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default OptimizedLoading;
=======
'use client'

import React from 'react'

const OptimizedLoading: React.FC = () => {
  return (
    <div className="optimized-loading">
      <div className="spinner"></div>
    </div>
  )
}

export default OptimizedLoading
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
