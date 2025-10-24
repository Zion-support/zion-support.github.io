import React from 'react';

interface SEOProps {
  className?: string;
}

const SEO: React.FC<SEOProps> = ({ className = '' }) => {
  return (
    <div className={`seo ${className}`}>
      <h2>S E O</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default SEO;