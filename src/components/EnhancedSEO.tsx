import React from 'react';
import Head from 'next/head';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
}

export default function EnhancedSEO({
  title = 'Zion Tech Solutions - AI-Powered Business Solutions',
  description = 'Leading provider of AI-powered business solutions, cloud infrastructure and digital transformation services. Transform your business with cutting-edge technology.',
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  keywords = ['AI', 'cloud computing', 'digital transformation', 'web development', 'technology solutions']
}: EnhancedSEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Solutions" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="author" content="Zion Tech Solutions" />
      <meta name="theme-color" content="#2563eb" />
    </Head>
  );
}