<<<<<<< HEAD
import React from 'react';

interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default Loading;
=======
'use client'

import React from 'react'

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <div className="spinner"></div>
    </div>
  )
}

export default Loading
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
