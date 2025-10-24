<<<<<<< HEAD
import React from 'react';

interface MobileOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default MobileOptimizer;
=======
'use client'

import React, { useEffect } from 'react'

const MobileOptimizer: React.FC = () => {
  useEffect(() => {
    // Mobile optimization logic
    console.log('Mobile optimizer initialized')
  }, [])

  return null
}

export default MobileOptimizer
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
