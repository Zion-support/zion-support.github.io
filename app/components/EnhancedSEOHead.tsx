'use client';

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: Record<string, unknown>;
  noIndex?: boolean;
  noFollow?: boolean;
  locale?: string;
  alternateLanguages?: Array<{ lang: string; url: string }>;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = [
    'AI solutions',
    'quantum computing',
    'autonomous systems',
    'digital transformation',
    'enterprise AI',
    'machine learning',
    'artificial intelligence',
    'technology consulting',
    'IT services',
    'cloud computing',
    'cybersecurity',
    'data analytics'
  ],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  noFollow = false,
  locale = 'en_US',
  alternateLanguages = [],
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section = 'Technology',
  tags = ['AI', 'Technology', 'Innovation']
}) => {
  // Generate structured data
  const generateStructuredData = () => {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com',
        availableLanguage: ['English']
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://github.com/ziontechgroup'
      ],
      foundingDate: '2020',
      numberOfEmployees: '50-100',
      industry: 'Technology',
      services: [
        'AI Solutions',
        'Quantum Computing',
        'Autonomous Systems',
        'Digital Transformation',
        'Cloud Computing',
        'Cybersecurity'
      ]
    };

    const websiteStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      description: description,
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        logo: 'https://ziontechgroup.com/logo.png'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ziontechgroup.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    };

    const breadcrumbStructuredData = {
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

    const faqStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Zion Tech Group offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zion Tech Group offers comprehensive AI solutions, quantum computing services, autonomous systems development, and digital transformation consulting for enterprises of all sizes.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can I get started with AI implementation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contact our team for a free consultation to assess your AI readiness and develop a customized implementation strategy tailored to your business needs.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you offer quantum computing solutions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide quantum computing consulting, algorithm development, and implementation services to help businesses prepare for the quantum advantage.'
          }
        }
      ]
    };

    return [baseStructuredData, websiteStructuredData, breadcrumbStructuredData, faqStructuredData, structuredData].filter(Boolean);
  };

  // Add structured data to page
  useEffect(() => {
    const structuredDataArray = generateStructuredData();
    
    structuredDataArray.forEach((data, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `structured-data-${index}`;
      script.textContent = JSON.stringify(data);
      
      // Remove existing data
      const existing = document.getElementById(`structured-data-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    // Add meta tags for better SEO
    const metaTags = [
      { name: 'robots', content: `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}` },
      { name: 'author', content: author },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#8b5cf6' },
      { name: 'msapplication-TileColor', content: '#8b5cf6' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
      { name: 'application-name', content: 'Zion Tech Group' },
      { name: 'msapplication-tooltip', content: 'Advanced AI and IT Solutions' },
      { name: 'msapplication-starturl', content: '/' },
      { property: 'og:type', content: ogType },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: locale },
      { property: 'og:updated_time', content: modifiedTime || new Date().toISOString() },
      { name: 'twitter:site', content: '@ziontechgroup' },
      { name: 'twitter:creator', content: '@ziontechgroup' },
      { name: 'twitter:domain', content: 'ziontechgroup.com' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-touch-fullscreen', content: 'yes' }
    ];

    metaTags.forEach(tag => {
      const existing = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
      if (existing) {
        existing.remove();
      }
      
      const meta = document.createElement('meta');
      if (tag.name) meta.setAttribute('name', tag.name);
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });

    // Add canonical URL
    if (canonicalUrl) {
      const existing = document.querySelector('link[rel="canonical"]');
      if (existing) {
        existing.remove();
      }
      
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    // Add alternate language links
    alternateLanguages.forEach(({ lang, url }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = url;
      document.head.appendChild(link);
    });

    // Add preconnect links for performance
    const preconnectLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ];

    preconnectLinks.forEach(href => {
      const existing = document.querySelector(`link[rel="preconnect"][href="${href}"]`);
      if (!existing) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

  }, [title, description, keywords, canonicalUrl, ogImage, ogType, twitterCard, structuredData, noIndex, noFollow, locale, alternateLanguages, author, publishedTime, modifiedTime, section, tags, generateStructuredData]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      {author && <meta property="article:author" content={author} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme */}
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
    </Helmet>
  );
};

export default EnhancedSEOHead;