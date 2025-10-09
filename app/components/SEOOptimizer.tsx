'use client';
import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  structuredData?: any;
  page?: string;
  seoData?: any;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = memo(({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/og-image.png',
  ogType = 'website',
  noIndex = false,
  structuredData,
  page = 'home',
  seoData = {}
}) => {
  const defaultSEOData = {
    title: 'Zion Tech Group - AI & IT Solutions',
    description: 'Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology.',
    keywords: ['AI', 'artificial intelligence', 'enterprise solutions', 'digital transformation', 'IT services'],
    canonical: 'https://ziontechgroup.com',
    ogImage: '/og-image.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: 'Leading provider of AI-powered enterprise solutions and digital transformation services',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      },
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup'
      ],
      offers: {
        '@type': 'Offer',
        description: 'AI and IT Solutions'
      }
    }
  };

  useEffect(() => {
    // Update meta tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    
    // Update canonical URL
    if (canonicalUrl) {
      updateCanonicalUrl(canonicalUrl);
    }
    
    // Add structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }
    
    // Add breadcrumb structured data
    addBreadcrumbStructuredData();
    
    // Add FAQ structured data
    addFAQStructuredData();
    
    // Add organization structured data
    addOrganizationStructuredData();
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  const updateCanonicalUrl = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  };

  const addStructuredData = (data: any) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

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
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: page.charAt(0).toUpperCase() + page.slice(1),
          item: `https://ziontechgroup.com/${page}`
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    script.id = 'breadcrumb-structured-data';
    // Remove existing breadcrumb data
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
          name: 'What AI services does Zion Tech Group offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer comprehensive AI solutions including machine learning, natural language processing, computer vision, and autonomous systems.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can AI improve my business ROI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our AI solutions typically deliver 300% ROI through automation, improved efficiency, and data-driven insights.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide cybersecurity services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we offer comprehensive cybersecurity solutions including threat detection, incident response, and security audits.'
          }
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqData);
    script.id = 'faq-structured-data';
    // Remove existing FAQ data
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
      'name': 'Zion Tech Group',
      'description': 'Leading provider of AI-powered enterprise solutions and digital transformation services',
      'url': 'https://ziontechgroup.com',
      'logo': 'https://ziontechgroup.com/logo.png',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'US'
      },
      'sameAs': [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup'
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(organizationData);
    script.id = 'organization-structured-data';
    // Remove existing organization data
    const existing = document.getElementById('organization-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };

  const mergedSEOData = { ...defaultSEOData, ...seoData };

  useEffect(() => {
    // Log SEO optimization
    console.log('SEO optimization applied', { 
      page, 
      title: mergedSEOData.title,
      description: mergedSEOData.description 
    });

    // Track page view for analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: mergedSEOData.title,
        page_location: mergedSEOData.canonical,
        custom_map: {
          page_type: page
        }
      });
    }
  }, [mergedSEOData, page]);

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