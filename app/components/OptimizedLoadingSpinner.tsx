<<<<<<< HEAD
import React from 'react';

interface OptimizedLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default OptimizedLoadingSpinner;
=======
'use client'

import React from 'react'

const OptimizedLoadingSpinner: React.FC = () => {
  return (
    <div className="optimized-loading-spinner">
      <div className="spinner"></div>
    </div>
  )
}

export default OptimizedLoadingSpinner
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
