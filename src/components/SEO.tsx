import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Cutting-Edge Technology Solutions',
  description = 'Leading technology solutions provider specializing in AI, blockchain, quantum computing, and enterprise software development. Transform your business with our innovative solutions.',
  keywords = [
    'AI development',
    'blockchain solutions',
    'quantum computing',
    'cloud migration',
    'cybersecurity',
    'data analytics',
    'enterprise software',
    'technology consulting',
    'Zion Tech Group'
  ],
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website'
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: description,
    url: url,
    logo: `${url}/logo.png`,
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/ziontechgroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'hello@ziontechgroup.com'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US'
    },
    offers: {
      '@type': 'AggregateOffer',
      offerCount: '3',
      lowPrice: '3000',
      highPrice: '10000',
      priceCurrency: 'USD'
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Helmet>
  );
};

export default SEO;