<<<<<<< HEAD
import React from 'react';

interface EnhancedLoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default EnhancedLoading;
=======
'use client'

import React from 'react'

const EnhancedLoading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  )
}

export default EnhancedLoading
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
