'use client';

import React, { memo, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  page?: string;
  seoData?: {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
    structuredData?: any;
  };
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = memo(({
  page = 'home',
  seoData = {}
}) => {
  const defaultSEOData = useMemo(() => ({
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI solutions, cybersecurity, and cloud infrastructure services.',
    keywords: ['AI', 'artificial intelligence', 'cybersecurity', 'cloud infrastructure', 'IT solutions'],
    canonical: 'https://ziontechgroup.com',
    ogImage: 'https://ziontechgroup.com/og-image.jpg',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: 'Leading provider of AI solutions, cybersecurity, and cloud infrastructure services.',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup'
      ]
    }
  }), []);

  const addBreadcrumbStructuredData = () => {
    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ziontechgroup.com'
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    script.id = 'breadcrumb-structured-data';
    const existing = document.getElementById('breadcrumb-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };

  const addFAQStructuredData = () => {
    const faqData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Zion Tech Group offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer AI solutions, cybersecurity services, and cloud infrastructure solutions.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can I contact Zion Tech Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact us through our website or email us directly.'
          }
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqData);
    script.id = 'faq-structured-data';
    const existing = document.getElementById('faq-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };

  const addOrganizationStructuredData = () => {
    const organizationData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: 'Leading provider of AI solutions, cybersecurity, and cloud infrastructure services.',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup'
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(organizationData);
    script.id = 'organization-structured-data';
    const existing = document.getElementById('organization-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };

  const mergedSEOData = { ...defaultSEOData, ...seoData };

  useEffect(() => {
    addBreadcrumbStructuredData();
    addFAQStructuredData();
    addOrganizationStructuredData();
  }, []);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{mergedSEOData.title}</title>
      <meta name="description" content={mergedSEOData.description} />
      <meta name="keywords" content={mergedSEOData.keywords.join(', ')} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <meta name="color-scheme" content="dark light" />

      {/* Canonical URL */}
      <link rel="canonical" href={mergedSEOData.canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={mergedSEOData.ogType} />
      <meta property="og:url" content={mergedSEOData.canonical} />
      <meta property="og:title" content={mergedSEOData.title} />
      <meta property="og:description" content={mergedSEOData.description} />
      <meta property="og:image" content={mergedSEOData.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content={mergedSEOData.twitterCard} />
      <meta property="twitter:url" content={mergedSEOData.canonical} />
      <meta property="twitter:title" content={mergedSEOData.title} />
      <meta property="twitter:description" content={mergedSEOData.description} />
      <meta property="twitter:image" content={mergedSEOData.ogImage} />
      <meta property="twitter:creator" content="@ziontechgroup" />
      <meta property="twitter:site" content="@ziontechgroup" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(mergedSEOData.structuredData)}
      </script>

      {/* Additional structured data for services */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI and IT Solutions',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          description: mergedSEOData.description,
          serviceType: 'Technology Services',
          areaServed: 'United States',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'AI and IT Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Solutions',
                  description: 'Advanced artificial intelligence solutions'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Cybersecurity',
                  description: 'Comprehensive cybersecurity solutions'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Cloud Infrastructure',
                  description: 'Scalable cloud infrastructure solutions'
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
});

SEOOptimizer.displayName = 'SEOOptimizer';
export default SEOOptimizer;