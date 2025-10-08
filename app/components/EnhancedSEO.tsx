import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Advanced AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI solutions, digital transformation, and cloud services. Proven strategies delivering $50M+ annual savings and 95% process automation.',
  keywords = [
    'AI solutions',
    'enterprise AI transformation',
    'digital automation',
    'cloud services',
    'AI consulting',
    'machine learning',
    'artificial intelligence',
    'digital transformation',
    'technology services',
    'Zion Tech Group',
    'AI implementation',
    'enterprise architecture',
    'cost optimization',
    'autonomous systems',
    'quantum computing',
    'blockchain',
    'cybersecurity'
  ],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false
}) => {
  // Default structured data
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading provider of enterprise AI solutions, digital transformation, and cutting-edge technology services.',
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Technology',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-600-9898',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'en'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/ziontechgroup'
    ],
    offers: [
      {
        '@type': 'Offer',
        category: 'AI Solutions',
        description: 'Enterprise AI solutions, digital transformation, and cloud services',
        price: '1500',
        priceCurrency: 'USD'
      }
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  // Add meta robots
  const robotsContent = [];
  if (noindex) robotsContent.push('noindex');
  if (nofollow) robotsContent.push('nofollow');
  if (!noindex && !nofollow) robotsContent.push('index', 'follow');

  // Add resource hints for better performance
  useEffect(() => {
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' }
      ];

      hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) {
          link.crossOrigin = hint.crossOrigin;
        }
        document.head.appendChild(link);
      });
    };

    addResourceHints();
  }, []);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content={robotsContent.join(', ')} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="publisher" content="Zion Tech Group" />
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="3 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-TileColor" content="#4f46e5" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      <meta name="slurp" content="index, follow" />
      <meta name="duckduckbot" content="index, follow" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Structured Data for Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Solutions',
          description: 'Enterprise AI solutions, digital transformation, and cloud services',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com'
          },
          areaServed: {
            '@type': 'Country',
            name: 'United States'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'AI Technology Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Enterprise Transformation',
                  description: 'Comprehensive AI implementation strategies for enterprise organizations'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Digital Automation',
                  description: 'Process automation and workflow optimization services'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Cloud Infrastructure',
                  description: 'Cloud migration and infrastructure optimization services'
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;