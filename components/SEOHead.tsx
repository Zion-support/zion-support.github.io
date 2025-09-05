import React from 'react';
import Head from 'next/head';

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
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.',
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development',
  canonicalUrl,
  ogImage = '/og-image.jpg',
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
    logo: 'https://ziontechgroup.com/logo.png',
    description: description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: 'Delaware',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
    },
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://www.facebook.com/ziontechgroup',
    ],
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData),
        }}
      />
    </Head>
  );
};

export default SEOHead;