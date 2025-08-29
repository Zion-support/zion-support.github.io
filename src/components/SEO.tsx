import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  facebookAppId?: string;
  structuredData?: Record<string, any>;
  children?: React.ReactNode;
}

export function SEO({
  title = 'Zion Tech Group - Innovative AI Solutions & Digital Transformation',
  description = 'Leading provider of cutting-edge AI solutions, digital transformation services, and innovative technology consulting. Transform your business with Zion Tech Group.',
  keywords = ['AI solutions', 'digital transformation', 'technology consulting', 'machine learning', 'cloud services', 'cybersecurity'],
  author = 'Zion Tech Group',
  image = '/images/zion-tech-group-og.jpg',
  url = typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noindex = false,
  nofollow = false,
  twitterCard = 'summary_large_image',
  facebookAppId,
  structuredData,
  children
}: SEOProps) {
  const siteName = 'Zion Tech Group';
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  const fullUrl = canonical || url;
  
  // Default structured data for organization
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    description: 'Leading provider of cutting-edge AI solutions and digital transformation services',
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://facebook.com/ziontechgroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: 'San Francisco',
      addressRegion: 'CA'
    }
  };

  // Merge with custom structured data
  const finalStructuredData = structuredData 
    ? { ...defaultStructuredData, ...structuredData }
    : defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {noindex && nofollow && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Open Graph Article Meta Tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Facebook App ID */}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2e73ea" />
      <meta name="msapplication-TileColor" content="#2e73ea" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional children */}
      {children}
    </Helmet>
  );
}

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="Zion Tech Group"
      description="Transform your business with cutting-edge AI solutions, digital transformation services, and innovative technology consulting from Zion Tech Group."
      keywords={['AI solutions', 'digital transformation', 'technology consulting', 'machine learning', 'cloud services', 'cybersecurity', 'innovation']}
      type="website"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Zion Tech Group',
        url: 'https://ziontechgroup.com',
        description: 'Leading provider of cutting-edge AI solutions and digital transformation services',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://ziontechgroup.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }}
    />
  );
}

export function ServicePageSEO({ 
  serviceName, 
  serviceDescription, 
  serviceImage 
}: { 
  serviceName: string; 
  serviceDescription: string; 
  serviceImage?: string; 
}) {
  return (
    <SEO
      title={`${serviceName} Services`}
      description={serviceDescription}
      keywords={[serviceName, 'AI services', 'technology solutions', 'digital transformation']}
      type="service"
      image={serviceImage}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        description: serviceDescription,
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group'
        },
        areaServed: 'Worldwide',
        serviceType: 'Technology Consulting'
      }}
    />
  );
}

export function BlogPostSEO({ 
  title, 
  description, 
  publishedTime, 
  modifiedTime, 
  author, 
  image, 
  tags 
}: { 
  title: string; 
  description: string; 
  publishedTime: string; 
  modifiedTime?: string; 
  author: string; 
  image?: string; 
  tags?: string[]; 
}) {
  return (
    <SEO
      title={title}
      description={description}
      type="article"
      publishedTime={publishedTime}
      modifiedTime={modifiedTime}
      author={author}
      image={image}
      tags={tags}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: description,
        author: {
          '@type': 'Person',
          name: author
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ziontechgroup.com/images/zion-tech-group-logo.png'
          }
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        image: image,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com'
        }
      }}
    />
  );
}

export function ContactPageSEO() {
  return (
    <SEO
      title="Contact Us"
      description="Get in touch with Zion Tech Group for AI solutions, digital transformation, and technology consulting. Let's discuss how we can transform your business."
      keywords={['contact', 'AI consulting', 'technology consulting', 'digital transformation', 'support']}
      type="website"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Zion Tech Group',
        description: 'Contact us for AI solutions and technology consulting',
        mainEntity: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-555-123-4567',
            contactType: 'customer service',
            email: 'info@ziontechgroup.com',
            availableLanguage: 'English'
          }
        }
      }}
    />
  );
}
