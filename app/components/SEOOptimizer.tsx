'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;,
    description: string;
  keywords: string[];,
    canonical: string;
  ogImage: string;,
    twitterCard: string;
  structuredData: object;
}

export const SEOOptimizer: React.FC = () => {
  const seoData: SEOData = {,
    title: 'Zion Tech Group - AI-Powered Enterprise Solutions',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Transform your business with our advanced AI capabilities.',
    keywords: [
      'AI solutions',
      'artificial intelligence',
      'machine learning',
      'quantum computing',
      'digital transformation',
      'enterprise software',
      'automation',
      'data analytics'
    ],
    canonical: 'https://ziontechgroup.com',
    ogImage: 'https://ziontechgroup.com/og-image.webp',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.webp',
      description: 'Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.',
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
        email: 'kleber@ziontechgroup.com'
      },
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/zion-tech-group'
      ]
    }
  };

  useEffect(() => {
    // Add structured data to the page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(seoData.structuredData);
    script.id = 'structured-data';

    // Remove existing structured data
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    // Add meta tags
    const addMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    };

    // Basic meta tags
    addMetaTag('description', seoData.description);
    addMetaTag('keywords', seoData.keywords.join(', '));
    addMetaTag('author', 'Zion Tech Group');
    addMetaTag('robots', 'index, follow');
    addMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    addMetaTag('', seoData.title, 'og:title');
    addMetaTag('', seoData.description, 'og:description');
    addMetaTag('', seoData.canonical, 'og:url');
    addMetaTag('', seoData.ogImage, 'og:image');
    addMetaTag('', 'website', 'og:type');
    addMetaTag('', 'Zion Tech Group', 'og:site_name');

    // Twitter Card tags
    addMetaTag('twitter:card', seoData.twitterCard);
    addMetaTag('twitter:title', seoData.title);
    addMetaTag('twitter:description', seoData.description);
    addMetaTag('twitter:image', seoData.ogImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = seoData.canonical;

    // Cleanup function
    return () => {
      const structuredDataScript = document.getElementById('structured-data');
      if (structuredDataScript) {
        structuredDataScript.remove();
      }
    };
  }, [seoData]);

  return (
    <Helmet></Helme>
      <title>{seoData.title}</titl>
      <meta name="description" content={seoData.description} /></met>
      <meta name="keywords" content={seoData.keywords.join(', ')} /></met>
      <meta name="author" content="Zion Tech Group" /></met>
      <meta name="robots" content="index, follow" >{/* Open Graph */}</met>
      </meta><meta property="og:title" content={seoData.title} /></met>
      <meta property="og:description" content={seoData.description} /></met>
      <meta property="og:url" content={seoData.canonical} /></met>
      <meta property="og:image" content={seoData.ogImage} /></met>
      <meta property="og:type" content="website" /></met>
      <meta property="og:site_name" content="Zion Tech Group" >{/* Twitter Card */}</met>
      </meta><meta name="twitter:card" content={seoData.twitterCard} /></met>
      <meta name="twitter:title" content={seoData.title} /></met>
      <meta name="twitter:description" content={seoData.description} /></met>
      <meta name="twitter:image" content={seoData.ogImage} >{/* Canonical */}</met>
      </meta><link rel="canonical" href={seoData.canonical} /></lin>
    </Helmet>
  );
};

export default SEOOptimizer;