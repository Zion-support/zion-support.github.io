'use client';

import React, { useEffect } from 'react';

/**
 * SEO Component
 * Provides comprehensive SEO meta tags and structured data
 */

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

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI & IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with cutting-edge AI technology.',
  keywords = [
    'AI',
    'artificial intelligence',
    'enterprise solutions',
    'digital transformation',
    'IT services',
  ],
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  locale = 'en_US',
  twitterCard = 'summary_large_image' as const,
  author,
  publishDate,
  modifiedDate,
  canonical,
  noIndex = false,
  structuredData,
  alternateLocales = []
}) => {
  const defaultSEO = {
    title: 'Zion Tech Group - AI & IT Solutions',
    description: 'Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with cutting-edge AI technology.',
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

  return null;
};

export default SEO;
