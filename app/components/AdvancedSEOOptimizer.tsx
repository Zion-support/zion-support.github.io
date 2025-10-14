import React from 'react';
import { Helmet } from 'react-helmet-async';

interface AdvancedSEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  enableStructuredData?: boolean;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  title = 'Zion Tech Group - AI & IT Solutions',
  description = 'Leading provider of AI and IT solutions, empowering businesses to transform and scale through innovative technology.',
  keywords = ['AI solutions', 'IT services', 'cloud infrastructure', 'digital transformation'],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  structuredData,
  enableStructuredData = true
}) => {
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: description,
    url: canonicalUrl || window.location.origin,
    logo: `${window.location.origin}/logo.png`,
    sameAs: [
      'https://linkedin.com/company/zion-tech',
      'https://twitter.com/ziontech',
      'https://github.com/zion-tech'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US'
    }
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')} />
        <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : (typeof window !== 'undefined' ? `${window.location.origin}${ogImage}` : ogImage)} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : (typeof window !== 'undefined' ? `${window.location.origin}${ogImage}` : ogImage)} />
        
        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        
        {/* Structured Data */}
        {enableStructuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData || defaultStructuredData)}
          </script>
        )}
      </Helmet>
      <div data-testid="seo-optimizer">Advanced SEO Optimizer</div>
    </>
  );
};

export default AdvancedSEOOptimizer;