<<<<<<< HEAD
import React from 'react';

interface EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default EnhancedSEO;
=======
'use client'

import React from 'react'

interface SEOProps {
  title?: string
  description?: string
}

const EnhancedSEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </>
  )
}

export default EnhancedSEO
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
