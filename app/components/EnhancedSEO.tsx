import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
  lang?: string;
  author?: string;
  section?: string;
  tags?: string[];
  readingTime?: number;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  structuredData,
  noindex = false,
  nofollow = false,
  lang = 'en',
  author = 'Zion Tech Group',
  section,
  tags,
  readingTime
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description || 'Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.';
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="language" content={lang} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Reading Time */}
      {readingTime && (
        <meta name="reading-time" content={`${readingTime} minutes`} />
      )}
      
      {/* Section */}
      {section && (
        <meta name="article:section" content={section} />
      )}
      
      {/* Tags */}
      {tags && tags.length > 0 && (
        <>
          {tags.map((tag, index) => (
            <meta key={index} name="article:tag" content={tag} />
          ))}
        </>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;