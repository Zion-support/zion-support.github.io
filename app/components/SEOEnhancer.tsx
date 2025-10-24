
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOEnhancerProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title,
  description,
  keywords = '',
  canonicalUrl,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
        
        {/* Structured data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>
    </>
  );
};

export default SEOEnhancer;
