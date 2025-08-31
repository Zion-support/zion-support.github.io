import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile' | 'video' | 'product';
  siteName?: string;
  locale?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  category?: string;
  tags?: string[];
  schema?: Record<string, any>;
  noIndex?: boolean;
  noFollow?: boolean;
  canonical?: string;
  alternateUrls?: { hreflang: string; href: string }[];
  prefetchUrls?: string[];
  preloadResources?: { href: string; as: string; type?: string }[];
}

interface CompanyInfo {
  name: string;
  logo: string;
  url: string;
  contactPoint: {
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs: string[];
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

export const EnhancedSEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Advanced AI Solutions & Enterprise Technology Services',
  description = 'Leading provider of AI solutions, cybersecurity, cloud services, and enterprise technology. Transform your business with cutting-edge AI, quantum computing, and digital transformation services.',
  keywords = [
    'AI solutions',
    'artificial intelligence',
    'enterprise technology',
    'cybersecurity',
    'cloud services',
    'digital transformation',
    'quantum computing',
    'machine learning',
    'automation',
    'business intelligence',
    'technology consulting',
    'software development'
  ],
  image = '/images/zion-tech-og-image.jpg',
  url,
  type = 'website',
  siteName = 'Zion Tech Group',
  locale = 'en_US',
  twitterCard = 'summary_large_image',
  author = 'Zion Tech Group',
  publishedDate,
  modifiedDate,
  category,
  tags,
  schema,
  noIndex = false,
  noFollow = false,
  canonical,
  alternateUrls = [],
  prefetchUrls = [],
  preloadResources = []
}) => {
  // Company information for structured data
  const companyInfo: CompanyInfo = {
    name: 'Zion Tech Group',
    logo: 'https://ziontechgroup.com/images/logo.png',
    url: 'https://ziontechgroup.com',
    contactPoint: {
      telephone: '+1-555-ZION-TECH',
      contactType: 'customer service',
      email: 'contact@ziontechgroup.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://facebook.com/ziontechgroup',
      'https://youtube.com/ziontechgroup'
    ],
    address: {
      streetAddress: '123 Tech Innovation Drive',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    }
  };

  // Get current URL
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com');
  const baseUrl = 'https://ziontechgroup.com';

  // Generate comprehensive structured data
  const structuredData = useMemo(() => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        // Organization Schema
        {
          '@type': 'Organization',
          '@id': `${baseUrl}#organization`,
          name: companyInfo.name,
          url: companyInfo.url,
          logo: {
            '@type': 'ImageObject',
            url: companyInfo.logo,
            width: 400,
            height: 400
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: companyInfo.contactPoint.telephone,
            contactType: companyInfo.contactPoint.contactType,
            email: companyInfo.contactPoint.email,
            availableLanguage: ['en', 'es', 'fr']
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: companyInfo.address.streetAddress,
            addressLocality: companyInfo.address.addressLocality,
            addressRegion: companyInfo.address.addressRegion,
            postalCode: companyInfo.address.postalCode,
            addressCountry: companyInfo.address.addressCountry
          },
          sameAs: companyInfo.sameAs,
          foundingDate: '2020',
          numberOfEmployees: {
            '@type': 'QuantitativeValue',
            minValue: 50,
            maxValue: 200
          },
          industry: 'Technology',
          areaServed: {
            '@type': 'Country',
            name: 'United States'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'AI and Technology Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Solutions',
                  description: 'Custom artificial intelligence solutions for enterprise'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Cybersecurity Services',
                  description: 'Advanced cybersecurity and threat protection'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Cloud Services',
                  description: 'Cloud infrastructure and migration services'
                }
              }
            ]
          }
        },
        // Website Schema
        {
          '@type': 'WebSite',
          '@id': `${baseUrl}#website`,
          url: baseUrl,
          name: siteName,
          description: description,
          publisher: {
            '@id': `${baseUrl}#organization`
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          },
          inLanguage: locale.replace('_', '-')
        },
        // WebPage Schema
        {
          '@type': 'WebPage',
          '@id': currentUrl,
          url: currentUrl,
          name: title,
          description: description,
          isPartOf: {
            '@id': `${baseUrl}#website`
          },
          about: {
            '@id': `${baseUrl}#organization`
          },
          datePublished: publishedDate || new Date().toISOString(),
          dateModified: modifiedDate || new Date().toISOString(),
          author: {
            '@type': 'Organization',
            '@id': `${baseUrl}#organization`
          },
          inLanguage: locale.replace('_', '-'),
          ...(image && {
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: image.startsWith('http') ? image : `${baseUrl}${image}`,
              width: 1200,
              height: 630
            }
          })
        }
      ]
    };

    // Add custom schema if provided
    if (schema) {
      baseSchema['@graph'].push(schema);
    }

    // Add article schema for article type
    if (type === 'article') {
      baseSchema['@graph'].push({
        '@type': 'Article',
        '@id': `${currentUrl}#article`,
        headline: title,
        description: description,
        author: {
          '@type': 'Organization',
          '@id': `${baseUrl}#organization`
        },
        publisher: {
          '@type': 'Organization',
          '@id': `${baseUrl}#organization`
        },
        datePublished: publishedDate || new Date().toISOString(),
        dateModified: modifiedDate || new Date().toISOString(),
        mainEntityOfPage: currentUrl,
        ...(image && {
          image: {
            '@type': 'ImageObject',
            url: image.startsWith('http') ? image : `${baseUrl}${image}`,
            width: 1200,
            height: 630
          }
        }),
        ...(category && { articleSection: category }),
        ...(tags && { keywords: tags.join(', ') })
      });
    }

    // Add breadcrumb schema for navigation
    const pathSegments = new URL(currentUrl).pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      const breadcrumbItems = pathSegments.map((segment, index) => ({
        '@type': 'ListItem',
        position: index + 2, // Start from 2, as 1 is home
        name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        item: `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`
      }));

      breadcrumbItems.unshift({
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      });

      baseSchema['@graph'].push({
        '@type': 'BreadcrumbList',
        '@id': `${currentUrl}#breadcrumb`,
        itemListElement: breadcrumbItems
      });
    }

    return baseSchema;
  }, [currentUrl, title, description, image, type, publishedDate, modifiedDate, category, tags, schema, locale, baseUrl, siteName, companyInfo]);

  // Generate robots meta content
  const robotsContent = useMemo(() => {
    const directives = [];
    if (noIndex) directives.push('noindex');
    if (noFollow) directives.push('nofollow');
    if (directives.length === 0) directives.push('index', 'follow');
    return directives.join(', ');
  }, [noIndex, noFollow]);

  // Generate Open Graph image URL
  const ogImageUrl = useMemo(() => {
    if (!image) return `${baseUrl}/images/zion-tech-og-default.jpg`;
    return image.startsWith('http') ? image : `${baseUrl}${image}`;
  }, [image, baseUrl]);

  // SEO Analytics tracking
  useEffect(() => {
    // Track page view for SEO analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: title,
        page_location: currentUrl,
        content_group1: category || 'general',
        custom_map: {
          dimension1: type,
          dimension2: category
        }
      });
    }

    // Track Core Web Vitals for SEO
    if (typeof window !== 'undefined' && window.performance) {
      // Schedule CWV measurement after page load
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation && window.gtag) {
          window.gtag('event', 'timing_complete', {
            name: 'load_time',
            value: Math.round(navigation.loadEventEnd - navigation.navigationStart)
          });
        }
      }, 1000);
    }
  }, [title, currentUrl, category, type]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - ${siteName}`} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Article-specific meta tags */}
      {type === 'article' && (
        <>
          {publishedDate && <meta property="article:published_time" content={publishedDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
          {category && <meta property="article:section" content={category} />}
          {tags && tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#22d3ee" />
      <meta name="msapplication-TileColor" content="#22d3ee" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Language and Region */}
      <meta httpEquiv="content-language" content={locale.replace('_', '-')} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />
      
      {/* Alternate URLs for different languages/regions */}
      {alternateUrls.map(({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
      ))}

      {/* Resource Hints for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Prefetch URLs */}
      {prefetchUrls.map(url => (
        <link key={url} rel="prefetch" href={url} />
      ))}

      {/* Preload Resources */}
      {preloadResources.map(({ href, as, type }) => (
        <link 
          key={href} 
          rel="preload" 
          href={href} 
          as={as} 
          {...(type && { type })}
        />
      ))}

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* PWA Meta Tags */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional SEO optimizations */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="bing-site-verification" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      
      {/* Cache control for better performance */}
      <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
    </Helmet>
  );
};

// Global declaration for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}