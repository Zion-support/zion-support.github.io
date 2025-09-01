import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  tags?: string[];
  services?: Array<{
    name: string;
    description: string;
    url: string;
    category: string;
  }>;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: any;
}

export const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  author = 'Zion Tech Group',
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
  nofollow = false,
  structuredData
}: SEOProps) {
  // Generate structured data for organization
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading technology company offering cutting-edge AI-powered solutions, IT services, and innovative Micro SaaS platforms.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://www.facebook.com/ziontechgroup"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.4496,
        "longitude": -75.7163
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "url": `https://ziontechgroup.com${service.url}`,
          "category": service.category
        }
      }))
    }
  };

  // Generate structured data for the current page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'WebPage',
    "name": title,
    "description": description,
    "url": url || `https://ziontechgroup.com${canonical || ''}`,
    "mainEntity": type === 'article' ? {
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": image,
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
      "dateModified": modifiedTime,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url || `https://ziontechgroup.com${canonical || ''}`
      }
    } : undefined,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ziontechgroup.com"
        },
        ...(section ? [{
          "@type": "ListItem",
          "position": 2,
          "name": section,
          "item": `https://ziontechgroup.com/${section.toLowerCase()}`
        }] : []),
        {
          "@type": "ListItem",
          "position": section ? 3 : 2,
          "name": title,
          "item": url || `https://ziontechgroup.com${canonical || ''}`
        }
      ]
    }
  };

  // Combine all structured data
  const allStructuredData = [
    organizationStructuredData,
    pageStructuredData,
    structuredData
  ].filter(Boolean);

  // Generate meta keywords
  const metaKeywords = [
    'Zion Tech Group',
    'AI Solutions',
    'Technology Services',
    'Digital Transformation',
    'IT Consulting',
    'Cloud Services',
    'Cybersecurity',
    ...tags,
    ...keywords
  ].join(', ');

  const defaultStructuredData = {
  "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com / images / zion - logo.png",
    "description": "Leading provider of AI - powered technology solutions, cloud computing, and cybersecurity services.",
  noindex = false,
  canonical
}) => {
  const fullTitle = title.includes ('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = canonical || `${url}${window.location.pathname}`;
  
  // Default structured data for organization
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    description: 'Leading AI-Powered Technology Solutions Provider',
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
      telephone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      contactType: 'customer service'
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://facebook.com/ziontechgroup'
    ]
    "sameAs": [;
      "https://twitter.com / ziontechgroup",
      "https://linkedin.com / company / ziontechgroup",
      "https://facebook.com / ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "100+",
    "serviceArea": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Solutions",
            "description": "Artificial Intelligence and Machine Learning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Computing",
            "description": "Cloud infrastructure and DevOps services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity",
            "description": "Security and compliance solutions"
          }
        }
      ]
    }
  };

  // Merge custom structured data with defaults
  const finalStructuredData = structuredData 
    ? { ...defaultStructuredData, ...structuredData }
    : defaultStructuredData;

  // Default keywords
  const defaultKeywords = [
    'AI Solutions',
    'IT Services',
    'Digital Transformation',
    'Cloud Computing',
    'Cybersecurity',
    'Business Intelligence',
    'Technology Consulting',
    'Zion Tech Group',
    'Micro SaaS',
    'AI Services',
    'Innovation',
    'Technology Solutions',
    ...keywords
  ];

  // Ensure description is SEO-friendly length
  const seoDescription = description.length > 160 
    ? `${description.substring(0, 157)}...` 
    : description;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={defaultKeywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={ogLocale} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Article-specific meta tags */}
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
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
}