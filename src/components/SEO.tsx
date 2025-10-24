import React from 'react';

interface SEOProps {
  className?: string;
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOProps> = ({ className = '', children }) => {
  return (
    <div className={`seo ${className}`}>
      {children}
    </div>
  );
};

export default SEO;