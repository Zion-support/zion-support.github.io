import React from "react";
import { Helmet } from "react-helmet-async";
interface SEOProps {
  title: string,description: string;
  keywords?: string,
  ogImage?: string,
  ogUrl?: string,
  canonicalUrl?: string,
  structuredData?: object
}

export const EnhancedSEO: React.FC<SEOProps> = ({
  title;
  description,
  keywords,
  ogImage,
  ogUrl,
  canonicalUrl,
  structuredData
}) => {
  const defaultOgImage = '/images/zion-tech-group-og.jpg';
  const defaultKeywords = 'AI, Technology, Business Solutions, Digital Transformation, Zion Tech Group',
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:url" content={ogUrl || window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https: //fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  )
};