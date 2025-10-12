'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
<<<<<<< HEAD
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: object
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI and IT solutions. Transform your business with our cutting-edge technology and expert services.",
  keywords = "AI solutions, IT services, cloud computing, software development, artificial intelligence, machine learning, Zion Tech Group",
  canonical,
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '')

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": canonicalUrl,
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ]
  }
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
=======
  noIndex?: boolean;
  noFollow?: boolean;
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
<<<<<<< HEAD
  description = 'Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, artificial intelligence, and innovative digital solutions.',
  keywords = 'AI, artificial intelligence, IT solutions, technology, digital transformation, machine learning, automation',
  canonical,
  ogImage = '/og-image.jpg'
}) => {
=======
  description = 'Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. Transform your business with cutting-edge technology.',
  keywords = 'AI solutions, IT services, digital transformation, cloud computing, 5G implementation, micro SAAS, artificial intelligence, business automation',
  canonical = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  noFollow = false
}) => {
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: description,
    url: canonical,
    logo: 'https://ziontechgroup.com/logo.png',
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/ziontechgroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      availableLanguage: 'English'
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
<<<<<<< HEAD
      <link rel="canonical" href={fullCanonical} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
=======
      <link rel="canonical" href={canonical} />
      
      {/* Robots Meta */}
      {noIndex && <meta name="robots" content="noindex" />}
      {noFollow && <meta name="robots" content="nofollow" />}
      {!noIndex && !noFollow && <meta name="robots" content="index, follow" />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="generator" content="React" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <meta name="color-scheme" content="dark light" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={canonical || window.location.href} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || window.location.href} />
      
      {/* Twitter */}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </script>
    </Helmet>
  );
};

<<<<<<< HEAD
export default SEOHead;
export default SEOHead
export default SEOHead;
=======
export default SEOHead;
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
