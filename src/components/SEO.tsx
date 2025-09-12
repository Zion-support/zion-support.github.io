import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  structuredData?: Record<string, any>;
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
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = [],
  canonical,
  noindex = false,
  structuredData
}: SEOProps) {
  
  // Generate canonical URL
  const finalCanonicalUrl = React.useMemo(() => {
    if (canonical) return canonical;
    if (typeof window !== 'undefined') {
      return window.location.origin + window.location.pathname;
    }
    return url;
  }, [canonical, url]);

  // Default structured data
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
        areaServed: 'US',
        availableLanguage: 'English'
      },
      sameAs: [
        'https://www.linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/Zion-Holdings'
      ],
      founder: {
        '@type': 'Person',
        name: 'Kleber',
        jobTitle: 'CEO & Founder',
        email: 'kleber@ziontechgroup.com'
      },
      foundingDate: '2020',
      numberOfEmployees: '10-50',
      industry: 'Technology',
      serviceArea: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Technology Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Solutions',
              description: 'Advanced artificial intelligence and machine learning services'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Computing',
              description: 'Scalable cloud infrastructure and platform services'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Digital Transformation',
              description: 'End-to-end digital transformation consulting and implementation'
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
      description: 'Revolutionary AI & Technology Solutions Provider',
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/images/zion-logo.png`
        }
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };

    return {
      organization: organizationSchema,
      website: websiteSchema
    };
  }, []);

  // Merge custom structured data with defaults
  const finalStructuredData = React.useMemo(() => {
    if (structuredData) {
      return { ...defaultStructuredData, ...structuredData };
    }
    return defaultStructuredData;
  }, [structuredData, defaultStructuredData]);

  // Generate article structured data if applicable
  const articleStructuredData = React.useMemo(() => {
    if (type === 'article' && publishedTime) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image,
        author: {
          '@type': 'Person',
          name: author
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ziontechgroup.com/images/zion-logo.png'
          }
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': finalCanonicalUrl
        },
        articleSection: section,
        keywords: keywords.join(', '),
        ...(tags.length > 0 && { articleTag: tags })
      };
    }
    return null;
  }, [type, title, description, image, author, publishedTime, modifiedTime, finalCanonicalUrl, section, keywords, tags]);

  // Generate product structured data if applicable
  const productStructuredData = React.useMemo(() => {
    if (type === 'product') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: title,
        description: description,
        image: image,
        brand: {
          '@type': 'Brand',
          name: 'Zion Tech Group'
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'Zion Tech Group'
        },
        category: section || 'Technology Services',
        url: finalCanonicalUrl,
        ...(tags.length > 0 && { category: tags.join(', ') })
      };
    }
    return null;
  }, [type, title, description, image, section, finalCanonicalUrl, tags]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Open Graph Article Tags */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:author" content={author} />
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Performance Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData.organization)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData.website)}
      </script>
      
      {articleStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      )}
      
      {productStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
      )}
      
      {/* Additional Structured Data for Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI & Technology Solutions',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          description: 'Comprehensive AI, cloud computing, and digital transformation services',
          areaServed: 'Worldwide',
          serviceType: 'Technology Consulting',
          category: 'Technology Services'
        })}
      </script>
    </Helmet>
  );
}