
'use client';
import React from 'react';



import React, { useEffect, memo, useCallback } from 'react';

interface ConsolidatedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  className?: string;
}

const ConsolidatedSEO: React.FC<ConsolidatedSEOProps> = memo(({
  title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.',
  keywords = 'AI solutions, IT services, cybersecurity, cloud computing, digital transformation',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  className = ''
}) => {
  // Add structured data
  const addStructuredData = useCallback(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: description,
      url: url,
      logo: image,
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://github.com/ziontechgroup'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Tech Street',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        postalCode: '94105',
        addressCountry: 'US'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [description, url, image]);

  // Add meta tags
  const addMetaTags = useCallback(() => {
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Zion Tech Group' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#3b82f6' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      Object.entries(tag).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      document.head.appendChild(meta);
    });
  }, [title, description, keywords, image, url, type]);

  // Add canonical URL
  const addCanonicalURL = useCallback(() => {
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = url;
    document.head.appendChild(canonical);
  }, [url]);

  // Add language attributes
  const addLanguageAttributes = useCallback(() => {
    document.documentElement.lang = 'en';
    document.documentElement.setAttribute('xml:lang', 'en');
  }, []);

  // Add sitemap reference
  const addSitemapReference = useCallback(() => {
    const sitemap = document.createElement('link');
    sitemap.rel = 'sitemap';
    sitemap.type = 'application/xml';
    sitemap.href = '/sitemap.xml';
    document.head.appendChild(sitemap);
  }, []);

  // Add robots.txt reference
  const addRobotsReference = useCallback(() => {
    const robots = document.createElement('link');
    robots.rel = 'robots';
    robots.href = '/robots.txt';
    document.head.appendChild(robots);
  }, []);

  // Add hreflang for internationalization
  const addHreflang = useCallback(() => {
    const hreflangTags = [
      { rel: 'alternate', hreflang: 'en', href: url },
      { rel: 'alternate', hreflang: 'x-default', href: url }
    ];

    hreflangTags.forEach(tag => {
      const link = document.createElement('link');
      Object.entries(tag).forEach(([key, value]) => {
        link.setAttribute(key, value);
      });
      document.head.appendChild(link);
    });
  }, [url]);

  useEffect(() => {
    addStructuredData();
    addMetaTags();
    addCanonicalURL();
    addLanguageAttributes();
    addSitemapReference();
    addRobotsReference();
    addHreflang();
  }, [
    addStructuredData,
    addMetaTags,
    addCanonicalURL,
    addLanguageAttributes,
    addSitemapReference,
    addRobotsReference,
    addHreflang
  ]);

  return (
    <div className={`consolidated-seo ${className}`} style={{ display: 'none' }}>
      {/* This component doesn't render anything visible */}
    </div>
  );
});

ConsolidatedSEO.displayName = 'ConsolidatedSEO';

export default ConsolidatedSEO;