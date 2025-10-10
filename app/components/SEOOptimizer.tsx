'use client';
import React, { useEffect } from 'react';
<<<<<<< HEAD
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  structuredData?: any;
  ogImage?: string;
  twitterCard?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - AI & IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation'],
  canonicalUrl = 'https://ziontechgroup.com',
  structuredData,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  twitterCard = 'summary_large_image'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords.join(', ');
      document.head.appendChild(meta);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    // Add structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: ogImage },
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
      if (meta) {
        meta.setAttribute('content', tag.content);
      } else {
        meta = document.createElement('meta');
        if (tag.property) {
          meta.setAttribute('property', tag.property);
        } else {
          meta.setAttribute('name', tag.name);
        }
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });
  }, [title, description, keywords, canonicalUrl, structuredData, ogImage, twitterCard]);

  return null;
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
        addressCountry: 'US'},
      contactPoint: {,
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com'},
      sameAs: [,
        'https://linkedin.com/company/zion-tech-group',
        'https: //twitter.com/ziontechgroup',
        'https://github.com/zion-tech-group'],


interface SEOOptimizerProps {/* TODO: Fix JSX expression */}
}

const,
  SEOOptimizer: React.FC<SEOOptimizerProps> = memo(({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */}
    }
    
    // Add breadcrumb structured data;
    addBreadcrumbStructuredData();
    
    // Add FAQ structured data;
    addFAQStructuredData();
    
    // Add organization structured data;
    addOrganizationStructuredData();
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  const updateMetaTag = (nam,
  e: string, conten,
  t: string, attribut)
  e: string = 'name') => {/* TODO: Fix JSX expression */}
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {/* TODO: Fix JSX expression */}
    }
    meta.setAttribute('content', content);
  };

  const updateCanonicalUrl = (ur)
  l: string) => {/* TODO: Fix JSX expression */}
    }
    canonical.setAttribute('href', url);
  };

  const addStructuredData = (dat)
  a: any) => {/* TODO: Fix JSX expression */}
    }
    document.head.appendChild(script);
  };

  const addBreadcrumbStructuredData = () => {/* TODO: Fix JSX expression */}
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    script.id = 'breadcrumb-structured-data';
    // Remove existing breadcrumb data;
    const existing = document.getElementById('breadcrumb-structured-data');
    if (existing) {/* TODO: Fix JSX expression */}
    }
    document.head.appendChild(script);
  };

  const addFAQStructuredData = () => {/* TODO: Fix JSX expression */}
          }
        },
        {/* TODO: Fix JSX expression */}
          }
        },
        {/* TODO: Fix JSX expression */}
          }
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqData);
    script.id = 'faq-structured-data';
    // Remove existing FAQ data;
    const existing = document.getElementById('faq-structured-data');
    if (existing) {/* TODO: Fix JSX expression */}
    }
    document.head.appendChild(script);
  };

  const addOrganizationStructuredData = () => {/* TODO: Fix JSX expression */}
      },
      'address': {/* TODO: Fix JSX expression */}
      },
      'sameAs': [
        'http,
  s://twitter.com/ziontechgroup',
        'http,
  s://linkedin.com/company/ziontechgroup'
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(organizationData);
    script.id = 'organization-structured-data';
    // Remove existing organization data;
    const existing = document.getElementById('organization-structured-data');
    if (existing) {/* TODO: Fix JSX expression */}

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
      <meta name="robots" content="index, follow" >{/* Open Graph */}</meta>
      </meta><meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={seoData.canonical} />
      <meta property="og:image" content={seoData.ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" >{/* Twitter Card */}</meta>
      </meta><meta name="twitter:card" content={seoData.twitterCard} />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.ogImage} >{/* Canonical */}</meta>
      </meta><link rel="canonical" href={seoData.canonical} />
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
=======

const SEOOptimizer: React.FC = () => {
  useEffect(() => {
    // Add canonical URL if not present
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = window.location.href;
      document.head.appendChild(canonical);
    }

    // Add meta viewport if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }

    // Add meta charset if not present
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'utf-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // Add meta description if not present
    if (!document.querySelector('meta[name="description"]')) {
      const description = document.createElement('meta');
      description.name = 'description';
      description.content = 'Zion Tech Group - Advanced AI & IT Solutions. Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions.';
      document.head.appendChild(description);
    }

    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Zion Tech Group - AI & IT Solutions' }
    ];

    ogTags.forEach(tag => {
      if (!document.querySelector(`meta[property="${tag.property}"]`)) {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Add Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@ziontechgroup' },
      { name: 'twitter:creator', content: '@ziontechgroup' }
    ];

    twitterTags.forEach(tag => {
      if (!document.querySelector(`meta[name="${tag.name}"]`)) {
        const meta = document.createElement('meta');
        meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Add structured data for breadcrumbs
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ziontechgroup.com"
        }
      ]
    };

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    // Add performance hints
    const performanceHints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
    ];

    performanceHints.forEach(hint => {
      if (!document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`)) {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossorigin) {
          link.crossOrigin = hint.crossorigin;
        }
        document.head.appendChild(link);
      }
    });

    // Add robots meta tag
    if (!document.querySelector('meta[name="robots"]')) {
      const robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
      document.head.appendChild(robots);
    }

    // Add theme color
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      themeColor.content = '#0f172a';
      document.head.appendChild(themeColor);
    }

    // Add apple-touch-icon
    if (!document.querySelector('link[rel="apple-touch-icon"]')) {
      const appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      appleTouchIcon.sizes = '180x180';
      appleTouchIcon.href = '/apple-touch-icon.png';
      document.head.appendChild(appleTouchIcon);
    }

    // Add favicon
    if (!document.querySelector('link[rel="icon"]')) {
      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/x-icon';
      favicon.href = '/favicon.ico';
      document.head.appendChild(favicon);
    }

  }, []);

  return null; // This component doesn't render anything
>>>>>>> origin/resolve-merge-conflicts
};

export default SEOOptimizer;
