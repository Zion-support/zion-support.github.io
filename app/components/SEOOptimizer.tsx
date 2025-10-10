'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {}
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  structuredData?: any;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string}
;
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({}
  title,
  description,
  keywords,
  canonicalUrl,
  structuredData,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}) => {;}
const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
const fullDescription = description || 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || 'https://ziontechgroup.com'} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default SEOOptimizer;
