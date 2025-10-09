'use client';
import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  structuredData?: any;
  ogImage?: string;
}

const SEOOptimizer: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  structuredData,
  ogImage = 'https://ziontechgroup.com/og-image.jpg'
}) => {
  const enhancedStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://ziontechgroup.com/#organization',
        name: 'Zion Tech Group',
        url: 'https://ziontechgroup.com',
        logo: 'https://ziontechgroup.com/logo.png',
        description: description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '364 E Main St STE 1008',
          addressLocality: 'Middletown',
          addressRegion: 'DE',
          postalCode: '19709',
          addressCountry: 'US'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-302-464-0950',
          contactType: 'Customer Service'
        }
      },
      ...(structuredData ? [structuredData] : [])
    ]
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedStructuredData) }}
      />
    </Head>
  );
};

export default SEOOptimizer;