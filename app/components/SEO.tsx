import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <div className="seo-component">
      <h2>SEO</h2>
      <p>This component is under construction.</p>
      {title && <p>Title: {title}</p>}
      {description && <p>Description: {description}</p>}
    </div>
  );
};

export default SEO;
