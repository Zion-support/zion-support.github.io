<<<<<<< HEAD
import React from 'react';

interface FuturisticLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default FuturisticLoader;
=======
'use client'

import React from 'react'

const FuturisticLoader: React.FC = () => {
  return (
    <div className="futuristic-loader">
      <div className="loader-ring"></div>
    </div>
  )
}

export default FuturisticLoader
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
