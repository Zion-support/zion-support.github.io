'use client';

import React from 'react';

interface SEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  className = '',
  children 
}) => {
  return (
    <div className={`seohead-component ${className}`}>
      {children}
    </div>
  );
};

SEOHead.displayName = 'SEOHead';

export default SEOHead;