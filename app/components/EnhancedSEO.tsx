import React from 'react';
 origin/cursor/analyze-improve-and-deploy-application-1091;
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
import React from 'react';
import { Helmet } from 'react-helmet-async';
interface EnhancedSEOProps {
 origin/cursor/analyze-improve-and-deploy-application-1507
;
  return (
    <Helmet>
      {/* Basic Meta Tags */}
</Helmet><title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="robots" content={robotsContent} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="color-scheme" content="dark light" />
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl || 'https://ziontechgroup.com'} />
      <meta property="og:title" content={fullTitle} /> origin/cursor/analyze-improve-and-deploy-application-1507;
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
{keywords && <meta name="keywords" content={keywords} />}
 origin/cursor/analyze-improve-and-deploy-application-13a2;
 origin/cursor/analyze-improve-and-deploy-application-1507;
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}</script>
        </script>
      )}
 origin/cursor/analyze-improve-and-deploy-application-1507
      ;
      {/* Additional Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
"logo": "https://ziontechgroup.com/logo192.png",
          "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
          "foundingDate": "2020",
          "numberOfEmployees": "50-100",
          "industry": "Technology",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "Customer Service",
            "areaServed": "US",
            "availableLanguage": "en"
          }, origin/cursor/analyze-improve-and-deploy-application-1507;
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
 origin/cursor/analyze-improve-and-deploy-application-1507;
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup"
          ]
        })}</script>
      </script>
 origin/cursor/analyze-improve-and-deploy-application-1091;
 origin/cursor/analyze-improve-and-deploy-application-13a2;
 origin/cursor/analyze-improve-and-deploy-application-1507;
    </Helmet>
  );
};
 origin/cursor/analyze-improve-and-deploy-application-0fdb;
 origin/cursor/analyze-improve-and-deploy-application-1091;
 origin/cursor/analyze-improve-and-deploy-application-1247;
 origin/cursor/analyze-improve-and-deploy-application-1507
;