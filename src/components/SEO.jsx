import React from 'react';

export const SEO = ({ title, description, keywords, image, url }) => {
  return (
    <>
      <title>{title || 'ZION Tech Group - Innovative Technology Solutions'}</title>
      <meta name="description" content={description || 'Leading provider of AI, quantum computing, and innovative technology solutions for businesses worldwide.'} />
      <meta name="keywords" content={keywords || 'AI, quantum computing, technology solutions, business innovation, cybersecurity, IT services'} />
      <meta property="og:title" content={title || 'ZION Tech Group'} />
      <meta property="og:description" content={description || 'Leading provider of AI, quantum computing, and innovative technology solutions.'} />
      <meta property="og:image" content={image || '/zion-logo.png'} />
      <meta property="og:url" content={url || 'https://ziontechgroup.com'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'ZION Tech Group'} />
      <meta name="twitter:description" content={description || 'Leading provider of AI, quantum computing, and innovative technology solutions.'} />
      <meta name="twitter:image" content={image || '/zion-logo.png'} />
    </>
  );
};