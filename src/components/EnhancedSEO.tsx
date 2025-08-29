import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service' | 'organization';
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  organization?: {
    name: string;
    url: string;
    logo: string;
    description: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    contactPoint: {
      telephone: string;
      contactType: string;
      email: string;
    };
    sameAs: string[];
  };
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  services?: Array<{
    name: string;
    description: string;
    url: string;
    price?: string;
    category: string;
  }>;
}

export default function EnhancedSEO({
  title,
  description,
  canonical,
  url,
  type = 'website',
  image = '/images/zion-tech-group-og.jpg',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  organization = {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    description: 'Leading AI & Technology Solutions provider offering comprehensive IT services, AI-powered business solutions, and innovative technology consulting.',
    address: {
      streetAddress: '123 Innovation Drive',
      addressLocality: 'Tech City',
      addressRegion: 'CA',
      postalCode: '90210',
      addressCountry: 'US'
    },
    contactPoint: {
      telephone: '+1-555-123-4567',
      contactType: 'Customer Service',
      email: 'info@ziontechgroup.com'
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://facebook.com/ziontechgroup'
    ]
  },
  breadcrumbs = [],
  faq = [],
  services = []
}: SEOProps) {
  const fullUrl = url || `https://ziontechgroup.com${canonical || ''}`;
  const ogImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  useEffect(() => {
    // Inject structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        // Organization
        {
          '@type': 'Organization',
          '@id': `${organization.url}#organization`,
          name: organization.name,
          url: organization.url,
          logo: {
            '@type': 'ImageObject',
            url: organization.logo,
            width: 512,
            height: 512
          },
          description: organization.description,
          address: {
            '@type': 'PostalAddress',
            streetAddress: organization.address.streetAddress,
            addressLocality: organization.address.addressLocality,
            addressRegion: organization.address.addressRegion,
            postalCode: organization.address.postalCode,
            addressCountry: organization.address.addressCountry
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: organization.contactPoint.telephone,
            contactType: organization.contactPoint.contactType,
            email: organization.contactPoint.email
          },
          sameAs: organization.sameAs,
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Technology Services',
            itemListElement: services.map(service => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: service.name,
                description: service.description,
                url: service.url,
                category: service.category
              },
              ...(service.price && { price: service.price })
            }))
          }
        },
        // WebSite
        {
          '@type': 'WebSite',
          '@id': `${organization.url}#website`,
          url: organization.url,
          name: organization.name,
          description: organization.description,
          publisher: {
            '@id': `${organization.url}#organization`
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${organization.url}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          }
        },
        // BreadcrumbList
        ...(breadcrumbs.length > 0 ? [{
          '@type': 'BreadcrumbList',
          '@id': `${fullUrl}#breadcrumb`,
          itemListElement: breadcrumbs.map((breadcrumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: breadcrumb.name,
            item: breadcrumb.url
          }))
        }] : []),
        // FAQ
        ...(faq.length > 0 ? [{
          '@type': 'FAQPage',
          '@id': `${fullUrl}#faq`,
          mainEntity: faq.map(qa => ({
            '@type': 'Question',
            name: qa.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: qa.answer
            }
          }))
        }] : []),
        // Article (if applicable)
        ...(type === 'article' ? [{
          '@type': 'Article',
          '@id': `${fullUrl}#article`,
          headline: title,
          description: description,
          image: ogImage,
          author: {
            '@id': `${organization.url}#organization`
          },
          publisher: {
            '@id': `${organization.url}#organization`
          },
          mainEntityOfPage: {
            '@id': fullUrl
          },
          ...(publishedTime && { datePublished: publishedTime }),
          ...(modifiedTime && { dateModified: modifiedTime }),
          ...(section && { articleSection: section }),
          ...(tags.length > 0 && { keywords: tags.join(', ') })
        }] : []),
        // Service (if applicable)
        ...(type === 'service' ? [{
          '@type': 'Service',
          '@id': `${fullUrl}#service`,
          name: title,
          description: description,
          provider: {
            '@id': `${organization.url}#organization`
          },
          areaServed: 'Worldwide',
          serviceType: 'Technology Consulting',
          category: 'Information Technology'
        }] : [])
      ]
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [title, description, fullUrl, ogImage, type, author, publishedTime, modifiedTime, section, tags, organization, breadcrumbs, faq, services]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content={author || "Zion Tech Group"} />
      <meta name="keywords" content={tags.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22DDD2" />
      <meta name="msapplication-TileColor" content="#22DDD2" />
      
      {/* Apple Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Article Meta Tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.gpteng.co" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdn.gpteng.co" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Performance Hints */}
      <link rel="preload" href="/fonts/Orbitron-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/Rajdhani-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    </Helmet>
  );
}