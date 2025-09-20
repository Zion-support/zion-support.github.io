import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI & Technology Solutions',
  description = 'Leading provider of AI, quantum computing, and innovative technology solutions',
  keywords = ['AI', 'technology', 'quantum computing'],
  ogImage = '/images/og-image.jpg',
  canonical = 'https://ziontechgroup.com'
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={canonical} />
    </>
  );
};

export { SEO };
export default SEO;