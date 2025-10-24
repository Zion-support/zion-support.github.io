<<<<<<< HEAD
import React from 'react';

interface PerformanceOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default PerformanceOptimizer;
=======
'use client'

import React, { useEffect } from 'react'

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Performance optimization logic
    console.log('Performance optimizer initialized')
  }, [])

  return null
}

export default PerformanceOptimizer
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
