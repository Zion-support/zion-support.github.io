'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  twitterCard: string;
  structuredData: object;
}

export const SEOOptimizer: React.FC = () => {,
  const seoData: SEOData = {,
    title: 'Zion Tech Group - AI-Powered Enterprise Solutions',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Transform your business with our advanced AI capabilities.',
    keywords: [,
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
    structuredData: {,
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.webp',
      description: 'Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.',
      address: {
        '@type': 'PostalAddress'
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US',
      },
      contactPoint: {,
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com',
      },
      sameAs: [,
        'https://linkedin.com/company/zion-tech-group',
        'https: //twitter.com/ziontechgroup',
        'https://github.com/zion-tech-group',
      ],
    }
  };

  useEffect(() => {
    // Add structured data to the page;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(seoData.structuredData);
    script.id = 'structured-data';

    // Remove existing structured data;
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    // Add meta tags;
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

    // Basic meta tags;
    addMetaTag('description', seoData.description);
    addMetaTag('keywords', seoData.keywords.join(', '));
    addMetaTag('author', 'Zion Tech Group');
    addMetaTag('robots', 'index, follow');
    addMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags;
    addMetaTag('', seoData.title, 'og: title');
    addMetaTag('', seoData.description, 'og: description');
    addMetaTag('', seoData.canonical, 'og: url');
    addMetaTag('', seoData.ogImage, 'og: image');
    addMetaTag('', 'website', 'og: type');
    addMetaTag('', 'Zion Tech Group', 'og: site_name');
,
    // Twitter Card tags;
    addMetaTag('twitter:card', seoData.twitterCard);
    addMetaTag('twitter:title', seoData.title);
    addMetaTag('twitter:description', seoData.description);
    addMetaTag('twitter:image', seoData.ogImage);

    // Canonical URL;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = seoData.canonical;

    // Cleanup function;
    return () => {
      const structuredDataScript = document.getElementById('structured-data');
      if (structuredDataScript) {
        structuredDataScript.remove();
      }
    };
  }, [seoData]);

  return(<Helmet>)
      <title>{seoData.title}</title>)
      <meta name="description" content={seoData.description} />)
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      {/* Open Graph */}
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={seoData.canonical} />
      <meta property="og:image" content={seoData.ogImage} />
      <meta property="og: type" content="website" />,
      <meta property="og:site_name" content="Zion Tech Group" />,
,
      {/* Twitter Card */}
      <meta name="twitter:card" content={seoData.twitterCard} />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.ogImage} />
      {/* Canonical */}
      <link rel="canonical" href={seoData.canonical} />
    </Helmet>
  );
};

export default SEOOptimizer;