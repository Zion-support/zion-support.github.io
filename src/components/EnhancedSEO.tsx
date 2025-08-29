import React, { useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  structuredData: any;
  metaTags: Array<{ name: string; content: string }>;
}

interface EnhancedSEOProps {
  data: SEOData;
  enableStructuredData?: boolean;
  enablePerformanceOptimization?: boolean;
  enableSocialMediaOptimization?: boolean;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  data,
  enableStructuredData = true,
  enablePerformanceOptimization = true,
  enableSocialMediaOptimization = true
}) => {
  const {
    title,
    description,
    keywords,
    canonical,
    ogImage,
    ogType,
    twitterCard,
    structuredData,
    metaTags
  } = data;

  const seoRef = useRef<HTMLDivElement>(null);

  // Generate enhanced meta description
  const generateMetaDescription = useCallback(() => {
    if (description.length > 160) {
      return description.substring(0, 157) + '...';
    }
    return description;
  }, [description]);

  // Generate enhanced title
  const generateTitle = useCallback(() => {
    const baseTitle = 'Zion Tech Group';
    if (title === baseTitle) {
      return title;
    }
    return `${title} | ${baseTitle}`;
  }, [title]);

  // Generate structured data for organization
  const generateOrganizationStructuredData = useCallback(() => {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Leading technology solutions provider specializing in AI, cloud computing, and digital transformation",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US",
        "addressLocality": "San Francisco",
        "addressRegion": "CA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "email": "info@ziontechgroup.com"
      },
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup",
        "https://facebook.com/ziontechgroup"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technology Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Business Intelligence",
              "description": "Machine learning and predictive analytics solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Infrastructure",
              "description": "Scalable cloud computing solutions"
            }
          }
        ]
      }
    };
  }, []);

  // Generate structured data for website
  const generateWebsiteStructuredData = useCallback(() => {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "description": "Leading technology solutions provider",
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ziontechgroup.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };
  }, []);

  // Generate breadcrumb structured data
  const generateBreadcrumbStructuredData = useCallback(() => {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ziontechgroup.com"
      }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        "item": `https://ziontechgroup.com${currentPath}`
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
  }, []);

  // Performance optimization for images
  const optimizeImages = useCallback(() => {
    if (!enablePerformanceOptimization) return;

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      // Add loading="lazy" for better performance
      img.setAttribute('loading', 'lazy');
      
      // Add decoding="async" for better rendering
      img.setAttribute('decoding', 'async');
      
      // Add fetchpriority for critical images
      if (img.classList.contains('hero-image') || img.classList.contains('above-fold')) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }, [enablePerformanceOptimization]);

  // Add resource hints for performance
  const addResourceHints = useCallback(() => {
    if (!enablePerformanceOptimization) return;

    // DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdn.jsdelivr.net',
      'api.ziontechgroup.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const criticalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    criticalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [enablePerformanceOptimization]);

  // Enhanced social media optimization
  const enhanceSocialMedia = useCallback(() => {
    if (!enableSocialMediaOptimization) return;

    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: generateTitle() },
      { property: 'og:description', content: generateMetaDescription() },
      { property: 'og:type', content: ogType || 'website' },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: ogImage || 'https://ziontechgroup.com/og-image.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: 'en_US' }
    ];

    // Add Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: twitterCard || 'summary_large_image' },
      { name: 'twitter:site', content: '@ziontechgroup' },
      { name: 'twitter:creator', content: '@ziontechgroup' },
      { name: 'twitter:title', content: generateTitle() },
      { name: 'twitter:description', content: generateMetaDescription() },
      { name: 'twitter:image', content: ogImage || 'https://ziontechgroup.com/twitter-image.jpg' }
    ];

    // Add meta tags to head
    [...ogTags, ...twitterTags].forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.property) {
        meta.setAttribute('property', tag.property);
      } else {
        meta.setAttribute('name', tag.name);
      }
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });
  }, [
    enableSocialMediaOptimization,
    generateTitle,
    generateMetaDescription,
    ogType,
    canonical,
    ogImage,
    twitterCard
  ]);

  useEffect(() => {
    // Apply performance optimizations
    if (enablePerformanceOptimization) {
      optimizeImages();
      addResourceHints();
    }

    // Apply social media optimizations
    if (enableSocialMediaOptimization) {
      enhanceSocialMedia();
    }
  }, [
    enablePerformanceOptimization,
    enableSocialMediaOptimization,
    optimizeImages,
    addResourceHints,
    enhanceSocialMedia
  ]);

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{generateTitle()}</title>
        <meta name="description" content={generateMetaDescription()} />
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="canonical" href={canonical} />
        
        {/* Viewport and Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        
        {/* Theme and Colors */}
        <meta name="theme-color" content="#06b6d4" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        
        {/* Security */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Performance */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
        
        {/* Custom Meta Tags */}
        {metaTags.map((tag, index) => (
          <meta key={index} name={tag.name} content={tag.content} />
        ))}
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/fonts/orbitron-v19-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/rajdhani-v15-latin-500.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        {enableStructuredData && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                generateOrganizationStructuredData(),
                generateWebsiteStructuredData(),
                generateBreadcrumbStructuredData(),
                structuredData
              ].filter(Boolean)
            })}
          </script>
        )}
      </Helmet>
      
      {/* Hidden SEO content for screen readers */}
      <div ref={seoRef} className="sr-only" aria-hidden="true">
        <h1>{title}</h1>
        <p>{description}</p>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            {window.location.pathname.split('/').filter(Boolean).map((segment, index) => (
              <li key={index}>
                <a href={`/${segment}`}>
                  {segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </>
  );
};