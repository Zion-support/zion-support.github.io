<<<<<<< HEAD
import React from 'react';

interface EnhancedLoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedLoadingStates: React.FC<EnhancedLoadingStatesProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default EnhancedLoadingStates;
=======
'use client'

import React from 'react'

interface LoadingStateProps {
  isLoading: boolean
  children: React.ReactNode
}

const EnhancedLoadingStates: React.FC<LoadingStateProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    )
  }

  return <>{children}</>
}

export default EnhancedLoadingStates
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
