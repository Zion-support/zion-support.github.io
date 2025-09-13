import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
}

export default function EnhancedSEO({
  title = "Zion Tech Group - Revolutionary AI Solutions & Enterprise Automation",
  description = "Transform your business with cutting-edge AI solutions, enterprise automation, and revolutionary technology. Expert implementation, 24/7 support, and proven ROI.",
  keywords = [
    "AI solutions",
    "enterprise automation", 
    "artificial intelligence",
    "business transformation",
    "machine learning",
    "quantum computing",
    "neural interfaces",
    "automation platform",
    "AI consulting",
    "digital transformation"
  ],
  canonical,
  ogImage = "/images/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noindex = false,
  nofollow = false
}: SEOProps) {
  
  const fullTitle = title.includes("Zion Tech Group") ? title : `${title} | Zion Tech Group`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
  const fullCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : '');

  // Default structured data
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Revolutionary AI solutions and enterprise automation platform",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/logo.png",
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Innovation Drive",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    },
    "offers": {
      "@type": "Offer",
      "description": "AI Solutions and Enterprise Automation Services",
      "category": "Technology Services"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1a1a1a" />
      <meta name="msapplication-TileColor" content="#1a1a1a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Additional Performance Optimizations */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Head>
  );
}