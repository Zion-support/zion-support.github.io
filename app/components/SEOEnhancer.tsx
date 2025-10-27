import React from 'react';

interface SEOEnhancerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ children, title, description }) => {
  return (
    <div className="seo-enhancer">
      {title && <h1 className="sr-only">{title}</h1>}
      {description && <p className="sr-only">{description}</p>}
      {children}
    </div>
  );
};

export default SEOEnhancer;
