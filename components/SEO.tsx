import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

const defaultSEO = {
  title: 'Zion Tech Group - Leading Technology Solutions Provider',
  description: 'Comprehensive AI services, IT solutions, and micro SaaS platforms. Expert technology consulting with 24/7 support. Contact +1 302 464 0950',
  keywords: [
    'AI services',
    'IT solutions', 
    'micro SaaS',
    'technology consulting',
    'cloud infrastructure',
    'cybersecurity',
    'machine learning',
    'software development'
  ],
  image: 'https://ziontechgroup.com/og-image.jpg',
  url: 'https://ziontechgroup.com'
};

export const SEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};