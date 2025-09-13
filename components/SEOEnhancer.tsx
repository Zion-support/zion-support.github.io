import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = "Zion Tech Group - AI & Automation Solutions",
  description = "Leading provider of AI automation solutions, quantum computing, and enterprise transformation services. Achieve 2000%+ ROI with our cutting-edge technology implementations.",
  keywords = [
    "AI automation",
    "artificial intelligence",
    "machine learning",
    "quantum computing",
    "enterprise AI",
    "automation solutions",
    "AI consulting",
    "digital transformation",
    "AI implementation",
    "business automation",
    "AI strategy",
    "quantum AI",
    "neural networks",
    "deep learning",
    "AI governance",
    "AI safety",
    "AI procurement",
    "AI roadmap"
  ],
  image = "https://zion.app/images/og-image.jpg",
  url = "https://zion.app",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section = "Technology",
  tags = []
}) => {
  const fullTitle = title.includes("Zion") ? title : `${title} | Zion Tech Group`;
  const fullKeywords = [...keywords, ...tags].join(", ");

  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://zion.app",
    "logo": "https://zion.app/images/logo.png",
    "description": "Leading provider of AI automation solutions and enterprise transformation services",
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-ZION-TECH",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/ziontech",
      "https://linkedin.com/company/zion-tech-group",
      "https://github.com/zion-holdings"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "San Francisco",
      "addressRegion": "CA"
    }
  };

  // Structured data for services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Automation Solutions",
    "description": "Comprehensive AI automation services for enterprise transformation",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "serviceType": "AI Consulting",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Strategy Consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Implementation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Computing Solutions"
          }
        }
      ]
    }
  };

  // Structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://zion.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": section,
        "item": `https://zion.app/${section.toLowerCase()}`
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontech" />
      <meta name="twitter:creator" content="@ziontech" />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Alternate language versions */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Favicon and app icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Performance hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/hero-bg.jpg" as="image" />
    </Helmet>
  );
};

export default SEOEnhancer;