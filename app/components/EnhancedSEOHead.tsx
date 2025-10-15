import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;,
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: Record<string, unknown>;
  noindex?: boolean;
  nofollow?: boolean;
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title, description, _keywords, _canonical, ogImage = '/images/og-default.jpg', ogType = 'website', twitterCard = 'summary_large_image', _structuredData, noindex = false, nofollow = false
}) => {
  const siteUrl = 'https://ziontechgroup.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",";
    "@type": "Organization",";
    "name": "Zion Tech Group",";
    "url": siteUrl,";
    "logo": `${siteUrl}/images/logo.png`,";
    "description": "Leading provider of AI-powered solutions, IT services, and digital transformation",";
    "contactPoint": {
  // TODO: Implement
}";
      "@type": "ContactPoint",";
      "telephone": "+1-302-464-0950",";
      "contactType": "customer service",";
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
  // TODO: Implement
}";
      "@type": "PostalAddress",";
      "streetAddress": "364 E Main St STE 1008",";
      "addressLocality": "Middletown",";
      "addressRegion": "DE",";
      "postalCode": "19709",";
      "addressCountry": "US"
    },
    "sameAs": []";
      "https://twitter.com/ziontechgroup",";
      "https://linkedin.com/company/ziontechgroup",";
      "https://github.com/ziontechgroup"
    ]
  }
  const mergedStructuredData = structuredData
    ? { ...defaultStructuredData, ...structuredData }
    : defaultStructuredData
  return();
    <Helmet></Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} /></meta>
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} /></link>
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} /></meta>
      {/* Open Graph */}
      <meta property="og:title" content={title} /></meta>
      <meta property="og:description" content={description} /></meta>
      <meta property="og:type" content={ogType} /></meta>
      <meta property="og:url" content={fullCanonical} /></meta>
      <meta property="og:image" content={fullOgImage} /></meta>
      <meta property="og:image:width" content="1200" /></meta>
      <meta property="og:image:height" content="630" /></meta>
      <meta property="og:site_name" content="Zion Tech Group" /></meta>
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} /></meta>
      <meta name="twitter:title" content={title} /></meta>
      <meta name="twitter:description" content={description} /></meta>
      <meta name="twitter:image" content={fullOgImage} /></meta>
      <meta name="twitter:site" content="@ziontechgroup" /></meta>
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Zion Tech Group" /></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" /></meta>
      {/* Language and Region */}
      <meta name="language" content="en-US" /></meta>
      <meta name="geo.region" content="US-DE" /></meta>
      <meta name="geo.placename" content="Middletown, Delaware" /></meta>
      {/* Mobile App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" /></meta>
      <meta name="apple-mobile-web-app-capable" content="yes" /></meta>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /></meta>
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" /></meta>
      {/* Theme Color */}
      <meta name="theme-color" content="#00ffff" /></meta>
      <meta name="msapplication-TileColor" content="#00ffff" /></meta>
      {/* Structured Data */}
      <script type="application/ld+json"></script>
        {JSON.stringify(mergedStructuredData)}
      </script>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" /></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /></link>
      <link rel="preconnect" href="https://www.google-analytics.com" /></link>
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" /></link>
      <link rel="dns-prefetch" href="//www.google-analytics.com" /></link>
    </Helmet>
  )
}
export default EnhancedSEOHead;