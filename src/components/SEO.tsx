import React from 'react';
import Head from 'next/head';

interface SEOProps {
title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC < SEOProps> = ({
  title,
  description,
  keywords = '',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website'
})  => {

  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title
} | ${siteName}`;
  const fullUrl = url ? `https://ziontechgroup.com${url}` : 'https://ziontechgroup.com';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={fullUrl} />
    </Head>
  );
};

export default SEO;