<<<<<<< HEAD
import React from 'react';

interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default LoadingStates;
=======
'use client'

import React from 'react'

interface LoadingStatesProps {
  isLoading: boolean
  children: React.ReactNode
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className="loading-states">
        <div className="spinner"></div>
      </div>
    )
  }

  return <>{children}</>
}

export default LoadingStates
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
