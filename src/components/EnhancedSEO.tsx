import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useLocation } from 'react-router-dom';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d

interface SEOProps {
<<<<<<< HEAD
<<<<<<< HEAD
  title: string;
  description: string;
<<<<<<< HEAD
<<<<<<< HEAD
  keywords: string;
  type: 'website' | 'article' | 'product' | 'service';
  url: string;
  image?: string;
=======
  title?: string;
  description?: string;
  keywords?: string[];
>>>>>>> origin/main
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'service';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  robots?: string;
  language?: string;
  charset?: string;
  viewport?: string;
  themeColor?: string;
  manifest?: string;
  appleTouchIcon?: string;
  favicon?: string;
  msTileColor?: string;
  additionalMeta?: Array<{ name: string; content: string }>;
  additionalLinks?: Array<{ rel: string; href: string; type?: string; sizes?: string }>;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI-Powered Innovation & Enterprise IT Solutions',
  description = 'Transform your business with cutting-edge AI solutions, comprehensive IT services, and innovative micro SAAS applications. Expert consulting, cybersecurity, and digital transformation.',
  keywords = [
    'AI solutions',
    'artificial intelligence',
    'enterprise IT',
    'cybersecurity',
    'digital transformation',
    'micro SAAS',
    'cloud services',
    'IT consulting',
    'business automation',
    'quantum technology',
    'machine learning',
    'data analytics',
    'IT infrastructure',
    'DevOps',
    'enterprise software'
  ],
  author = 'Zion Tech Group',
  canonical,
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  robots,
  language = 'en',
  charset = 'utf-8',
  viewport = 'width=device-width, initial-scale=1, shrink-to-fit=no',
  themeColor = '#1e40af',
  manifest = '/manifest.json',
  appleTouchIcon = '/images/apple-touch-icon.png',
  favicon = '/favicon.ico',
  msTileColor = '#1e40af',
  additionalMeta = [],
  additionalLinks = []
}) => {
  const defaultStructuredData = {
=======

interface EnhancedSEOProps {
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
  title: string;
  description: string;
  keywords: string;
  type: 'website' | 'article' | 'product' | 'service';
  url: string;
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
<<<<<<< HEAD
<<<<<<< HEAD
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  locale?: string;
  alternateLocales?: string[];
=======
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  ogType?: 'website' | 'article' | 'product' | 'service';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: object;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f07c
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
<<<<<<< HEAD
    description: 'AI-Powered Innovation & Enterprise IT Solutions',
=======
    description: 'Leading provider of AI-powered business solutions, IT services, and innovative technology consulting.',
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f07c
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Drive',
      addressLocality: 'Wilmington',
      addressRegion: 'DE',
      postalCode: '19801',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
<<<<<<< HEAD
      email: 'kleber@ziontechgroup.com',
      availableLanguage: 'English'
=======
      email: 'info@ziontechgroup.com',
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f07c
    },
    sameAs: [
      'https://www.linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
<<<<<<< HEAD
      'https://github.com/Zion-Holdings',
      'https://www.youtube.com/@ziontechgroup'
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 39.7447,
        longitude: -75.5484
      },
      geoRadius: '50000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT Services & AI Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI-Powered Solutions',
            description: 'Artificial intelligence and machine learning services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise IT Services',
            description: 'Comprehensive IT infrastructure and consulting'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Micro SAAS Solutions',
            description: 'Custom software applications and platforms'
=======
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  ogLocale?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
}

export default function EnhancedSEO({
  title,
  description,
  keywords = 'AI, artificial intelligence, technology solutions, business automation, quantum computing, cybersecurity, cloud services, Zion Tech Group',
  image = '/images/zion-tech-group-og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = [],
  structuredData,
  canonicalUrl,
  noIndex = false,
  noFollow = false,
  ogLocale = 'en_US',
  twitterCard = 'summary_large_image'
}: SEOProps) {
  const fullTitle = `${title} | Zion Tech Group`;
  const fullUrl = canonicalUrl || `${url}${window.location.pathname}`;
  
  // Default structured data for Zion Tech Group
=======
  structuredData?: object;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords,
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
  type,
  url,
  image = '/images/zion-tech-group-og.jpg',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
<<<<<<< HEAD
  structuredData
}) => {
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  // Default structured data for organization
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
=======
  canonicalUrl,
  noindex = false,
  nofollow = false,
  ogType,
  twitterCard = 'summary_large_image',
  structuredData
}) => {
  const fullUrl = canonicalUrl || `https://ziontechgroup.com${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;
  
  // Default structured data for Zion Tech Group
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
<<<<<<< HEAD
<<<<<<< HEAD
    "description": "Leading provider of AI-powered technology solutions, quantum computing, and comprehensive IT services for modern businesses.",
    "foundingDate": "2015",
=======
    "description": "Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.",
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
=======
    "description": "Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.",
    "foundingDate": "2020",
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "Wilmington",
      "addressRegion": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
<<<<<<< HEAD
      "https://github.com/Zion-Holdings"
    ],
<<<<<<< HEAD
=======
    "foundingDate": "2015",
    "numberOfEmployees": "50-100",
    "serviceArea": "Worldwide",
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
=======
      "https://github.com/Zion-Holdings",
      "https://youtube.com/@ziontechgroup"
    ],
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
<<<<<<< HEAD
<<<<<<< HEAD
            "name": "AI Autonomous Systems",
            "description": "Advanced autonomous AI systems for business automation"
=======
            "name": "AI Solutions",
            "description": "AI-powered business intelligence and automation services"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
=======
            "name": "AI Business Intelligence",
            "description": "Transform data into actionable insights with our AI-powered analytics platform."
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
<<<<<<< HEAD
<<<<<<< HEAD
            "name": "Quantum Technology Solutions",
            "description": "Next-generation quantum computing platforms"
=======
            "name": "Cloud Infrastructure",
            "description": "Scalable cloud solutions designed for enterprise performance and security."
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
<<<<<<< HEAD
            "name": "Cybersecurity Services",
=======
            "name": "Cybersecurity",
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
            "description": "Comprehensive security and compliance solutions"
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Infrastructure",
            "description": "Scalable cloud and DevOps solutions"
=======
            "name": "Cybersecurity Solutions",
            "description": "Comprehensive security services to protect your digital assets and data."
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
          }
        }
      ]
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
  const finalStructuredData = structuredData || defaultStructuredData;
  const finalRobots = robots || `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;

  useEffect(() => {
    // Update document title for better accessibility
=======
  // Merge custom structured data with default
  const finalStructuredData = structuredData || defaultStructuredData;

  useEffect(() => {
    // Update page title for better UX
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
    document.title = title;
    
    // Update meta description for dynamic content
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
<<<<<<< HEAD
    }

    // Update canonical URL if provided
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      }
    }

    // Add structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(finalStructuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data script
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, canonical, finalStructuredData]);

  // Merge custom structured data
  const finalStructuredData = structuredData 
    ? { ...pageStructuredData, ...structuredData }
    : pageStructuredData;

  // Preload critical resources
  useEffect(() => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = '/src/index.css';
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.as = 'font';
    fontPreload.type = 'font/woff2';
    fontPreload.href = '/fonts/inter-var.woff2';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);

    // DNS prefetch for external domains
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = '//fonts.googleapis.com';
    document.head.appendChild(dnsPrefetch);

    // Preconnect to external domains
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect);

    return () => {
      document.head.removeChild(criticalCSS);
      document.head.removeChild(fontPreload);
      document.head.removeChild(dnsPrefetch);
      document.head.removeChild(preconnect);
=======
  keywords: string[];
  image?: string;
  url: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

interface EnhancedSEOProps {
  data: SEOData;
  structuredData?: object;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  data,
  structuredData,
  canonicalUrl,
  noindex = false,
  nofollow = false
}) => {
  const location = useLocation();
  const baseUrl = 'https://ziontechgroup.com';
  const fullUrl = canonicalUrl || `${baseUrl}${location.pathname}`;
  
  // Default meta tags
  const defaultMeta = {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    'theme-color': '#0f172a',
    'color-scheme': 'light dark',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Zion Tech Group',
    'application-name': 'Zion Tech Group',
    'msapplication-TileColor': '#0f172a',
    'msapplication-config': '/browserconfig.xml',
  };

  // Open Graph meta tags
  const openGraphMeta = {
    'og:title': data.title,
    'og:description': data.description,
    'og:type': data.type || 'website',
    'og:url': fullUrl,
    'og:image': data.image || `${baseUrl}/images/zion-tech-group-og.jpg`,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': data.title,
    'og:site_name': 'Zion Tech Group',
    'og:locale': 'en_US',
  };

  // Twitter Card meta tags
  const twitterMeta = {
    'twitter:card': 'summary_large_image',
    'twitter:site': '@ziontechgroup',
    'twitter:creator': '@ziontechgroup',
    'twitter:title': data.title,
    'twitter:description': data.description,
    'twitter:image': data.image || `${baseUrl}/images/zion-tech-group-twitter.jpg`,
    'twitter:image:alt': data.title,
  };

  // Article-specific meta tags
  const articleMeta = data.type === 'article' ? {
    'article:published_time': data.publishedTime,
    'article:modified_time': data.modifiedTime,
    'article:author': data.author,
    'article:section': data.section,
    'article:tag': data.tags?.join(', '),
  } : {};

  // Robots meta tag
  const robotsMeta = noindex || nofollow ? {
    'robots': `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`,
  } : {};

  // Performance and security meta tags
  const performanceMeta = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  };

  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/images/zion-tech-group-logo.svg', as: 'image' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//cdn.jsdelivr.net' },
    ];

    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link');
      Object.entries(link).forEach(([key, value]) => {
        if (value) linkElement.setAttribute(key, value);
      });
      document.head.appendChild(linkElement);
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f07c
    });

    // Cleanup function
    return () => {
<<<<<<< HEAD
      preloadLinks.forEach(link => {
        const existingLink = document.querySelector(`link[href="${link.href}"]`);
        if (existingLink) {
          existingLink.remove();
        }
      });
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d
    };
  }, []);
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f07c
=======
  // Merge default structured data with custom data
  const finalStructuredData = structuredData || defaultStructuredData;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
