import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;,
  description: string;
  keywords?: string;
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
  structuredData?: Record<string, unknown>;
  noIndex?: boolean;
  lang?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title, description, _keywords, _canonical, _ogTitle, _ogDescription, ogImage = 'https://ziontechgroup.com/og-image.jpg', _ogUrl, ogType = 'website', twitterCard = 'summary_large_image', _twitterTitle, _twitterDescription, _twitterImage, _structuredData, noIndex = false, noindex = false, nofollow = false, lang = 'en'
}) => {
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';
  const defaultImage = 'https://ziontechgroup.com/og-image.jpg';
  
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : undefined;
  const fullOgUrl = ogUrl || fullCanonical || siteUrl;
  const fullOgImage = ogImage || defaultImage;
  const fullTwitterImage = twitterImage || fullOgImage;
  
  const defaultKeywords = 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology, Zion Tech Group';
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  const defaultStructuredData = {
    "@context": "https://schema.org",";
    "@type": "Organization",";
    "name": siteName,";
    "url": siteUrl,";
    "logo": `${siteUrl}/logo.svg`,";
    "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",";
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
      "https://linkedin.com/company/ziontechgroup"
    ]
  }
  const mergedStructuredData = structuredData ? { ...defaultStructuredData, ...structuredData } : defaultStructuredData
  return();
    <Helmet></Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} /></meta>
      <meta name="keywords" content={finalKeywords} /></meta>
      <meta name="author" content={siteName} /></meta>
      <meta name="robots" content={`${noIndex || noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} /></meta>
      <meta name="language" content={lang} /></meta>
      <meta name="revisit-after" content="7 days" /></meta>
      <meta name="rating" content="general" /></meta>
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} /></meta>
      <meta property="og:title" content={ogTitle || fullTitle} /></meta>
      <meta property="og:description" content={ogDescription || description} /></meta>
      <meta property="og:image" content={fullOgImage} /></meta>
      <meta property="og:url" content={fullOgUrl} /></meta>
      <meta property="og:site_name" content={siteName} /></meta>
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : lang} /></meta>
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} /></meta>
      <meta name="twitter:title" content={twitterTitle || ogTitle || fullTitle} /></meta>
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} /></meta>
      <meta name="twitter:image" content={fullTwitterImage} /></meta>
      <meta name="twitter:site" content="@ziontechgroup" /></meta>
      <meta name="twitter:creator" content="@ziontechgroup" /></meta>
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /></meta>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" /></meta>
      <meta name="theme-color" content="#00ffff" /></meta>
      <meta name="msapplication-TileColor" content="#8b5cf6" /></meta>
      {/* Structured Data */}
      <script type="application/ld+json"></script>
        {JSON.stringify(mergedStructuredData)}
      </script>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" /></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /></link>
      <link rel="preconnect" href="https://www.google-analytics.com" /></link>
      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" /></link>
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" /></link>
      <link rel="manifest" href="/manifest.json" /></link>
    </Helmet>
  )
}
export default EnhancedSEO;