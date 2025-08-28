import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  Globe, 
  Smartphone, 
  Zap,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
  robots?: string;
}

interface SEOAnalysis {
  score: number;
  suggestions: string[];
  issues: string[];
  improvements: string[];
}

export function SEO({
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology.",
  keywords = "AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation, machine learning, cloud computing, cybersecurity, blockchain, IoT",
  ogImage = "/og-image.jpg",
  canonicalUrl = "https://ziontechgroup.com",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  noindex = false,
  nofollow = false,
  robots
}: SEOProps) {
  
  // Enhanced structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "alternateName": "Zion Tech",
    "url": "https://ziontechgroup.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ziontechgroup.com/logo.png",
      "width": 512,
      "height": 512
    },
    "description": "Leading AI & Technology Solutions Provider specializing in artificial intelligence, quantum computing, and digital transformation",
    "foundingDate": "2020",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Solutions",
            "description": "Artificial Intelligence and Machine Learning Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Computing",
            "description": "Next-generation quantum computing solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Micro SaaS",
            "description": "Specialized software-as-a-service solutions"
          }
        }
      ]
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Quantum Computing",
      "Cloud Computing",
      "Cybersecurity",
      "Blockchain Technology",
      "Internet of Things",
      "Digital Transformation"
    ]
  };

  let finalStructuredData = structuredData || defaultStructuredData;

  // Enhanced meta tags
  const metaTags = [
    // Basic SEO
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "author", content: author },
    { name: "robots", content: robots || (noindex ? "noindex" : "index") + (nofollow ? ",nofollow" : ",follow") },
    
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: title },
    { property: "og:site_name", content: "Zion Tech Group" },
    { property: "og:locale", content: "en_US" },
    
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:site", content: "@ziontechgroup" },
    { name: "twitter:creator", content: "@ziontechgroup" },
    
    // Additional SEO
    { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" },
    { name: "theme-color", content: "#3B82F6" },
    { name: "msapplication-TileColor", content: "#3B82F6" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    { name: "apple-mobile-web-app-title", content: "Zion Tech Group" },
    
    // Security
    { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
    { "http-equiv": "Content-Security-Policy", content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;" },
    
    // Performance
    { name: "format-detection", content: "telephone=no" },
    { name: "mobile-web-app-capable", content: "yes" },
    
    // Business
    { name: "application-name", content: "Zion Tech Group" },
    { name: "msapplication-config", content: "/browserconfig.xml" }
  ];

  // Add conditional meta tags
  if (publishedTime) {
    metaTags.push(
      { property: "article:published_time", content: publishedTime },
      { property: "og:article:published_time", content: publishedTime }
    );
  }
  
  if (modifiedTime) {
    metaTags.push(
      { property: "article:modified_time", content: modifiedTime },
      { property: "og:article:modified_time", content: modifiedTime }
    );
  }
  
  if (section) {
    metaTags.push(
      { property: "article:section", content: section },
      { property: "og:article:section", content: section }
    );
  }
  
  if (tags.length > 0) {
    metaTags.push(
      { property: "article:tag", content: tags.join(", ") },
      { property: "og:article:tag", content: tags.join(", ") }
    );
  }

  // Enhanced structured data for articles
  if (type === 'article') {
    const articleStructuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": ogImage,
      "author": {
        "@type": "Organization",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ziontechgroup.com/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "keywords": keywords
    };

    if (section) {
      articleStructuredData.articleSection = section;
    }

    if (tags.length > 0) {
      articleStructuredData.keywords = tags.join(", ");
    }

    finalStructuredData = articleStructuredData;
  }

  // Enhanced structured data for services
  if (type === 'service') {
    const serviceStructuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": title,
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": "Zion Tech Group"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "serviceType": "Technology Consulting",
      "category": "Technology Services"
    };

    finalStructuredData = serviceStructuredData;
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;" />
      
      {/* Performance Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Business Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Conditional Meta Tags */}
      {publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="og:article:published_time" content={publishedTime} />
        </>
      )}
      
      {modifiedTime && (
        <>
          <meta property="article:modified_time" content={modifiedTime} />
          <meta property="og:article:modified_time" content={modifiedTime} />
        </>
      )}
      
      {section && (
        <>
          <meta property="article:section" content={section} />
          <meta property="og:article:section" content={section} />
        </>
      )}
      
      {tags.length > 0 && (
        <>
          <meta property="article:tag" content={tags.join(", ")} />
          <meta property="og:article:tag" content={tags.join(", ")} />
        </>
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3B82F6" />
      
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
    </Helmet>
  );
}

export default SEO;
