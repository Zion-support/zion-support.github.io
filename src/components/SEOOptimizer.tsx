import React, { useEffect } from 'react';
import Head from 'next/head';
import { generateMetaTags, generateStructuredData, validateSEOData, SEOData } from '../utils/seoUtils';

interface SEOOptimizerProps {
  seoData: SEOData;
  enableValidation?: boolean;
  enableStructuredData?: boolean;
}

export default function SEOOptimizer({
  seoData,
  enableValidation = true,
  enableStructuredData = true
}: SEOOptimizerProps): JSX.Element {
  // Validate SEO data if enabled
  const validation = React.useMemo(() => 
    enableValidation ? validateSEOData(seoData) : { isValid: true, errors: [] },
    [enableValidation, seoData]
  );

  // Log validation errors in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && !validation.isValid) {
      console.warn('SEO Validation Errors:', validation.errors);
    }
  }, [validation]);

  // Generate structured data
  const structuredData = enableStructuredData && seoData.structuredData
    ? generateStructuredData(seoData.structuredData)
    : null;

  return (
    <Head>
      {/* Basic meta tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      {seoData.keywords && seoData.keywords.length > 0 && (
        <meta name="keywords" content={seoData.keywords.join(', ')} />
      )}
      
      {/* Canonical URL */}
      {seoData.canonical && (
        <link rel="canonical" href={seoData.canonical} />
      )}
      
      {/* Open Graph tags */}
      <meta property="og:title" content={seoData.ogTitle || seoData.title} />
      <meta property="og:description" content={seoData.ogDescription || seoData.description} />
      <meta property="og:type" content={seoData.ogType || 'website'} />
      {seoData.ogImage && (
        <meta property="og:image" content={seoData.ogImage} />
      )}
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content={seoData.twitterCard || 'summary_large_image'} />
      <meta name="twitter:title" content={seoData.twitterTitle || seoData.title} />
      <meta name="twitter:description" content={seoData.twitterDescription || seoData.description} />
      {seoData.twitterImage && (
        <meta name="twitter:image" content={seoData.twitterImage} />
      )}
      
      {/* Structured data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      )}
      
      {/* Additional meta tags for better SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Solutions" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https: //fonts.googleapis.com" />
      <link rel="preconnect" href="http, s://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
}