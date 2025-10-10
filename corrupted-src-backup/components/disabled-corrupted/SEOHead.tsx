import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: unknown;
}

const SEOHead: React.FC<SEOHeadProps> = ({</SEOHeadProps>title</SEOHeadProps> = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of advanced AI and IT solutions that transform businesses and drive innovation across industries.',
  keywords = 'AI solutions, IT consulting, cloud services, data analytics, machine learning, artificial intelligence',
  canonicalUrl = 'https://zion.app',
  ogImage = 'https://zion.app/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
}) => {
  const _fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullCanonicalUrl = canonicalUrl.startsWith('http')
    ? canonicalUrl
    : `https://zion.app${canonicalUrl}`;

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://zion.app',
    logo: 'https://zion.app/logo.png',
    description: description,
    sameAs: ['https://linkedin.com/company/zion-tech-group', 'https://twitter.com/ziontechgroup'],
  };

  return (
    <Helmet></Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} /></meta>
      <meta name="keywords" content={keywords} /></meta>
      <link rel="canonical" href={fullCanonicalUrl} /></link>

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} /></meta>
      <meta property="og:description" content={description} /></meta>
      <meta property="og:image" content={ogImage} /></meta>
      <meta property="og:url" content={fullCanonicalUrl} /></meta>
      <meta property="og:type" content={ogType} /></meta>
      <meta property="og:site_name" content="Zion Tech Group" /></meta>

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} /></meta>
      <meta name="twitter:title" content={fullTitle} /></meta>
      <meta name="twitter:description" content={description} /></meta>
      <meta name="twitter:image" content={ogImage} /></meta>

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" /></meta>
      <meta name="author" content="Zion Tech Group" /></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" /></meta>
      <meta name="theme-color" content="#2563 eb" /></meta>

      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" /></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /></link>
      <link rel="dns-prefetch" href="//www.google-analytics.com" /></link>

      {/* Structured Data */}
      <script type="application/ld+json"></scrip>
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
