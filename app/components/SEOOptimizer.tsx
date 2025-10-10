'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOOptimizerProps {
  title: string;,
  description: string
  keywords?: string[]
  canonicalUrl?: string
  structuredData?: object
}

const SEOOptimizer: React.FC<SEOOptimizerProps>= ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  structuredData
}) => {
  const keywordsString = keywords.join(', ')</SEOOptimizerProps>
  return (</SEOOptimizerProps>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />{/* Open Graph */}</link>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />{/* Twitter Card */}</meta>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />{/* Structured Data */}</meta>
      {structuredData && (</meta>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </script>
      )}
    </Helmet>
  )
}

export default SEOOptimizer;