import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'Zion Tech Group - Leading provider of AI-powered solutions, automation tools, and digital transformation services.',
  keywords = 'AI solutions, automation, digital transformation, software development, technology consulting',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEO;