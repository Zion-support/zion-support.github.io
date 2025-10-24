import React from 'react';

interface SEOHeadWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

export const SEOHeadWrapper: React.FC<SEOHeadWrapperProps> = ({ className = '', children }) => {
  return (
    <div className={`seoheadwrapper ${className}`}>
      {children}
    </div>
  );
};

export default SEOHeadWrapper;