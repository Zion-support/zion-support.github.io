import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
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
    };
  }, []);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
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

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
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

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
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
    </Helmet>
  );
};

export default EnhancedSEO;