=======
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', fullUrl);
    }

    // Track page view for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-XXXXXXXXXX', {
        page_title: title,
        page_location: fullUrl
      });
    }
  }, [title, description, fullUrl]);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35

  return (
    <Helmet>
      {/* Basic Meta Tags */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={finalRobots} />
      <meta name="language" content={language} />
      <meta charSet={charset} />
      <meta name="viewport" content={viewport} />
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={msTileColor} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Favicon and Icons */}
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <link rel="manifest" href={manifest} />

=======
      <title>{fullTitle}</title>
=======
      <title>{title}</title>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Robots Meta */}
<<<<<<< HEAD
      {noIndex && <meta name="robots" content="noindex" />}
      {noFollow && <meta name="robots" content="nofollow" />}
=======
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
=======
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || seo.url} />
      
<<<<<<< HEAD
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {noindex && nofollow && <meta name="robots" content="noindex, nofollow" />}
=======
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
      
      {/* Language and Locale */}
      <meta property="og:locale" content={seo.locale} />
      {seo.alternateLocales.map(loc => (
        <meta key={loc} property="og:locale:alternate" content={loc} />
      ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f07c
      
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
      {/* Open Graph Meta Tags */}
<<<<<<< HEAD
<<<<<<< HEAD
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
<<<<<<< HEAD
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
      <meta property="og:image" content={ogImage} />
=======
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
=======
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType || type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={language} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
<<<<<<< HEAD
<<<<<<< HEAD
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} />
      ))}

      {/* Additional Links */}
      {additionalLinks.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} type={link.type} sizes={link.sizes} />
      ))}

