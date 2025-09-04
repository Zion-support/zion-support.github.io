import React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

export default function SEOEnhancer({
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses.',
  keywords = 'technology solutions, AI, cloud, digital transformation',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  canonicalUrl = 'https://ziontechgroup.com',
  structuredData,
  noindex = false,
  nofollow = false,
}: Props) {
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description,
  } as const;

  const jsonLd = JSON.stringify(structuredData || defaultStructuredData);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </Head>
  );
}