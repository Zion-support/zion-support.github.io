import React, { useEffect } from 'react';
import Head from 'next/head';
import { generateMetaTags, generateStructuredData, validateSEOData, SEOData } from '../utils/seoUtils';

interface SEOOptimizerProps {
  seoData: SEOData;
  enableValidation?: boolean;
  enableStructuredData?: boolean}

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
      console.warn('SEO Validation Errors:', validation.errors)}
  }, [validation]);

  // Generate meta tags
  const metaTags = React.useMemo(() => generateMetaTags(seoData), [seoData]);

  // Generate structured data
  const structuredData = React.useMemo(() => 
    enableStructuredData ? generateStructuredData(seoData) : null,
    [enableStructuredData, seoData]
  );

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      <meta name="keywords" content={metaTags.keywords?.join(', ')} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={metaTags.ogTitle} />
      <meta property="og:description" content={metaTags.ogDescription} />
      <meta property="og:image" content={metaTags.ogImage} />
      <meta property="og:url" content={metaTags.ogUrl} />
      <meta property="og:type" content={metaTags.ogType} />
      <meta property="og:site_name" content={metaTags.ogSiteName} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={metaTags.twitterCard} />
      <meta name="twitter:title" content={metaTags.twitterTitle} />
      <meta name="twitter:description" content={metaTags.twitterDescription} />
      <meta name="twitter:image" content={metaTags.twitterImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content={metaTags.robots} />
      <meta name="author" content={metaTags.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={metaTags.canonical} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* Development Warning */}
      {process.env.NODE_ENV === 'development' && !validation.isValid && (
        <meta name="seo-validation-warning" content={`SEO validation failed: ${validation.errors.join(', ')}`} />
      )}
    </Head>
  )}