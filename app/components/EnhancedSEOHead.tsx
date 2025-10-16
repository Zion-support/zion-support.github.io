<<<<<<< HEAD
import React from "react";
import { Helmet } from "react-helmet-async";
import { SEOData } from "../types/enhanced.types";
=======
'use client';

import React from 'react';

import { Helmet } from 'react-helmet-async';
>>>>>>> 79e154b6d026b9fc6b6271031f5928bd87a51d0b

interface EnhancedSEOHeadProps {
  seoData: SEOData;
  structuredData?: Record<string, unknown>;
<<<<<<< HEAD
  canonicalUrl?: string;
=======

  noIndex?: boolean;

  author?: string;

  publishedTime?: string;

  modifiedTime?: string;

  section?: string;
  tags?: string[];

>>>>>>> 79e154b6d026b9fc6b6271031f5928bd87a51d0b
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({
  seoData,
  structuredData,
  canonicalUrl,
}) => {
<<<<<<< HEAD
  const {
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    twitterCard = "summary_large_image",
    structuredData: seoStructuredData,
  } = seoData;

  const finalCanonical = canonicalUrl || canonical;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  const finalOgImage = ogImage || "/images/og-default.jpg";

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zion Tech Group",
    url: "https://ziontechgroup.com",
    logo: "https://ziontechgroup.com/images/logo.png",
    description: "Advanced AI and IT Solutions for Modern Businesses",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-0123",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup",
    ],
  };

  const mergedStructuredData = {
    ...defaultStructuredData,
    ...seoStructuredData,
    ...structuredData,
  };
=======
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
  const fullKeywords = [...keywords, 'Zion Tech Group', 'technology solutions', 'AI consulting', 'IT services'];
>>>>>>> 79e154b6d026b9fc6b6271031f5928bd87a51d0b

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      {finalCanonical && <link rel="canonical" href={finalCanonical} />}

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta
        property="og:url"
        content={finalCanonical || window.location.href}
      />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://www.google-analytics.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
<<<<<<< HEAD
        {JSON.stringify(mergedStructuredData)}
=======
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          logo: 'https://ziontechgroup.com/logo.png',
          description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
          foundingDate: '2020',
          numberOfEmployees: '50-100',
          industry: 'Technology',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            addressCountry: US
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-302-464-0950',
            contactType: 'Customer Service',
            areaServed: 'US',
            availableLanguage: 'en'
          },
          sameAs: [
            'https://linkedin.com/company/ziontechgroup',
            'https://twitter.com/ziontechgroup'
          ]
        })}

>>>>>>> 79e154b6d026b9fc6b6271031f5928bd87a51d0b
      </script>

      {/* Additional Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Helmet>
  );
};

export default EnhancedSEOHead;
