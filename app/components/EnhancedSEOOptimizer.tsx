<<<<<<< HEAD
import React from 'react';

interface EnhancedSEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSEOOptimizer: React.FC<EnhancedSEOOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default EnhancedSEOOptimizer;
=======
'use client'

import React, { useEffect } from 'react'

const EnhancedSEOOptimizer: React.FC = () => {
  useEffect(() => {
    // SEO optimization logic
    console.log('SEO optimizer initialized')
  }, [])

  return null
}

export default EnhancedSEOOptimizer
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
