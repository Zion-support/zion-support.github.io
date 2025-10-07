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
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description = 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords = 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullCanonicalUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/logo.png',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St, STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} <meta name="keywords" content={keywords} <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} <meta property="og:description" content={description} <meta property="og:image" content={ogImage} <meta property="og:url" content={fullCanonicalUrl} <meta property="og:type" content={ogType} <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} <meta name="twitter:title" content={fullTitle} <meta name="twitter:description" content={description} <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" <meta name="author" content="Zion Tech Group" <meta name="viewport" content="width=device-width, initial-scale=1" <meta name="theme-color" content="#2563eb" />
      
      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;