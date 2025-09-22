'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

interface SEOOptimizerProps {
  seoData: SEOData;
  children?: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ seoData, children }) => {
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage = '/images/og-default.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    structuredData,
    robots = 'index, follow',
    author = 'AI Innovation Hub',
    publishedTime,
    modifiedTime,
    section,
    tags = []
  } = seoData;

  // Generate structured data
  const generateStructuredData = () => {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AI Innovation Hub',
      url: 'https://zion.app',
      logo: 'https://zion.app/images/logo.png',
      description: 'Revolutionary AI solutions delivering unprecedented ROI and business transformation',
      sameAs: [
        'https://twitter.com/aiinnovationhub',
        'https://linkedin.com/company/ai-innovation-hub'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-AI-HUB',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English'
      }
    };

    if (structuredData) {
      return structuredData;
    }

    return baseStructuredData;
  };

  // Generate breadcrumb structured data
  const generateBreadcrumbStructuredData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://zion.app'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: section || 'Content',
          item: `https://zion.app/${section || 'content'}`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: canonicalUrl || 'https://zion.app'
        }
      ]
    };
  };

  // Generate article structured data
  const generateArticleStructuredData = () => {
    if (ogType !== 'article') return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      image: ogImage,
      author: {
        '@type': 'Person',
        name: author
      },
      publisher: {
        '@type': 'Organization',
        name: 'AI Innovation Hub',
        logo: {
          '@type': 'ImageObject',
          url: 'https://zion.app/images/logo.png'
        }
      },
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl || 'https://zion.app'
      },
      keywords: keywords.join(', '),
      articleSection: section,
      wordCount: description.split(' ').length
    };
  };

  // Generate FAQ structured data
  const generateFAQStructuredData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is AI Innovation Hub?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI Innovation Hub is a leading provider of revolutionary AI solutions that deliver unprecedented ROI and business transformation for enterprises worldwide.'
          }
        },
        {
          '@type': 'Question',
          name: 'What ROI can I expect from AI implementation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our AI solutions typically deliver 5,000% to 25,000% ROI within 12-18 months, with average annual savings of $12.8B to $45.2B for Fortune 500 companies.'
          }
        },
        {
          '@type': 'Question',
          name: 'How quickly can AI solutions be implemented?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our AI solutions can be implemented in 6-12 months, with 67% faster deployment compared to traditional solutions and 99.7% success rate.'
          }
        }
      ]
    };
  };

  // Generate local business structured data
  const generateLocalBusinessStructuredData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'AI Innovation Hub',
      description: 'Revolutionary AI solutions for enterprise transformation',
      url: 'https://zion.app',
      telephone: '+1-555-AI-HUB',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 AI Innovation Drive',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        postalCode: '94105',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 37.7749,
        longitude: -122.4194
      },
      openingHours: 'Mo-Fr 09:00-17:00',
      priceRange: '$$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150'
      }
    };
  };

  // Generate software application structured data
  const generateSoftwareApplicationStructuredData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'AI Innovation Platform',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, Cloud',
      description: 'Revolutionary AI platform delivering 5,000% to 25,000% ROI',
      url: 'https://zion.app',
      author: {
        '@type': 'Organization',
        name: 'AI Innovation Hub'
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150'
      },
      featureList: [
        '5,000% ROI Guarantee',
        'Real-time Analytics',
        'Predictive Intelligence',
        'Automated Decision Making',
        'Quantum AI Integration'
      ]
    };
  };

  // Set up performance monitoring
  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: canonicalUrl || window.location.href
      });
    }

    // Track Core Web Vitals
    if (typeof window !== 'undefined') {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            // Track LCP
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            // Track FID
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            // Track CLS
            console.log('CLS:', entry.value);
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
  }, [title, canonicalUrl]);

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="robots" content={robots} />
        <meta name="author" content={author} />
        <link rel="canonical" href={canonicalUrl || 'https://zion.app'} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl || 'https://zion.app'} />
        <meta property="og:site_name" content="AI Innovation Hub" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@aiinnovationhub" />
        <meta name="twitter:creator" content="@aiinnovationhub" />

        {/* Article Meta Tags */}
        {ogType === 'article' && (
          <>
            <meta property="article:author" content={author} />
            <meta property="article:published_time" content={publishedTime} />
            <meta property="article:modified_time" content={modifiedTime || publishedTime} />
            <meta property="article:section" content={section} />
            {tags.map((tag, index) => (
              <meta key={index} property="article:tag" content={tag} />
            ))}
          </>
        )}

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AI Innovation Hub" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData())
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbStructuredData())
          }}
        />
        {generateArticleStructuredData() && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateArticleStructuredData())
            }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQStructuredData())
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessStructuredData())
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateSoftwareApplicationStructuredData())
          }}
        />
      </Head>

      {/* Content */}
      {children}
    </>
  );
};

export default SEOOptimizer;