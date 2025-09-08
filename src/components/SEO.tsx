import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Zion Holdings - Technology Solutions",
  description = "Leading provider of AI, cybersecurity, and cloud solutions",
  keywords = "AI, cybersecurity, cloud, technology, solutions",
  ogImage,
  canonicalUrl
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
    </Helmet>
  );
};