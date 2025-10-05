import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of advanced AI and IT solutions for enterprise clients"
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};

export default SEO;
