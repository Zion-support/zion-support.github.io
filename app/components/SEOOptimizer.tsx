'use client';

import React from 'react';

import { Helmet } from 'react-helmet-async;

interface SEOOptimizerProps {
  title: string;

  description: string;

  keywords: string[];

  canonicalUrl?: string;

  structuredData?: any;

  ogImage?: string;

  ogType?: string';

  twitterCard?: string}

';

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  structuredData,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = summary_large_image
}) => {;

const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;;

const fullDescription = description || 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.;;

  return (

    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph tags */}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card tags */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO tags */}

      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured data */}

      {structuredData && (

        <script type="application/ld+json">
          {JSON.stringify(structuredData);

        </script>);

    </Helmet>
  );

}

export default SEOOptimizer;
