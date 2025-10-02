import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Revolutionary AI and IT Solutions',
  description = "Transform your enterprise with Zion Tech Group's revolutionary AI solutions.",
  keywords = 'AI solutions, enterprise AI, artificial intelligence, machine learning, automation',
  canonical,
  url = 'https://ziontechgroup.com',
  image = 'https://ziontechgroup.com/og-image.jpg',
  type = 'website',
  author = 'Zion Tech Group'
}) => {
  const metaKeywords = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  const canonicalUrl = canonical || url;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description,
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ZionClouds'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com'
    }
  } as const;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default EnhancedSEOHead;