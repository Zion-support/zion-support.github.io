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
  keywords?: string[];
  robots?: string;
  language?: string;
  ogLocale?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: object;
}

  title = 'Zion Tech Group - Leading AI Solutions & Technology Services',
  description = 'Transform your business with cutting - edge AI solutions, quantum computing, and innovative micro SAAS services. Expert technology consulting and digital transformation.',
  keywords = 'AI solutions, quantum computing, micro SAAS, digital transformation, technology consulting, machine learning, cybersecurity, cloud services',
  image = '/images / zion - tech - group - og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  tags = [],
  services = [],
  image = '/images/zion-tech-group-og.jpg',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  keywords = [],
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  language = 'en',
  ogLocale = 'en_US',
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup',
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
  
  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === 'website' ? "Organization" : "Article",
    "name": "Zion Tech Group",
    "url": url,
    "logo": `${url}/images / zion - tech - group - logo.png`,
    "description": description,
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Digital City",
      "addressRegion": "Tech State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 - 555 - 123 - 4567",
      "contactType": "customer service",
      "url": `${url}/contact`
    },
    "sameAs": [
      "https://linkedin.com / company / ziontechgroup",
      "https://twitter.com / ziontechgroup",
      "https://github.com / ziontechgroup"
    ],
    "serviceType": [
      "AI Solutions",
      "Quantum Computing",
      "Micro SAAS Services",
      "Digital Transformation",
      "Technology Consulting"
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

    // Preload critical images
    if (ogImage) {
      const imageLink = document.createElement ('link') ;
      imageLink.rel = 'preload';
      imageLink.as = 'image';
      imageLink.href = ogImage;
      document.head.appendChild (imageLink) ;
    }

    // DNS prefetch for external domains
    const dnsPrefetchDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google - analytics.com'
    ];

    dnsPrefetchDomains.forEach (domain => {
      const link = document.createElement ('link') ;
      link.rel = 'dns - prefetch';
      link.href = domain;
      document.head.appendChild (link) ;
    }) ;
  }, [ogImage]) ;
  if (type === 'article') {
    Object.assign (structuredData, {
      "@type": "Article",
      "headline": title,
      "author": {
        "@type": "Person",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "logo": {
          "@type": "ImageObject",
          "url": `${url}/images / zion - tech - group - logo.png`
        }
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": fullUrl
      }
    }) ;
  }

  return (<Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="language" content={language} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`https://ziontechgroup.com${canonical}`} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url || `https://ziontechgroup.com${canonical || ''}`} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={ogLocale} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      
      {/* Article specific meta tags */}
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
        tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data)
          }}
        />
      ))}
      
      {/* Additional SEO enhancements */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Service Worker */}
      <link rel="serviceworker" href="/sw.js" />
    </Helmet>
  );
}