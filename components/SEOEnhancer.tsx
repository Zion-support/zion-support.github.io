import React from 'react';
import Head from 'next/head';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Transform your business with our comprehensive suite of AI services, micro SaaS solutions, cloud infrastructure, and cutting-edge technology innovations.',
  keywords = 'AI services, micro SaaS, cloud solutions, IT services, cybersecurity, data analytics, technology consulting',
  ogImage = '/og-image.jpg',
  url = 'https://ziontechgroup.com'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEOEnhancer;