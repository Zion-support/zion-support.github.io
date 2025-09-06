import React from 'react';

interface SEOProps {
  className?: string;
}

const SEO: React.FC<SEOProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SEO</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SEO;