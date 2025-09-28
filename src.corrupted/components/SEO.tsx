import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  return (
    <div className="seo">
      <h2>SEO Component</h2>
      <p>SEO optimization component</p>
    </div>
  );
};

export default SEO;
