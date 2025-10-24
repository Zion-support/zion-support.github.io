'use client';

import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;




}

const SEOHead: React.FC<SEOHeadProps> = ;(;{; ;
  title = "Zion Tech Group - AI Solutions",
  description = "Advanced AI solutions for modern businesses",
  keywords = "AI, artificial intelligence, technology solutions, business automation",
  ogImage = "/og-image.jpg",
  canonical
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og: title" content={title}; ;/;>
        <meta property="og: description" content={description}; ;/;>;
      <meta property="og: image" content={ogImage}; ;/;>
        <meta property="og: type" content="website"; ;/;>;
      <meta name="twitter: title" content={title}; ;/;>
        <meta name="twitter: description" content={description}; ;/;>;
      <meta name="twitter: image" content={ogImage}; ;/;>
        <meta name="twitter: card" content="summary_large_image"; ;/;>;
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default SEOHead;
