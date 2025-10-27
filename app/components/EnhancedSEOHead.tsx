
import React from 'react';

interface SEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({ className = '', children }) => {
  return (
    <div className={`seo-head ${className}`}>
      {children}
    </div>
  );
};

export default SEOHead;
