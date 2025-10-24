import React from 'react';
import Head from 'next/head';

interface DefaultSEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const DefaultSEO: React.FC<DefaultSEOProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Innovative AI, blockchain, and 5G solutions for modern businesses.',
  canonical,
  ogImage = '/og-image.jpg'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default DefaultSEO;
