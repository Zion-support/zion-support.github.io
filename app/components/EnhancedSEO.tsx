import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of cutting-edge AI, IT, and 5G solutions. Transform your business through innovative technology and intelligent automation.',
  keywords = ['AI solutions', 'IT services', '5G technology', 'cloud computing', 'cybersecurity', 'digital transformation'],
  canonical,
  ogTitle,
  ogDescription,
  ogImage = '/og-image.jpg',
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
  const siteUrl = process.env['REACT_APP_SITE_URL'] || 'https://ziontechgroup.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;
  const fullOgUrl = ogUrl || fullCanonical || siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const fullTwitterImage = twitterImage ? (twitterImage.startsWith('http') ? twitterImage : `${siteUrl}${twitterImage}`) : fullOgImage;

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
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
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ziontechgroup'
    ]
  };

  const pageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: fullCanonical || fullOgUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Zion Tech Group',
      url: siteUrl
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={fullTwitterImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en-US" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Page-specific structured data */}
      <script type="application/ld+json">
        {JSON.stringify(pageStructuredData)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;