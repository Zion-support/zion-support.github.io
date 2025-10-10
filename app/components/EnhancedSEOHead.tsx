'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  structuredData?: any;
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, custom software development, and IT services. Transform your business with cutting-edge technology.',
  keywords = ['AI solutions', 'IT services', 'software development', 'artificial intelligence', 'business automation'],
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description;
  const fullKeywords = [...keywords, 'Zion Tech Group', 'AI', 'IT solutions'];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords.join(', ')} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Language and Geo Tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown, Delaware" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Structured Data if none provided */}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "description": fullDescription,
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "Customer Service",
              "areaServed": "US",
              "availableLanguage": "en"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://linkedin.com/company/ziontechgroup",
              "https://twitter.com/ziontechgroup"
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEOHead;