import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '{title}',
};

interface SEOEnhancerProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown>;
  noIndex?: boolean;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  children,
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with cutting-edge technology.',
  keywords = [
    'AI',
    'artificial intelligence',
    'quantum computing',
    'autonomous systems',
    'enterprise solutions',
    'machine learning',
  ],
  canonicalUrl,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  structuredData,
  noIndex = false,
}) => {
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description,
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://github.com/zion-tech-group',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-ZION-TECH',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Innovation Drive',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US',
    },
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <>
      
      {children}
    </>
  );
};

export default SEOEnhancer;
