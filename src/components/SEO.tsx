import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function SEO({
  title = "Zion Tech Group - AI-Powered Business Solutions & IT Services",
  description = "Transform your business with cutting-edge AI solutions, comprehensive IT services, and innovative technology consulting. Expert AI Business Intelligence, Cloud DevOps, and Digital Transformation services.",
  keywords = "AI solutions, business intelligence, IT services, cloud computing, digital transformation, machine learning, data analytics, cybersecurity, DevOps, Zion Tech Group",
  image = "/images/zion-tech-group-og.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  canonicalUrl,
  noindex = false,
  nofollow = false
}: SEOProps) {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered business solutions and comprehensive IT services",
    "foundingDate": "2020",
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-ZION-TECH",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Spanish"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "San Francisco",
      "addressRegion": "CA"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI & IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Business Intelligence",
            "description": "Advanced machine learning and data analytics solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud DevOps",
            "description": "Cloud infrastructure and DevOps automation services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Transformation",
            "description": "End-to-end digital transformation consulting"
          }
        }
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional structured data for articles */}
      {type === 'article' && publishedTime && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
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
            "dateModified": modifiedTime || publishedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url
            }
          })}
        </script>
      )}
    </Helmet>
  );
}
