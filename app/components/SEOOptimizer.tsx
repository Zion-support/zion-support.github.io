'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
const keywordsString = keywords.join(', ')
  return (
    <Helmet>
<title>{title}</title>
<meta name="description" content={description} />
<meta name="keywords" content={keywordsString} />
<meta name="robots" content="index, follow" />
<link rel="canonical" href={canonicalUrl} />
{/* Open Graph */}
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:type" content="website" />
<meta property="og:url" content={canonicalUrl} />
{/* Twitter Card */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
{/* Structured Data */}
{structuredData && (
<script type="application/ld+json">
{JSON.stringify(structuredData)}
</script>
)}
</Helmet>
)
}
export default SEOOptimizer
