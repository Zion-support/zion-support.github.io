'use client';
import React, { useEffect } from 'react';
import Head from 'next/head';

interface EnhancedSEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  locale?: string;
  alternateLocales?: { locale: string; url: string }[];
  noindex?: boolean;
  nofollow?: boolean;
  robots?: string;
  author?: string;
  publisher?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  readingTime?: number;
  wordCount?: number;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqSchema?: Array<{ question: string; answer: string }>;
  reviewSchema?: {
    rating: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
  organizationSchema?: {
    name: string;
    url: string;
    logo: string;
    description: string;
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    contactPoint?: {
      telephone: string;
      contactType: string;
      areaServed: string;
      availableLanguage: string;
    };
    sameAs?: string[];
  };
}

const EnhancedSEOOptimizer: React.FC<EnhancedSEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData,
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup',
  locale = 'en_US',
  alternateLocales = [],
  noindex = false,
  nofollow = false,
  robots,
  author = 'Zion Tech Group',
  publisher = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  readingTime,
  wordCount,
  breadcrumbs = [],
  faqSchema = [],
  reviewSchema,
  organizationSchema = {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
    address: {
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    },
    contactPoint: {
      telephone: '+1-302-464-0950',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
    ],
  },
}) => {
  useEffect(() => {
    // Update page title
    document.title = title;

    // Update meta description
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));

    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'Zion Tech Group', 'property');
    updateMetaTag('og:locale', locale, 'property');

    // Update Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:site', twitterSite);
    updateMetaTag('twitter:creator', twitterCreator);

    // Update canonical URL
    updateCanonicalUrl(canonicalUrl);

    // Update robots meta
    if (robots) {
      updateMetaTag('robots', robots);
    } else {
      const robotDirectives = [];
      if (noindex) robotDirectives.push('noindex');
      if (nofollow) robotDirectives.push('nofollow');
      if (!noindex && !nofollow) robotDirectives.push('index', 'follow');
      updateMetaTag('robots', robotDirectives.join(', '));
    }

    // Update author and publisher
    updateMetaTag('author', author);
    updateMetaTag('publisher', publisher);

    // Update article meta if provided
    if (publishedTime) {
      updateMetaTag('article:published_time', publishedTime, 'property');
    }
    if (modifiedTime) {
      updateMetaTag('article:modified_time', modifiedTime, 'property');
    }
    if (section) {
      updateMetaTag('article:section', section, 'property');
    }
    if (tags.length > 0) {
      tags.forEach(tag => {
        addMetaTag('article:tag', tag, 'property');
      });
    }

    // Update reading time and word count
    if (readingTime) {
      updateMetaTag('twitter:label1', 'Reading time');
      updateMetaTag('twitter:data1', `${readingTime} min read`);
    }
    if (wordCount) {
      updateMetaTag('twitter:label2', 'Word count');
      updateMetaTag('twitter:data2', wordCount.toString());
    }

    // Add alternate language links
    alternateLocales.forEach(({ locale: altLocale, url }) => {
      addAlternateLink(altLocale, url);
    });

    // Add breadcrumb structured data
    if (breadcrumbs.length > 0) {
      addBreadcrumbSchema(breadcrumbs);
    }

    // Add FAQ schema
    if (faqSchema.length > 0) {
      addFAQSchema(faqSchema);
    }

    // Add review schema
    if (reviewSchema) {
      addReviewSchema(reviewSchema);
    }

    // Add organization schema
    if (organizationSchema) {
      addOrganizationSchema(organizationSchema);
    }

    // Add custom structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData, twitterCard, twitterSite, twitterCreator, locale, alternateLocales, noindex, nofollow, robots, author, publisher, publishedTime, modifiedTime, section, tags, readingTime, wordCount, breadcrumbs, faqSchema, reviewSchema, organizationSchema]);

  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (meta) {
      meta.setAttribute('content', content);
    } else {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    }
  };

  const addMetaTag = (name: string, content: string, attribute: string = 'name') => {
    const meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  };

  const updateCanonicalUrl = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
  };

  const addAlternateLink = (locale: string, url: string) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', locale);
    link.setAttribute('href', url);
    document.head.appendChild(link);
  };

  const addBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
    addStructuredData(breadcrumbSchema);
  };

  const addFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
    addStructuredData(faqSchema);
  };

  const addReviewSchema = (review: { rating: number; reviewCount: number; bestRating: number; worstRating: number }) => {
    const reviewSchema = {
      '@context': 'https://schema.org',
      '@type': 'AggregateRating',
      ratingValue: review.rating,
      reviewCount: review.reviewCount,
      bestRating: review.bestRating,
      worstRating: review.worstRating,
    };
    addStructuredData(reviewSchema);
  };

  const addOrganizationSchema = (org: any) => {
    addStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      ...org,
    });
  };

  const addStructuredData = (data: any) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta name="robots" content={robots || (noindex ? 'noindex' : 'index,follow')} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate languages */}
      {alternateLocales.map(({ locale: altLocale, url }) => (
        <link key={altLocale} rel="alternate" hrefLang={altLocale} href={url} />
      ))}
    </Head>
  );
};

export default EnhancedSEOOptimizer;