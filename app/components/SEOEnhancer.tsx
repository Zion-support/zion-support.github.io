<<<<<<< HEAD
import React from 'react';

interface SEOEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default SEOEnhancer;
=======
'use client'

import React, { useEffect } from 'react'

const SEOEnhancer: React.FC = () => {
  useEffect(() => {
    // SEO enhancement logic
    console.log('SEO enhancer initialized')
  }, [])

  return null
}

export default SEOEnhancer
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
