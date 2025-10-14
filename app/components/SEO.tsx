'use client';

/**
 * SEO Component
 * Provides comprehensive SEO meta tags and structured data
 */

import React from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  canonical?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown>;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  locale?: string;
  alternateLocales?: { locale: string; url: string }[];
}

const defaultSEO = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description:
    'Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with cutting-edge AI technology.',
  keywords: [
    'AI',
    'artificial intelligence',
    'enterprise solutions',
    'digital transformation',
    'IT services',
  ],
  image: 'https://ziontechgroup.com/og-image.jpg',
  url: 'https://ziontechgroup.com',
  type: 'website' as const,
  locale: 'en_US',
  twitterCard: 'summary_large_image' as const,
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = defaultSEO.type,
  author,
  publishDate,
  modifiedDate,
  canonical,
  noIndex = false,
  structuredData,
  twitterCard = defaultSEO.twitterCard,
  locale = defaultSEO.locale,
  alternateLocales = [],
}) => {
  const seo = {
    title: title ? `${title} | Zion Tech Group` : defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    url: url || defaultSEO.url,
    type,
    twitterCard,
    locale,
  };

  // Generate structured data
  const generateStructuredData = () => {
    if (structuredData) {
      return structuredData;
    }

    const baseStructuredData: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      headline: seo.title,
      description: seo.description,
      url: seo.url,
      image: seo.image,
    };

    if (author) {
      baseStructuredData.author = {
        '@type': 'Person',
        name: author,
      };
    }

    if (publishDate) {
      baseStructuredData.datePublished = publishDate;
    }

    if (modifiedDate) {
      baseStructuredData.dateModified = modifiedDate;
    }

    return baseStructuredData;
  };

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={canonical || seo.url} />
      
      {/* Open Graph */}
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:locale" content={seo.locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={seo.twitterCard} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {/* Article specific */}
      {author && <meta name="author" content={author} />}
      {publishDate && <meta property="article:published_time" content={publishDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      
      {/* Alternate locales */}
      {alternateLocales.map((alt) => (
        <link key={alt.locale} rel="alternate" hrefLang={alt.locale} href={alt.url} />
      ))}
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />
    </>
  );
};

export default SEO;
