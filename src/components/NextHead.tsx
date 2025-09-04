import React from 'react';
import Head from 'next/head';

interface NextHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  noIndex?: boolean;
  children?: React.ReactNode;
}

const NextHead: React.FC<NextHeadProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Zion Tech Group provides cutting-edge technology solutions, AI-powered platforms, and enterprise consulting services with global reach.',
  keywords = 'technology, AI, software, consulting, enterprise, solutions, innovation',
  ogImage = '/og-image.jpg',
  ogUrl,
  canonical,
  noIndex = false,
  children
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullOgUrl = ogUrl || canonical || 'https://ziontechgroup.com';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Additional meta tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Custom children */}
      {children}
    </Head>
  );
};

export default NextHead;