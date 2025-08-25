import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
import { useLocation } from 'react-router-dom';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d

interface SEOProps {
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
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    description: 'AI-Powered Innovation & Enterprise IT Solutions',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Drive',
      addressLocality: 'Wilmington',
      addressRegion: 'DE',
      postalCode: '19801',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://www.linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
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
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered technology solutions, quantum computing, and comprehensive IT services for modern businesses.",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "Delaware"
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
      "https://github.com/Zion-Holdings"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Autonomous Systems",
            "description": "Advanced autonomous AI systems for business automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Technology Solutions",
            "description": "Next-generation quantum computing platforms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity Services",
            "description": "Comprehensive security and compliance solutions"
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
          }
        }
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;
  const finalRobots = robots || `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;

  useEffect(() => {
    // Update document title for better accessibility
    document.title = title;
    
    // Update meta description for dynamic content
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
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
    });

    // Cleanup function
    return () => {
      preloadLinks.forEach(link => {
        const existingLink = document.querySelector(`link[href="${link.href}"]`);
        if (existingLink) {
          existingLink.remove();
        }
      });
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-730d
    };
  }, []);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
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
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Robots Meta */}
      {noIndex && <meta name="robots" content="noindex" />}
      {noFollow && <meta name="robots" content="nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
<<<<<<< HEAD
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={language} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} />
      ))}

      {/* Additional Links */}
      {additionalLinks.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} type={link.type} sizes={link.sizes} />
      ))}

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
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
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
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
    </Helmet>
  );
}