=======
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Article-specific meta tags */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
<<<<<<< HEAD
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* DNS Prefetch for social media */}
      <link rel="dns-prefetch" href="https://www.linkedin.com" />
      <link rel="dns-prefetch" href="https://twitter.com" />
      <link rel="dns-prefetch" href="https://github.com" />
      <link rel="dns-prefetch" href="https://www.youtube.com" />

=======
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={ogLocale} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      
      {/* Article Specific Meta Tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Preconnect to External Domains for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
=======
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
<<<<<<< HEAD
      {/* Additional Performance Optimizations */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
<<<<<<< HEAD
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* Mobile App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="123 Innovation Drive" />
      <meta name="business:contact_data:locality" content="Wilmington" />
      <meta name="business:contact_data:region" content="DE" />
      <meta name="business:contact_data:postal_code" content="19801" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-302-464-0950" />
      <meta name="business:contact_data:email" content="kleber@ziontechgroup.com" />
<<<<<<< HEAD
=======
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords.join(', ')} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Default Meta Tags */}
      {Object.entries(defaultMeta).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}
      
      {/* Open Graph Meta Tags */}
      {Object.entries(openGraphMeta).map(([property, content]) => (
        <meta key={property} property={property} content={content} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      {Object.entries(twitterMeta).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}
      
      {/* Article Meta Tags */}
      {Object.entries(articleMeta).map(([property, content]) => (
        <meta key={property} property={property} content={content} />
      ))}
      
      {/* Robots Meta Tag */}
      {Object.entries(robotsMeta).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}
      
      {/* Performance and Security Meta Tags */}
      {Object.entries(performanceMeta).map(([httpEquiv, content]) => (
        <meta key={httpEquiv} httpEquiv={httpEquiv} content={content} />
      ))}
=======
      
      {/* PWA Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
<<<<<<< HEAD
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional SEO Enhancements */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      
      {/* Mobile and PWA Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Search Engine Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
      
      {/* Social Media Verification */}
      <meta name="facebook-domain-verification" content="your-verification-code" />
      <meta name="p:domain_verify" content="your-verification-code" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      
      {/* Critical CSS */}
      <style>
        {`
          /* Critical CSS for above-the-fold content */
          .critical-content {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
          
          .loading {
            opacity: 0;
            transform: translateY(20px);
          }
        `}
      </style>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d
=======

      {/* Service Information */}
      <meta name="service:name" content="AI-Powered Innovation & Enterprise IT Solutions" />
      <meta name="service:type" content="Technology Consulting" />
      <meta name="service:area" content="Delaware, United States" />

      {/* Verification Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />

      {/* Structured Data for Breadcrumbs */}
=======
      {/* Additional structured data for services */}
      {type === 'service' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": title,
            "description": description,
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "serviceType": "Technology Consulting",
            "category": "Business Services"
          })}
        </script>
      )}
      
      {/* Breadcrumb structured data */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://ziontechgroup.com'
            },
            {
<<<<<<< HEAD
              '@type': 'ListItem',
              position: 2,
              name: 'Services',
              item: 'https://ziontechgroup.com/services'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'AI Solutions',
              item: 'https://ziontechgroup.com/ai-solutions'
=======
              "@type": "ListItem",
              "position": 2,
              "name": type === 'service' ? 'Services' : type === 'article' ? 'Blog' : 'Page',
              "item": fullUrl
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
            }
          ]
        })}
      </script>

      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Zion Tech Group',
          image: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
          '@id': 'https://ziontechgroup.com',
          url: 'https://ziontechgroup.com',
          telephone: '+1-302-464-0950',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Innovation Drive',
            addressLocality: 'Wilmington',
            addressRegion: 'DE',
            postalCode: '19801',
            addressCountry: 'US'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 39.7447,
            longitude: -75.5484
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday'
            ],
            opens: '09:00',
            closes: '17:00'
          },
          sameAs: [
            'https://www.linkedin.com/company/ziontechgroup',
            'https://twitter.com/ziontechgroup',
            'https://github.com/Zion-Holdings'
          ]
        })}
      </script>
>>>>>>> origin/main
=======
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
=======
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={seo.title} />
      
<<<<<<< HEAD
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
=======
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
<<<<<<< HEAD
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f07c
    </Helmet>
  );
}
=======
      {/* Additional structured data for specific page types */}
      {type === 'article' && publishedTime && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": fullImageUrl,
            "author": {
              "@type": "Organization",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png"
              }
            },
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": fullUrl
            }
          })}
        </script>
      )}
      
      {/* Service structured data */}
      {type === 'service' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": title,
            "description": description,
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group"
            },
            "serviceType": section || "Technology Service",
            "areaServed": "Worldwide",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": fullUrl
            }
          })}
        </script>
      )}
=======
      {/* Organization structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
          "description": "Leading provider of AI-powered technology solutions and enterprise services.",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressLocality": "Wilmington",
            "addressRegion": "DE"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "sameAs": [
            "https://linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup",
            "https://github.com/Zion-Holdings",
            "https://youtube.com/@ziontechgroup"
          ]
        })}
      </script>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
    </Helmet>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
