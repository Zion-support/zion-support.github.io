import React from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
  language?: string;
  themeColor?: string;
  viewport?: string;
}
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = [],
  author = 'Zion Tech Group',
  canonical,
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  noFollow = false,
  language = 'en',
  themeColor = '#0f172a',
  viewport = 'width=device-width, initial-scale=1, viewport-fit=cover'
}) => {
<<<<<<< HEAD:broken_files_backup/SEOHead.tsx
  const siteName = 'Zion Tech Group';
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
=======
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} - Zion Tech Group`;
  const fullDescription = description.length > 160 ? `${description.substring(0, 157)}...` : description;
  
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/logo.png",
    "description": "Leading technology solutions provider specializing in AI, quantum computing, and innovative digital transformation services.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Innovation Drive",
      "addressLocality": "Tech City",
      "addressRegion": "TC",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://github.com/zion-tech-group"
    ]
  };

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-43b7:src/components/SEOHead.tsx
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
<<<<<<< HEAD:broken_files_backup/SEOHead.tsx
      <meta name="robots" content="index, follow" />
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
=======
      <meta name="language" content={language} />
      <meta name="viewport" content={viewport} />
      <meta name="theme-color" content={themeColor} />
      
      {/* Robots Meta */}
      {noIndex && <meta name="robots" content="noindex" />}
      {noFollow && <meta name="robots" content="nofollow" />}
      {!noIndex && !noFollow && <meta name="robots" content="index, follow" />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={language} />
      
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-43b7:src/components/SEOHead.tsx
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
<<<<<<< HEAD:broken_files_backup/SEOHead.tsx
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e3a8a" />
      <meta name="msapplication-TileColor" content="#1e3a8a" />
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      {/* Favicon and Icons */}
=======
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Favicon and App Icons */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-43b7:src/components/SEOHead.tsx
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<<<<<<< HEAD:broken_files_backup/SEOHead.tsx
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
          "description": description,
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
            "https://linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup",
            "https://github.com/ziontechgroup"
          ]
        })}
      </script>
      {/* Article specific structured data */}
      {type === 'article' && publishedTime && (
=======
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Structured Data */}
      {structuredData && (
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-43b7:src/components/SEOHead.tsx
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="msapplication-TileColor" content={themeColor} />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;" />
      
      {/* Performance Hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
    </Helmet>
  );
};
export default SEOHead;