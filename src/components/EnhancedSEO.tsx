import React, { useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
}

export const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  image = '/images/zion-tech-group-og.jpg',
  url = window.location.href,
  type = 'website',
  image,
  url,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = [],
  canonical,
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const defaultKeywords = [
    'AI solutions',
    'cloud computing',
    'cybersecurity',
    'digital transformation',
    'machine learning',
    'quantum computing',
    'IoT',
    'blockchain',
    'micro-SaaS',
    'enterprise software',
    'Zion Tech Group'
  ];

  const generateStructuredData = useCallback(() => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'Organization',
      name: 'Zion Tech Group',
      description: description,
      url: currentUrl,
      logo: '/images/zion-tech-group-logo.png',
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/zion-tech-group',
        'https://facebook.com/ziontechgroup'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English'
      }
    };

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-logo.png",
    "description": "Leading provider of AI-powered technology solutions, cloud computing, and cybersecurity services.",
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
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://facebook.com/ziontechgroup"
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

  // Preload critical resources
  useEffect(() => {
    // Preload critical fonts
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
    ];

    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link);
    });

    // Preload critical images
    if (ogImage) {
      const imageLink = document.createElement('link');
      imageLink.rel = 'preload';
      imageLink.as = 'image';
      imageLink.href = ogImage;
      document.head.appendChild(imageLink);
    }

    // DNS prefetch for external domains
    const dnsPrefetchDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, [ogImage]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | Zion Tech Group</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />

      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22ddd2" />
      <meta name="msapplication-TileColor" content="#22ddd2" />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredDataScript)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
    </Helmet>
  );
};