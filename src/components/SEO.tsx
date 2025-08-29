import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  ogImage?: string;
  twitterImage?: string;
  twitterCreator?: string;
  twitterSite?: string;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  image = '/images/zion-tech-group-og.jpg',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  noindex = false,
  nofollow = false,
  ogImage = '/images/zion-tech-group-og.jpg',
  twitterImage = '/images/zion-tech-group-twitter.jpg',
  twitterCreator = '@ziontechgroup',
  twitterSite = '@ziontechgroup'
}: SEOProps) {
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": siteUrl,
    "logo": `${siteUrl}/images/zion-tech-group-logo.png`,
    "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
    "foundingDate": "2010",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "San Francisco",
      "addressRegion": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://www.facebook.com/ziontechgroup"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Business Intelligence",
            "description": "Machine Learning & Data Science solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud DevOps",
            "description": "Infrastructure & Automation services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity",
            "description": "AI-Powered Security solutions"
          }
        }
      ]
    }
  };

  // Merge with custom structured data
  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots Meta */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${twitterImage}`} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#22ddd2" />
      <meta name="msapplication-TileColor" content="#22ddd2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Article specific meta tags */}
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
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional structured data for specific page types */}
      {type === 'service' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": title,
            "description": description,
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group"
            },
            "areaServed": "Worldwide",
            "serviceType": "Technology Services"
          })}
        </script>
      )}
      
      {/* Breadcrumb structured data */}
      {canonical && canonical !== '/' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": fullCanonical
              }
            ]
          })}
        </script>
      )}
    </Helmet>
  );
}

export const SEOPresets = {
  home: {
    title: 'Zion Tech Group | Leading Technology Solutions & Digital Transformation',
    description: 'Transform your business with Zion Tech Group\'s cutting-edge AI, cybersecurity, cloud services, and digital transformation solutions. Expert IT consulting for the modern enterprise.',
    keywords: ['Technology Solutions', 'Digital Transformation', 'AI Services', 'Cybersecurity', 'Cloud Services', 'IT Consulting'],
    type: 'website' as const,
    structuredData: {
      "@type": "WebSite",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ziontechgroup.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },
  services: {
    title: 'Our Services | Zion Tech Group | Comprehensive Technology Solutions',
    description: 'Explore Zion Tech Group\'s comprehensive suite of technology services including AI solutions, cybersecurity, cloud migration, and digital transformation consulting.',
    keywords: ['AI Solutions', 'Cybersecurity Services', 'Cloud Migration', 'Digital Transformation', 'IT Infrastructure'],
    type: 'website' as const
  },
  about: {
    title: 'About Us | Zion Tech Group | Technology Innovation & Excellence',
    description: 'Learn about Zion Tech Group\'s mission to drive technological innovation and digital transformation. Discover our expertise, values, and commitment to excellence.',
    keywords: ['About Zion Tech Group', 'Technology Innovation', 'Company Mission', 'Team Expertise', 'Company Values'],
    type: 'website' as const
  },
  contact: {
    title: 'Contact Us | Zion Tech Group | Get in Touch for Technology Solutions',
    description: 'Contact Zion Tech Group for expert technology consulting, AI solutions, cybersecurity services, and digital transformation support. Let\'s discuss your technology needs.',
    keywords: ['Contact Zion Tech Group', 'Technology Consulting', 'AI Solutions', 'Cybersecurity Services', 'Digital Transformation'],
    type: 'website' as const
  }
};
