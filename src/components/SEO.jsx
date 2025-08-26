import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  keywords, 
  image, 
  url, 
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = [],
  structuredData,
  noindex = false,
  nofollow = false
}) => {
  const baseUrl = 'https://ziontechgroup.com';
  const pageTitle = title || 'Zion Tech Group - AI, Cloud, and Cybersecurity Solutions';
  const pageDescription = description || 'We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.';
  
  const canonicalUrl = canonical || `${baseUrl}${window.location.pathname}`;
  const chosenImage = image || ogImage || '/og-image.svg';
  const robotsContent = `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords && (
        <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />
      )}
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={chosenImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={chosenImage} />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags?.length && 
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      }
      
      {/* Structured Data */}
      {structuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      ) : (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Zion Tech Group",
                "url": baseUrl,
                "logo": `${baseUrl}/favicon.svg`,
                "sameAs": [
                  "https://www.linkedin.com/company/zion-tech-group",
                  "https://github.com/Zion-Holdings",
                  "https://twitter.com/ziontechgroup"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Website",
                "url": baseUrl,
                "name": "Zion Tech Group",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": `${baseUrl}/search?q={search_term_string}`,
                  "query-input": "required name=search_term_string"
                }
              }
            ])
          }}
        />
      )}
    </Helmet>
  );
};
