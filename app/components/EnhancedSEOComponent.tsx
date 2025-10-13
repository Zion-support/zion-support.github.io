import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  noIndex?: boolean;
  noFollow?: boolean;
}

const EnhancedSEOComponent: React.FC<SEOProps> = ({
  title,
  description,
  keywords = '',
  canonical = '',
  ogTitle = title,
  ogDescription = description,
  ogImage = '/images/og-image.jpg',
  ogUrl = '',
  twitterCard = 'summary_large_image',
  twitterTitle = title,
  twitterDescription = description,
  twitterImage = ogImage,
  structuredData,
  noIndex = false,
  noFollow = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullCanonical = canonical || `https://ziontechgroup.com${window.location.pathname}`;
  const fullOgUrl = ogUrl || fullCanonical;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/logo.png",
    "description": "Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "services": [
      "AI Solutions",
      "IT Services",
      "Cloud Computing",
      "Cybersecurity",
      "5G Solutions",
      "Data Analytics",
      "Web Development",
      "Mobile Development"
    ]
  };

  const combinedStructuredData = structuredData ? [defaultStructuredData, structuredData] : [defaultStructuredData];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots Meta */}
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="publisher" content="Zion Tech Group" />
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Structured Data */}
      {combinedStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      
      {/* Additional Performance Optimizations */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};

export default EnhancedSEOComponent;