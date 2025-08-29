import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: Record<string, any>;
  noindex?: boolean;
  nofollow?: boolean;
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
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
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
  canonical = '',
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  language = 'en',
  alternateLanguages = [],
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  viewport = 'width=device-width, initial-scale=1, viewport-fit=cover',
  themeColor = '#22ddd2',
  manifest = '/manifest.json',
  appleTouchIcon = '/images/apple-touch-icon.png',
  favicon = '/favicon.ico',
  msTileColor = '#22ddd2',
  msConfig = '/browserconfig.xml',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOProps) {
  
  // Generate canonical URL
  const canonicalUrl = React.useMemo(() => {
    if (canonical) return canonical;
    if (typeof window !== 'undefined') {
      return window.location.origin + window.location.pathname;
    }
    return 'https://ziontechgroup.com';
  }, [canonical]);

  // Enhanced structured data with more comprehensive information
  const defaultStructuredData = React.useMemo((): Record<string, any> => {
    const baseUrl = 'https://ziontechgroup.com';
    
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: baseUrl,
      logo: `${baseUrl}/images/zion-logo.png`,
      description: 'Revolutionary AI & Technology Solutions Provider',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1 302 464 0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com',
        availableLanguage: ['English', 'Spanish']
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://facebook.com/ziontechgroup',
        'https://instagram.com/ziontechgroup'
      ],
      founder: {
        '@type': 'Person',
        name: 'Kleber',
        jobTitle: 'CEO & Founder'
      },
      foundingDate: '2020',
      numberOfEmployees: '50-100',
      industry: 'Technology',
      serviceType: [
        'AI Services',
        'Cloud Computing',
        'Digital Transformation',
        'Cybersecurity',
        'Data Analytics'
      ],
      areaServed: ['United States', 'Global'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Technology Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI-Powered Solutions'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Infrastructure'
            }
          }
        ]
      }
    };

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zion Tech Group',
      url: baseUrl,
      description: 'Revolutionary AI & Technology Solutions',
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };

    return structuredData || {
      '@context': 'https://schema.org',
      '@graph': [organizationSchema, websiteSchema]
    };
  }, [structuredData]);

  // Enhanced meta tags for better SEO
  const metaTags = [
    // Basic meta tags
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'author', content: author },
    { name: 'robots', content: robots },
    { name: 'viewport', content: viewport },
    { name: 'theme-color', content: themeColor },
    { name: 'msapplication-TileColor', content: msTileColor },
    
    // Open Graph tags
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: ogType },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: title },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    { property: 'og:locale', content: language },
    
    // Twitter Card tags
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
    { name: 'twitter:site', content: '@ziontechgroup' },
    { name: 'twitter:creator', content: '@ziontechgroup' },
    
    // Additional meta tags for better SEO
    { name: 'application-name', content: 'Zion Tech Group' },
    { name: 'apple-mobile-web-app-title', content: 'Zion Tech' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    
    // Security and performance
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
    { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
    { 'http-equiv': 'X-Frame-Options', content: 'SAMEORIGIN' },
    { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
    { 'http-equiv': 'Referrer-Policy', content: 'strict-origin-when-cross-origin' }
  ];

  // Add article-specific meta tags if available
  if (publishedTime) {
    metaTags.push(
      { property: 'article:published_time', content: publishedTime },
      { property: 'og:article:published_time', content: publishedTime }
    );
  }

  if (modifiedTime) {
    metaTags.push(
      { property: 'article:modified_time', content: modifiedTime },
      { property: 'og:article:modified_time', content: modifiedTime }
    );
  }

  if (section) {
    metaTags.push(
      { property: 'article:section', content: section },
      { property: 'og:article:section', content: section }
    );
  }

  if (tags.length > 0) {
    metaTags.push(
      { property: 'article:tag', content: tags.join(', ') },
      { property: 'og:article:tag', content: tags.join(', ') }
    );
  }

  // Add language alternates if available
  const linkTags = [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'icon', type: 'image/x-icon', href: favicon },
    { rel: 'apple-touch-icon', href: appleTouchIcon },
    { rel: 'manifest', href: manifest },
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
  ];

  // Add language alternates
  alternateLanguages.forEach(({ lang, url }) => {
    linkTags.push({ rel: 'alternate', hrefLang: lang, href: url });
  });

  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      
      {/* Meta tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* Link tags */}
      {linkTags.map((tag, index) => (
        <link key={index} {...tag} />
      ))}
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>
      
      {/* Additional meta tags for noindex/nofollow */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/zion-logo.png" as="image" />
      
      {/* Security headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;" />
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
