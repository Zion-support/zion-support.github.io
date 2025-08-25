import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  locale?: string;
  alternateLocales?: string[];
}

interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    '@type': string;
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs: string[];
  foundingDate: string;
  numberOfEmployees: string;
  industry: string;
  serviceArea: {
    '@type': string;
    name: string;
  };
}

interface WebSiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
  potentialAction: {
    '@type': string;
    target: string;
    'query-input': string;
  };
  publisher: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
}

interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

interface ServiceSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: {
    '@type': string;
    name: string;
  };
  serviceType: string;
  category: string;
}

const defaultSEO = {
  title: 'Zion Tech Group - AI-Powered Business Solutions & IT Services',
  description: 'Transform your business with cutting-edge AI solutions, comprehensive IT services, and innovative micro-SaaS platforms. Expert consulting for digital transformation.',
  keywords: 'AI solutions, IT services, digital transformation, micro-SaaS, business automation, cloud infrastructure, cybersecurity, DevOps',
  image: '/images/zion-tech-group-og.jpg',
  url: 'https://ziontechgroup.com',
  type: 'website' as const,
  author: 'Zion Tech Group',
  locale: 'en_US',
  alternateLocales: ['en_CA', 'en_GB'],
};

export const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
  canonical,
  noindex = false,
  nofollow = false,
  locale,
  alternateLocales,
}) => {
  const seo = {
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    url: url || defaultSEO.url,
    type: type || defaultSEO.type,
    author: author || defaultSEO.author,
    locale: locale || defaultSEO.locale,
    alternateLocales: alternateLocales || defaultSEO.alternateLocales,
  };

  // Organization Schema
  const organizationSchema: OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    description: 'Leading provider of AI-powered business solutions, IT services, and innovative technology consulting.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Technology Drive',
      addressLocality: 'Wilmington',
      addressRegion: 'DE',
      postalCode: '19801',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com',
    },
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ziontechgroup',
      'https://facebook.com/ziontechgroup',
    ],
    foundingDate: '2015',
    numberOfEmployees: '50-100',
    industry: 'Information Technology',
    serviceArea: {
      '@type': 'Country',
      name: 'United States',
    },
  };

  // Website Schema
  const websiteSchema: WebSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    description: 'AI-powered business solutions and IT services for modern enterprises.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ziontechgroup.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
      },
    },
  };

  // Breadcrumb Schema
  const generateBreadcrumbs = (): BreadcrumbSchema => {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const breadcrumbs = pathSegments.map((segment, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      item: `https://ziontechgroup.com/${pathSegments.slice(0, index + 1).join('/')}`,
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ziontechgroup.com',
        },
        ...breadcrumbs,
      ],
    };
  };

  // Service Schema (if applicable)
  const generateServiceSchema = (): ServiceSchema | null => {
    if (type === 'service' && section) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: seo.title,
        description: seo.description,
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        serviceType: section,
        category: 'Technology Services',
      };
    }
    return null;
  };

  // Article Schema (if applicable)
  const generateArticleSchema = () => {
    if (type === 'article' && publishedTime) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: seo.title,
        description: seo.description,
        image: seo.image,
        author: {
          '@type': 'Organization',
          name: seo.author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
          },
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': seo.url,
        },
        articleSection: section,
        keywords: tags?.join(', '),
      };
    }
    return null;
  };

  // Performance optimizations
  useEffect(() => {
    // Preconnect to external domains
    const preconnectLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
    ];

    preconnectLinks.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for additional domains
    const dnsPrefetchLinks = [
      'https://cdn.jsdelivr.net',
      'https://unpkg.com',
      'https://cdnjs.cloudflare.com',
    ];

    dnsPrefetchLinks.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      const preconnectElements = document.querySelectorAll('link[rel="preconnect"]');
      const dnsPrefetchElements = document.querySelectorAll('link[rel="dns-prefetch"]');
      
      preconnectElements.forEach(el => el.remove());
      dnsPrefetchElements.forEach(el => el.remove());
    };
  }, []);

  const structuredData = [
    organizationSchema,
    websiteSchema,
    generateBreadcrumbs(),
    generateServiceSchema(),
    generateArticleSchema(),
  ].filter(Boolean);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || seo.url} />
      
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {noindex && nofollow && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Language and Locale */}
      <meta property="og:locale" content={seo.locale} />
      {seo.alternateLocales.map(loc => (
        <meta key={loc} property="og:locale:alternate" content={loc} />
      ))}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={seo.title} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.title} />
      
      {/* Article Specific Meta Tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags?.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Performance Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Theme and Color Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional Performance Optimizations */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/css/tailwind.css" as="style" />
      <link rel="preload" href="/js/main.js" as="script" />
      
      {/* Service Worker */}
      <script>
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
        `}
      </script>
      
      {/* Performance Monitoring */}
      <script>
        {`
          // Performance monitoring
          window.addEventListener('load', function() {
            if ('performance' in window) {
              const perfData = performance.getEntriesByType('navigation')[0];
              if (perfData) {
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
                
                // Send to analytics if available
                if (window.gtag) {
                  window.gtag('event', 'timing_complete', {
                    name: 'load',
                    value: Math.round(loadTime),
                    event_category: 'Performance'
                  });
                  
                  window.gtag('event', 'timing_complete', {
                    name: 'dom_content_loaded',
                    value: Math.round(domContentLoaded),
                    event_category: 'Performance'
                  });
                }
              }
            }
          });
        `}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;