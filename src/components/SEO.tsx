import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: Record<string, any>;
  noindex?: boolean;
  nofollow?: boolean;

  structuredData?: object;
  additionalMeta?: Array<{ name: string; content: string }>;
  additionalLinks?: Array<{ rel: string; href: string }>;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
>>>>>>> cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-5ff9
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

export function SEO({
  title = 'Zion Tech Group - Revolutionary AI & Technology Solutions',
  description = 'Leading provider of cutting-edge AI, cloud computing, and digital transformation services. Transform your business with Zion Tech Group\'s innovative solutions.',
  keywords = [
    'AI services',
    'cloud computing',
    'digital transformation',
    'technology solutions',
    'business intelligence',
    'machine learning',
    'data analytics',
    'IT infrastructure',
    'cybersecurity',
    'quantum computing',
    'IoT solutions',
    'blockchain technology',
    'Zion Tech Group'
  ],
  author = 'Zion Tech Group',
  canonical = '',
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  structuredData,
  additionalMeta = [],
  additionalLinks = [],
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  // Default values
  const defaultOgImage = ogImage || '/images/zion-tech-group-og-image.jpg';
  const defaultOgUrl = ogUrl || window.location.href;
  const defaultCanonicalUrl = canonicalUrl || window.location.href;
  
  // Enhanced title with brand
  const enhancedTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  
  // Enhanced description
  const enhancedDescription = description.length > 160 
    ? `${description.substring(0, 157)}...` 
    : description;

  // Default keywords if not provided
  const defaultKeywords = keywords || 'AI, artificial intelligence, technology, business solutions, Zion Tech Group, digital transformation, cloud computing, data analytics, IT infrastructure, micro SaaS, digital twin, enterprise software, machine learning, cybersecurity, DevOps, cloud infrastructure';

  // Generate structured data for organization
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "alternateName": "Zion Tech",
    "url": "https://ziontechgroup.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
      "width": "300",
      "height": "100"
    },
    "description": "Leading provider of AI-powered business solutions and comprehensive technology services for enterprise digital transformation",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "United States",
      "addressRegion": "Global"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Data Analytics",
      "Digital Transformation",
      "Cybersecurity",
      "DevOps",
      "Enterprise Software"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Business Intelligence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud & DevOps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity"
          }
        }
      ]
    }
  };

  // Generate structured data for website
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "AI-powered business solutions and comprehensive technology services for enterprise digital transformation",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"

  // Generate structured data for local business
  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Zion Tech Group",
    "description": "AI-powered business solutions and technology services",
    "url": "https://ziontechgroup.com",
    "telephone": "+1-800-ZION-TECH",
    "email": "info@ziontechgroup.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "United States"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.7749",
      "longitude": "-122.4194"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services"
    }
  };

  // Combine structured data
  const combinedStructuredData = [
    organizationStructuredData,
    websiteStructuredData,
    localBusinessStructuredData,
    ...(structuredData ? [structuredData] : [])
  ];

  // Additional meta tags for better SEO
  const enhancedAdditionalMeta = [
    ...additionalMeta,
    { name: 'robots', content: `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}` },
    { name: 'author', content: author },
    { name: 'language', content: 'English' },
    { name: 'revisit-after', content: '7 days' },
    { name: 'distribution', content: 'global' },
    { name: 'rating', content: 'general' },
    { name: 'theme-color', content: '#06b6d4' },
    { name: 'msapplication-TileColor', content: '#06b6d4' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
    { name: 'application-name', content: 'Zion Tech Group' },
    { name: 'format-detection', content: 'telephone=no' },
    ...(tags.map(tag => ({ name: 'article:tag', content: tag }))),
    ...(section ? [{ name: 'article:section', content: section }] : []),
    ...(publishedTime ? [{ name: 'article:published_time', content: publishedTime }] : []),
    ...(modifiedTime ? [{ name: 'article:modified_time', content: modifiedTime }] : [])
  ];

  // Additional links for better SEO and performance
  const enhancedAdditionalLinks = [
    ...additionalLinks,
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
    { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#06b6d4' }
  ];
>>>>>>> cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-5ff9

    return {
      organization: organizationSchema,
      website: webSiteSchema,
      breadcrumb: breadcrumbSchema
    };
  }, [title, canonicalUrl]);

  // Merge custom structured data with defaults
  const finalStructuredData = useMemo(() => {
    if (structuredData) {
      return { ...defaultStructuredData, ...structuredData };
    }
    return defaultStructuredData;
  }, [structuredData, defaultStructuredData]);

  // Performance monitoring
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('performance' in window) {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          console.log('FCP:', fcpEntry.startTime);
          // Send to analytics
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'timing_complete', {
              name: 'fcp',
              value: Math.round(fcpEntry.startTime)
            });
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          console.log('LCP:', lastEntry.startTime);
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'timing_complete', {
              name: 'lcp',
              value: Math.round(lastEntry.startTime)
            });
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input') {
            const fid = (entry as any).processingStart - entry.startTime;
            console.log('FID:', fid);
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'timing_complete', {
                name: 'fid',
                value: Math.round(fid)
              });
            }
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'timing_complete', {
            name: 'cls',
            value: Math.round(clsValue * 1000)
          });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // Preload critical resources
  useEffect(() => {
    // Preload critical fonts
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap',
      'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap'
    ];

    criticalFonts.forEach(fontUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = fontUrl;
      link.as = 'style';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Preload critical images
    const criticalImages = [
      '/images/zion-logo.png',
      '/images/hero-bg.jpg'
    ];

    criticalImages.forEach(imageUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = imageUrl;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, []);

  return (
    <Helmet>
      {/* Basic Meta Tags */}

      <title>{enhancedTitle}</title>
      <meta name="description" content={enhancedDescription} />
      <meta name="keywords" content={defaultKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={defaultCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={enhancedTitle} />
      <meta property="og:description" content={enhancedDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={defaultOgUrl} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Zion Tech Group - AI-Powered Business Solutions" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={enhancedTitle} />
      <meta name="twitter:description" content={enhancedDescription} />
      <meta name="twitter:image" content={defaultOgImage} />
      <meta name="twitter:image:alt" content="Zion Tech Group - AI-Powered Business Solutions" />
      
      {/* Additional Meta Tags */}
      {enhancedAdditionalMeta.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} />
      ))}
      
      {/* Additional Links */}
      {enhancedAdditionalLinks.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} {...(link.type && { type: link.type })} {...(link.sizes && { sizes: link.sizes })} {...(link.color && { color: link.color })} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(combinedStructuredData)}
      </script>
      
      {/* Performance Optimizations */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'self';" />

    </Helmet>
  );
}

// SEO Hook for dynamic updates
export function useSEO(seoProps: SEOProps) {
  const [currentSEO, setCurrentSEO] = React.useState(seoProps);

  const updateSEO = React.useCallback((newProps: Partial<SEOProps>) => {
    setCurrentSEO(prev => ({ ...prev, ...newProps }));
  }, []);

  return { currentSEO, updateSEO };
}

// SEO Analytics Hook
export function useSEOAnalytics() {
  const trackPageView = React.useCallback((page: string, title: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: window.location.href,
        page_path: page
      });
    }
  }, []);

  const trackEvent = React.useCallback((action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }, []);

  return { trackPageView, trackEvent };
}
