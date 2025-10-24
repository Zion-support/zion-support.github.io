import React from 'react';
import Head from 'next/head';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = 'Default Title',
  description = 'Default Description',
  keywords = '',
  canonical = '',
  ogImage = ''
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Head>
  );
};

export default SEOEnhancer;