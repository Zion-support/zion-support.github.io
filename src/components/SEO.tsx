import React from 'react';

interface SEOProps {
  className?: string;
}

export const SEO: React.FC<SEOProps> = ({
  className = ''
}) => {
  return (
    <div className={`seo ${className}`}>
      <h2>SEO</h2>
      <p>Component placeholder - needs implementation</p>
    </div>
  );
};

export default SEO;
