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
  author = 'Zion Tech Group',
}) => {
  const metaKeywords = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  const canonicalUrl = canonical || url;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Revolutionary AI and IT Solutions',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ZionClouds',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Drive',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US',
    },
    foundingDate: '2020',
    numberOfEmployees: '500+',
    industry: 'Artificial Intelligence',
      services: [
      'AI Workflow Automation',
      'Enterprise AI Solutions',
      'AI Data Analytics',
      'Cybersecurity AI',
      'Quantum Computing',
      'AI Consulting',
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={metaKeywords} />
      <meta name='author' content={author} />
      <meta name='robots' content='index, follow' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      {/* Open Graph Meta Tags */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:type' content={type} />
      <meta property='og:site_name' content='Zion Tech Group' />
      <meta property='og:locale' content='en_US' />

      {/* Twitter Card Meta Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      {/* Additional Meta Tags */}
      <meta name='theme-color' content='#3B82F6' />
      <meta name='msapplication-TileColor' content='#3B82F6' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='Zion Tech Group' />

      {/* Canonical URL */}
      <link rel='canonical' href={url} />

      {/* Favicon */}
      <link rel='icon' type='image/x-icon' href='/favicon.ico' />

      {/* DNS Prefetch */}
      <link rel='dns-prefetch' href='//api.ziontechgroup.com' />

      {/* Performance Hints */}
      <meta httpEquiv='x-dns-prefetch-control' content='on' />

      {/* Structured Data */}
      <script type='application/ld+json'>
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEOHead;
