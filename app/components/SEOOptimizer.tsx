import React from 'react';
'use client';
interface SEOOptimizerProps {title: string;,}
  description: string;,
  keywords?: string[]
  canonicalUrl?: string;
  structuredData?: object;}const SEOOptimizer: React.FC<SEOOptimizerProps> = ({,
  title,
  description,
  keywords = [],
  canonicalUrl,
  structuredData;}) => {
  const keywordsString = keywords.join(', ');

  return(<Helmet />)
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywordsString}/>
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl}/>
      
      {/* Open Graph */} <meta property="og: title" content={title,}/>
      <meta property="og: description" content={description,}/>
      <meta property="og: type" content="website" />,
      <meta property="og: url" content={canonicalUrl,}/>
      
      {/* Twitter Card */} <meta name="twitter: card" content="summary_large_image" />,
      <meta name="twitter: title" content={title,}/>
      <meta name="twitter: description" content={description,}/>
'use client';

'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

export default function SEOOptimizer({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || "https://ziontechgroup.com"} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || "https://ziontechgroup.com"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
  description = 'Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.',
  keywords = 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology',
  canonical = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData
}: SEOOptimizerProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="theme-color" content="#1e40af" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
    <>
      {children}
    </>
  );
};

export default SEOOptimizer;
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://ziontechgroup.com" />
    </Helmet>
  );
}
