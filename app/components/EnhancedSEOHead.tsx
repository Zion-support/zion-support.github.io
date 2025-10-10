'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  structuredData?: object;
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - AI & IT Solutions",
  description = "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
  keywords = "AI solutions, IT services, cybersecurity, cloud computing, digital transformation, enterprise software, automation, machine learning",
  image = "/images/og-image.jpg",
  url,
  type = 'website',
  siteName = 'Zion Tech Group',
  structuredData
}) => {
  const location = useLocation();
  const currentUrl = url || `https://ziontechgroup.com${location.pathname}`;
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/favicon.svg",
    "description": description,
    "foundingDate": "2020",
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
      "contactType": "sales",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/zion-tech-group"
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta property="twitter:site" content="@ziontechgroup" />
      <meta property="twitter:creator" content="@ziontechgroup" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEOHead;
