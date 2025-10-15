import React, { useEffect, useCallback } from 'react';

interface SEOOptimizerProps {
  enableStructuredData?: boolean;
  enableMetaTags?: boolean;
  enableSitemap?: boolean;
  enableRobotsTxt?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  enableStructuredData = true,
  enableMetaTags = true,
  enableSitemap = true,
  enableRobotsTxt = true
}) => {
  const addStructuredData = useCallback(() => {
    if (!enableStructuredData) return;

    // Remove existing structured data
    const existingScript = document.querySelector('#seo-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services",
      "url": "https://ziontechgroup.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo.png",
        "width": 200,
        "height": 200
      },
      "image": "https://ziontechgroup.com/og-image.jpg",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-302-464-0950",
          "contactType": "customer service",
          "email": "kleber@ziontechgroup.com",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+1-302-464-0950",
          "contactType": "sales",
          "email": "sales@ziontechgroup.com",
          "availableLanguage": "English"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "foundingDate": "2020",
      "numberOfEmployees": "10-50",
      "industry": "Information Technology",
      "services": [
        "AI Solutions",
        "Cybersecurity",
        "Cloud Infrastructure",
        "Digital Transformation",
        "IT Consulting",
        "Software Development"
      ],
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup",
        "https://github.com/ziontechgroup",
        "https://facebook.com/ziontechgroup"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI and IT Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Solutions",
              "description": "Advanced artificial intelligence and machine learning solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cybersecurity",
              "description": "Comprehensive security solutions to protect digital assets"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Infrastructure",
              "description": "Scalable cloud solutions and infrastructure management"
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.id = 'seo-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [enableStructuredData]);

  const addMetaTags = useCallback(() => {
    if (!enableMetaTags) return;

    const metaTags = [
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' },
      { name: 'author', content: 'Zion Tech Group' },
      { name: 'publisher', content: 'Zion Tech Group' },
      { name: 'theme-color', content: '#1e293b' },
      { name: 'msapplication-TileColor', content: '#1e293b' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:locale:alternate', content: 'en_GB' },
      { name: 'twitter:site', content: '@ziontechgroup' },
      { name: 'twitter:creator', content: '@ziontechgroup' },
      { name: 'twitter:domain', content: 'ziontechgroup.com' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: 'Zion Tech Group' },
      { name: 'msapplication-tooltip', content: 'Zion Tech Group - AI and IT Solutions' },
      { name: 'msapplication-starturl', content: '/' },
      { name: 'msapplication-navbutton-color', content: '#1e293b' },
      { name: 'msapplication-TileImage', content: '/mstile-144x144.png' }
    ];

    metaTags.forEach(tag => {
      const selector = Object.keys(tag).map(key => `[${key}="${tag[key]}"]`).join('');
      const existingMeta = document.querySelector(`meta${selector}`);
      
      if (!existingMeta) {
        const meta = document.createElement('meta');
        Object.entries(tag).forEach(([key, value]) => {
          meta.setAttribute(key, value);
        });
        document.head.appendChild(meta);
      }
    });
  }, [enableMetaTags]);

  const addSitemap = useCallback(() => {
    if (!enableSitemap) return;

    // Add sitemap link
    const existingSitemap = document.querySelector('link[rel="sitemap"]');
    if (!existingSitemap) {
      const sitemapLink = document.createElement('link');
      sitemapLink.rel = 'sitemap';
      sitemapLink.type = 'application/xml';
      sitemapLink.href = '/sitemap.xml';
      document.head.appendChild(sitemapLink);
    }
  }, [enableSitemap]);

  const addRobotsTxt = useCallback(() => {
    if (!enableRobotsTxt) return;

    // Add robots.txt link
    const existingRobots = document.querySelector('link[rel="robots"]');
    if (!existingRobots) {
      const robotsLink = document.createElement('link');
      robotsLink.rel = 'robots';
      robotsLink.href = '/robots.txt';
      document.head.appendChild(robotsLink);
    }
  }, [enableRobotsTxt]);

  const addPerformanceHints = useCallback(() => {
    // Add DNS prefetch for external resources
    const dnsPrefetchUrls = [
      '//fonts.googleapis.com',
      '//fonts.gstatic.com',
      '//www.google-analytics.com',
      '//www.googletagmanager.com'
    ];

    dnsPrefetchUrls.forEach(url => {
      const existingPrefetch = document.querySelector(`link[rel="dns-prefetch"][href="${url}"]`);
      if (!existingPrefetch) {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'dns-prefetch';
        prefetchLink.href = url;
        document.head.appendChild(prefetchLink);
      }
    });

    // Add preconnect for critical resources
    const preconnectUrls = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectUrls.forEach(url => {
      const existingPreconnect = document.querySelector(`link[rel="preconnect"][href="${url}"]`);
      if (!existingPreconnect) {
        const preconnectLink = document.createElement('link');
        preconnectLink.rel = 'preconnect';
        preconnectLink.href = url;
        preconnectLink.crossOrigin = 'anonymous';
        document.head.appendChild(preconnectLink);
      }
    });
  }, []);

  const addSecurityHeaders = useCallback(() => {
    // Add security-related meta tags
    const securityTags = [
      { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
      { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
      { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
      { 'http-equiv': 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { name: 'referrer', content: 'strict-origin-when-cross-origin' }
    ];

    securityTags.forEach(tag => {
      const selector = Object.keys(tag).map(key => `[${key}="${tag[key]}"]`).join('');
      const existingMeta = document.querySelector(`meta${selector}`);
      
      if (!existingMeta) {
        const meta = document.createElement('meta');
        Object.entries(tag).forEach(([key, value]) => {
          meta.setAttribute(key, value);
        });
        document.head.appendChild(meta);
      }
    });
  }, []);

  useEffect(() => {
    addStructuredData();
    addMetaTags();
    addSitemap();
    addRobotsTxt();
    addPerformanceHints();
    addSecurityHeaders();

    return () => {
      // Cleanup structured data
      const existingScript = document.querySelector('#seo-structured-data');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [
    addStructuredData,
    addMetaTags,
    addSitemap,
    addRobotsTxt,
    addPerformanceHints,
    addSecurityHeaders
  ]);

  return null;
};

export default SEOOptimizer;
