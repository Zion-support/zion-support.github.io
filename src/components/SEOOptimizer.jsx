import React from 'react';

export const defaultSEO = {
  title: 'Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services',
  description: 'Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.',
  keywords: 'AI solutions, quantum computing, cybersecurity, digital transformation, enterprise services',
  author: 'Zion Tech Group',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8'
};

export const SEOOptimizer = ({ 
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  author = defaultSEO.author,
  robots = defaultSEO.robots,
  viewport = defaultSEO.viewport,
  charset = defaultSEO.charset
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="viewport" content={viewport} />
      <meta charSet={charset} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <link rel="canonical" href="https://ziontechgroup.com" />
    </>
  );
};

export default SEOOptimizer;