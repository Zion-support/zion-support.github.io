import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/zion-tech-group-og.jpg',
  canonicalUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section = 'Technology',
  tags = ['AI', 'Quantum Computing', 'Micro SAAS', 'Digital Transformation']
}) => {
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Leading technology company specializing in AI solutions, quantum computing, and micro SAAS services",
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
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://www.facebook.com/ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "knowsAbout": [
      "Artificial Intelligence",
      "Quantum Computing",
      "Micro SAAS",
      "Digital Transformation",
      "Cybersecurity",
      "Cloud Computing"
    ]
  };

  // Merge with provided structured data
  const finalStructuredData = structuredData ? { ...defaultStructuredData, ...structuredData } : defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      {/* Robots Meta Tags */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Open Graph Article Meta Tags (if applicable) */}
      {ogType === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22ddd2" />
      <meta name="msapplication-TileColor" content="#22ddd2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content={siteName} />
      <meta name="generator" content="React + Vite" />
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Performance Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown, Delaware" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="364 E Main St STE 1008" />
      <meta name="business:contact_data:locality" content="Middletown" />
      <meta name="business:contact_data:region" content="DE" />
      <meta name="business:contact_data:postal_code" content="19709" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-302-464-0950" />
      <meta name="business:contact_data:email" content="kleber@ziontechgroup.com" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Additional Open Graph Tags for Business */}
      <meta property="og:image:alt" content={`${siteName} - ${description.substring(0, 100)}...`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content={fullOgImage.replace('http:', 'https:')} />
      
      {/* Facebook App ID (if applicable) */}
      <meta property="fb:app_id" content="your-facebook-app-id" />
      
      {/* Pinterest Verification */}
      <meta name="pinterest-rich-pin" content="true" />
      
      {/* Additional Twitter Tags */}
      <meta name="twitter:image:alt" content={`${siteName} - ${description.substring(0, 100)}...`} />
      <meta name="twitter:domain" content="ziontechgroup.com" />
      
      {/* LinkedIn Verification */}
      <meta name="linkedin:owner" content="your-linkedin-company-id" />
      
      {/* WhatsApp Business */}
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      
      {/* Additional Business Schema */}
      <meta property="business:contact_data:street_address" content="364 E Main St STE 1008" />
      <meta property="business:contact_data:locality" content="Middletown" />
      <meta property="business:contact_data:region" content="DE" />
      <meta property="business:contact_data:postal_code" content="19709" />
      <meta property="business:contact_data:country_name" content="United States" />
      <meta property="business:contact_data:phone_number" content="+1-302-464-0950" />
      <meta property="business:contact_data:email" content="kleber@ziontechgroup.com" />
      
      {/* Service Schema */}
      <meta property="service:name" content="AI Solutions" />
      <meta property="service:description" content="Advanced artificial intelligence solutions for business transformation" />
      <meta property="service:provider" content="Zion Tech Group" />
      <meta property="service:area" content="Technology" />
      
      {/* Local Business Schema */}
      <meta property="place:location:latitude" content="39.4496" />
      <meta property="place:location:longitude" content="-75.7163" />
      
      {/* Additional Performance Optimizations */}
      <link rel="preload" href="/fonts/orbitron-v19-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/rajdhani-v10-latin-500.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Critical CSS Preload */}
      <link rel="preload" href="/critical.css" as="style" />
      
      {/* Service Worker Registration */}
      <script>
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
        `}
      </script>
      
      {/* Performance Monitoring */}
      <script>
        {`
          // Performance monitoring
          window.addEventListener('load', function() {
            if ('performance' in window) {
              const perfData = performance.getEntriesByType('navigation')[0];
              if (perfData) {
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
              }
            }
          });
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
