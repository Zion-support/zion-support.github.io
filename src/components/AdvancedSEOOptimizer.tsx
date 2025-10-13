'use client';
import { useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
  structuredData?: unknown;
}

interface AdvancedSEOOptimizerProps {
  seoData: SEOData;
  children?: .Node;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  seoData,
  children
}) => {
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    noIndex = false,
    structuredData
  } = seoData;

  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading AI and IT solutions provider",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service"
    }
  };

  const finalStructuredData = structuredData || baseStructuredData;

  return (
    <.Fragment>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
        
        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl || "https://ziontechgroup.com"} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        
        {/* Twitter d Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(finalStructuredData)}
      {children}
  );
};

export default AdvancedSEOOptimizer;