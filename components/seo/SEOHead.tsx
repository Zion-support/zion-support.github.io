import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'service';
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  structuredData,
  noIndex = false,
  noFollow = false
}: SEOHeadProps) {
  const fullTitle = `${title} | Zion Tech Group - AI & Technology Solutions`;
  const defaultKeywords = [
    'AI services',
    'technology solutions',
    'enterprise automation',
    'cybersecurity',
    'quantum computing',
    'blockchain solutions',
    'cloud services',
    'digital transformation',
    'Zion Tech Group'
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`} />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2563eb" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}