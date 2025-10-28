'use client';

import React, { memo } from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = memo(({
  title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.',
  keywords = 'AI solutions, IT services, cybersecurity, cloud computing, digital transformation',
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
});

SEOHead.displayName = 'SEOHead';

export default SEOHead;