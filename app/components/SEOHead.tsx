import React from 'react';

interface SEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ className = '', children }) => {
  return (
    <div className={`seohead ${className}`}>
      {children}
    </div>
  );
};

export default SEOHead;