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
<<<<<<< HEAD

  structuredData?: object;
  additionalMeta?: Array<{ name: string; content: string }>;
  additionalLinks?: Array<{ rel: string; href: string }>;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
=======
  language?: string;
  alternateLanguages?: Array<{ lang: string; url: string }>;
  robots?: string;
  viewport?: string;
  themeColor?: string;
  manifest?: string;
  appleTouchIcon?: string;
  favicon?: string;
  msTileColor?: string;
  msConfig?: string;
>>>>>>> de64b7d36dddbc5b2729c5b6ebbba576107f3598
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
<<<<<<< HEAD
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

  return {
=======
  language = 'en',
  alternateLanguages = [],
  robots = 'index, follow',
  viewport = 'width=device-width, initial-scale=1, viewport-fit=cover',
  themeColor = '#22ddd2',
  manifest = '/manifest.json',
  appleTouchIcon = '/images/apple-touch-icon.png',
  favicon = '/favicon.ico',
  msTileColor = '#22ddd2',
  msConfig = '/browserconfig.xml'
}: SEOProps) {
  
  // Generate canonical URL
  const canonicalUrl = useMemo(() => {
    if (canonical) return canonical;
    if (typeof window !== 'undefined') {
      return window.location.origin + window.location.pathname;
    }
    return 'https://ziontechgroup.com';
  }, [canonical]);

  // Default structured data
  const defaultStructuredData = useMemo((): Record<string, any> => {
    const baseUrl = 'https://ziontechgroup.com';
    
    const organizationSchema: OrganizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: baseUrl,
      logo: `${baseUrl}/images/zion-logo.png`,
      description: 'Revolutionary AI & Technology Solutions Provider',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Innovation Drive',
        addressLocality: 'Tech City',
        addressRegion: 'CA',
        postalCode: '90210',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-123-4567',
        contactType: 'customer service',
        email: 'info@ziontechgroup.com'
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://facebook.com/ziontechgroup'
      ],
      foundingDate: '2020',
      numberOfEmployees: '100-500',
      industry: 'Technology'
    };

    const webSiteSchema: WebSiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zion Tech Group',
      url: baseUrl,
      description: 'Leading provider of cutting-edge AI and technology solutions',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/images/zion-logo.png`
        }
      }
    };

    const breadcrumbSchema: BreadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: title,
          item: canonicalUrl
        }
      ]
    };

    return {
>>>>>>> de64b7d36dddbc5b2729c5b6ebbba576107f3598
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
<<<<<<< HEAD

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

=======
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex' : robots} />
      {nofollow && <meta name="robots" content="nofollow" />}
      <meta name="language" content={language} />
      <meta name="viewport" content={viewport} />
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={msTileColor} />
      <meta name="msapplication-config" content={msConfig} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Alternate Languages */}
      {alternateLanguages.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}

      {/* Favicons */}
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <link rel="manifest" href={manifest} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={language} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Additional Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData.organization)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData.website)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData.breadcrumb)}
      </script>

      {/* Additional Structured Data for specific pages */}
      {finalStructuredData.article && (
        <script type="application/ld+json">
          {JSON.stringify(finalStructuredData.article)}
        </script>
      )}

      {finalStructuredData.product && (
        <script type="application/ld+json">
          {JSON.stringify(finalStructuredData.product)}
        </script>
      )}

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* Resource Hints */}
      <link rel="preload" href="/static/js/main.js" as="script" />
      <link rel="preload" href="/static/css/main.css" as="style" />
      
      {/* Critical CSS */}
      <style>
        {`
          /* Critical CSS for above-the-fold content */
          .bg-futuristic {
            background: linear-gradient(180deg, rgba(2,6,23,1) 0%, rgba(2,6,23,0.95) 100%);
          }
          
          .animate-fade-in {
            animation: fadeIn 220ms ease-out both;
          }
          
          .btn-futuristic {
            background: linear-gradient(135deg, #22ddd2 0%, #2e73ea 100%);
            transition: all 0.3s ease;
          }
          
          .btn-futuristic:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(34, 221, 210, 0.3);
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          /* High contrast mode */
          .high-contrast {
            --zion-cyan: #00ffff !important;
            --zion-purple: #ff00ff !important;
            --zion-blue: #0080ff !important;
            --zion-slate: #ffffff !important;
            --zion-slate-dark: #000000 !important;
          }
          
          .high-contrast * {
            background-color: var(--zion-slate-dark) !important;
            color: var(--zion-slate) !important;
            border-color: var(--zion-cyan) !important;
          }
          
          /* Reduced motion */
          .reduced-motion * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          /* Large text */
          .large-text {
            font-size: 1.2em !important;
          }
          
          /* Focus highlight */
          .focus-highlight *:focus {
            outline: 3px solid #22ddd2 !important;
            outline-offset: 2px !important;
          }
        `}
      </style>
>>>>>>> de64b7d36dddbc5b2729c5b6ebbba576107f3598
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
