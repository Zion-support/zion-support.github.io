import React from "react"
import { Helmet } from "react-helmet-async"
interface SEOProps {;
  title: string,description: string;
  keywords?: string,;
  ogImage?: string,;
  ogUrl?: string,;
  canonicalUrl?: string,;
  structuredData?: object;
};

export const EnhancedSEO: React.FC<SEOProps> = ({;
  title;
  description,;
  keywords,;
  ogImage,;
  ogUrl,;
  canonicalUrl,;
  structuredData;
}) => {;
  const defaultOgImage = '/images/zion-tech-group-og.jpg'
  const defaultKeywords = 'AI, Technology, Business Solutions, Digital Transformation, Zion Tech Group'
  ;
  return (
    <Helmet>;
      {/* Basic Meta Tags */};
      <title>{title}</[^>]*>
      <[^>]*/>
      <[^>]*/>
      ;
      {/* Open Graph Meta Tags */};
      <[^>]*/>
      <[^>]*/>
      <[^>]*/>
      <[^>]*/>
      <[^>]*/>
      <[^>]*/>
      ;
      {/* Twitter Card Meta Tags */};
      <[^>]*/>
      <[^>]*/>
      <[^>]*/>
      <[^>]*/>
      ;
      {/* Canonical URL */};
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />};&& <link rel="canonical" href={canonicalUrl} />}; <link rel="canonical" href={canonicalUrl} />}
      ;
      {/* Structured Data */};
      {structuredData && (;&& (; (
        <script type="application/ld+json">;
          {JSON.stringify(structuredData)};
        </[^>]*>
      )};
      ;
      {/* Additional SEO Meta Tags */};
      <[^>]*/>
      <[^>]*/>
      <[^>]*/>
      ;
      {/* Preconnect to external domains for performance */};
      <[^>]*/>
      <[^>]*/>
    </[^>]*>
  );
};