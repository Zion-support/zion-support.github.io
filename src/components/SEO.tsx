import React from 'react';

interface SEOProps {
  className?: string;
}

const SEO: React.FC<SEOProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>SEO</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default SEO;
