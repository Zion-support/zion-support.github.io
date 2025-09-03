import React from 'react';
import Head from 'next/head';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Leading technology solutions and AI services for modern businesses',
  keywords = 'technology, AI, software development, IT services',
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEOEnhancer;