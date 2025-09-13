import React from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noIndex?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - AI Solutions & Enterprise Technology',
  description = 'Leading AI solutions provider specializing in enterprise automation, machine learning, and digital transformation. Expert consulting and implementation services.',
  keywords = ['AI', 'artificial intelligence', 'enterprise solutions', 'automation', 'machine learning', 'digital transformation'],
  canonicalUrl,
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');

  // Enhanced structured data
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://zion.app',
    logo: 'https://zion.app/images/logo.png',
    description: 'Leading AI solutions provider specializing in enterprise automation and digital transformation',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-ZION-TECH',
      contactType: 'customer service',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],
  };

  const combinedStructuredData = structuredData ? [defaultStructuredData, structuredData] : [defaultStructuredData];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      {combinedStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
          }}
        />
      ))}
      
      {/* Performance hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Security headers (if not set by Next.js config) */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
    </Head>
  );
};

export default SEOOptimizer;