import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  className?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title = 'Default Title',
  description = 'Default Description',
  className = '' 
}) => {
  return (
    <div className={`seo-head ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SEOHead;
