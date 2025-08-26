import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'organization';
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
}

export const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise. We help businesses thrive in the digital age.",
  keywords = ["AI solutions", "technology services", "digital transformation", "cloud computing", "cybersecurity", "machine learning"],
  image = "/images/zion-tech-group-og.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  organization = {
    name: "Zion Tech Group",
    url: "https://ziontechgroup.com",
    logo: "https://ziontechgroup.com/images/logo.png",
    description: "Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise.",
    address: {
      streetAddress: "123 Innovation Drive",
      addressLocality: "Tech City",
      addressRegion: "CA",
      postalCode: "90210",
      addressCountry: "US"
    },
    contactPoint: {
      telephone: "+1-302-464-0950",
      contactType: "Customer Service",
      email: "info@ziontechgroup.com"
    },
    sameAs: [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup"
    ]
  }
}) => {
  useEffect(() => {
    // Add structured data to the page
    addStructuredData();
    
    // Add performance meta tags
    addPerformanceMetaTags();
    
    // Add security headers
    addSecurityHeaders();
  }, []);

  const addStructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        // Organization
        {
          "@type": "Organization",
          "@id": `${organization.url}#organization`,
          "name": organization.name,
          "url": organization.url,
          "logo": {
            "@type": "ImageObject",
            "url": organization.logo,
            "width": 512,
            "height": 512
          },
          "description": organization.description,
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": organization.address.streetAddress,
            "addressLocality": organization.address.addressLocality,
            "addressRegion": organization.address.addressRegion,
            "postalCode": organization.address.postalCode,
            "addressCountry": organization.address.addressCountry
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": organization.contactPoint.telephone,
            "contactType": organization.contactPoint.contactType,
            "email": organization.contactPoint.email,
            "availableLanguage": "English"
          },
          "sameAs": organization.sameAs,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Technology Services",
                    "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Solutions",
              "description": "Machine learning, natural language processing, and computer vision solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud & DevOps",
              "description": "Cloud migration, infrastructure automation, and DevOps practices"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cybersecurity",
              "description": "Comprehensive security solutions including threat detection and compliance"
            }
          }
        ] as any
          }
        },
        // Website
        {
          "@type": "WebSite",
          "@id": `${organization.url}#website`,
          "url": organization.url,
          "name": organization.name,
          "description": organization.description,
                  "publisher": {
          "@id": `${organization.url}#organization`
        } as any,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${organization.url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        }
      ]
    };

    // Add article structured data if applicable
    if (type === 'article' && publishedTime) {
      (structuredData["@graph"] as any[]).push({
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": image,
        "author": {
          "@type": "Organization",
          "@id": `${organization.url}#organization`
        },
        "publisher": {
          "@type": "Organization",
          "@id": `${organization.url}#organization`
        },
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url
        },
        "articleSection": section,
        "keywords": keywords.join(", "),
        "articleBody": description
      });
    }

    // Add breadcrumb structured data
    if (section) {
      (structuredData["@graph"] as any[]).push({
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": organization.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": section,
            "item": url
          }
        ]
      });
    }

    // Insert structured data into the page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  };

  const addPerformanceMetaTags = () => {
    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for additional domains
    const dnsPrefetchDomains = [
      'https://cdn.jsdelivr.net',
      'https://unpkg.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  };

  const addSecurityHeaders = () => {
    // Note: These headers are typically set on the server side
    // This is just for demonstration of what should be implemented
    const securityHeaders = {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    };

    // Log security headers for development purposes
    if (process.env.NODE_ENV === 'development') {
      console.log('Security headers that should be implemented:', securityHeaders);
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={organization.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Article Meta Tags */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Business Meta Tags */}
      <meta name="business:contact_data:street_address" content={organization.address.streetAddress} />
      <meta name="business:contact_data:locality" content={organization.address.addressLocality} />
      <meta name="business:contact_data:region" content={organization.address.addressRegion} />
      <meta name="business:contact_data:postal_code" content={organization.address.postalCode} />
      <meta name="business:contact_data:country_name" content={organization.address.addressCountry} />
      <meta name="business:contact_data:phone_number" content={organization.contactPoint.telephone} />
      <meta name="business:contact_data:email" content={organization.contactPoint.email} />
      
      {/* Performance Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#1e293b" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      
      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={organization.name} />
      
      {/* Verification Meta Tags */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      
      {/* Additional Performance Optimizations */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="modulepreload" href="/src/main.tsx" />
    </Helmet>
  );
};