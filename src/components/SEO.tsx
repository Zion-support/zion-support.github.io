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
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  ogType?: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other' | 'business.business' | 'website';
  viewport?: string;
  charset?: string;
  language?: string;
  themeColor?: string;
  msApplicationTileColor?: string;
  appleMobileWebAppTitle?: string;
  appleMobileWebAppCapable?: boolean;
  appleMobileWebAppStatusBarStyle?: 'default' | 'black' | 'black-translucent';
  appleTouchIcon?: string;
  favicon?: string;
  manifest?: string;
  preconnect?: string[];
  dnsPrefetch?: string[];
  preload?: Array<{
    href: string;
    as: string;
    type?: string;
    crossorigin?: boolean;
  }>;
  prefetch?: string[];
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
  robots,
  twitterCard = "summary_large_image",
  ogType,
  viewport = "width=device-width, initial-scale=1",
  charset = "utf-8",
  language = "en",
  themeColor = "#000000",
  msApplicationTileColor = "#000000",
  appleMobileWebAppTitle = "Zion Tech Group",
  appleMobileWebAppCapable = true,
  appleMobileWebAppStatusBarStyle = "default",
  appleTouchIcon = "/apple-touch-icon.png",
  favicon = "/favicon.ico",
  manifest = "/manifest.json",
  preconnect = ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
  dnsPrefetch = ["https://www.google-analytics.com"],
  preload = [],
  prefetch = []
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
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com",
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
            "name": "AI Business Intelligence",
            "description": "Advanced analytics and machine learning insights"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quantum Computing Solutions",
            "description": "Next-generation computational power"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Micro SAAS Platform",
            "description": "Scalable software solutions"
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
      "Digital Transformation",
      "Blockchain Technology",
      "Internet of Things",
      "Micro SaaS Solutions",
      "Business Process Automation"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Australia"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.4496,
        "longitude": -75.7163
      },
      "geoRadius": "50000"
    }
  };

  // Merge custom structured data with default
  const finalStructuredData = structuredData || defaultStructuredData;

  // Generate robots meta tag
  const robotsContent = robots || (noindex ? "noindex" : "index") + (nofollow ? ",nofollow" : ",follow");

  // Generate meta keywords
  const metaKeywords = keywords;

  // Generate meta tags
  const metaTags = [
    // Basic meta tags
    { name: "description", content: description },
    { name: "keywords", content: metaKeywords },
    { name: "author", content: author },
    { name: "robots", content: robotsContent },
    { name: "viewport", content: viewport },
    { name: "charset", content: charset },
    { name: "language", content: language },
    
    // Open Graph tags
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: ogType },
    { property: "og:site_name", content: "Zion Tech Group" },
    { property: "og:locale", content: "en_US" },
    
    // Twitter Card tags
    { name: "twitter:card", content: twitterCard },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:site", content: "@ziontechgroup" },
    { name: "twitter:creator", content: "@ziontechgroup" },
    
    // Additional Open Graph tags for articles
    ...(publishedTime ? [{ property: "og:published_time", content: publishedTime }] : []),
    ...(modifiedTime ? [{ property: "og:modified_time", content: modifiedTime }] : []),
    ...(section ? [{ property: "og:section", content: section }] : []),
    ...(tags ? [{ property: "og:tag", content: tags.join(', ') }] : []),
    
    // Mobile and PWA meta tags
    { name: "theme-color", content: themeColor },
    { name: "msapplication-TileColor", content: msApplicationTileColor },
    { name: "apple-mobile-web-app-title", content: appleMobileWebAppTitle },
    { name: "apple-mobile-web-app-capable", content: appleMobileWebAppCapable ? "yes" : "no" },
    { name: "apple-mobile-web-app-status-bar-style", content: appleMobileWebAppStatusBarStyle },
    
    // Security and performance meta tags
    { name: "referrer", content: "strict-origin-when-cross-origin" },
    { name: "format-detection", content: "telephone=no" },
    { name: "mobile-web-app-capable", content: "yes" },
    
    // Business and contact information
    { name: "geo.region", content: "US-DE" },
    { name: "geo.placename", content: "Middletown, Delaware" },
    { name: "geo.position", content: "39.4496;-75.7163" },
    { name: "ICBM", content: "39.4496, -75.7163" },
    
    // Verification tags
    { name: "google-site-verification", content: "your-google-verification-code" },
    { name: "msvalidate.01", content: "your-bing-verification-code" },
    { name: "yandex-verification", content: "your-yandex-verification-code" }
  ];

  // Generate link tags
  const linkTags = [
    // Canonical URL
    { rel: "canonical", href: canonicalUrl },
    
    // Favicon and app icons
    { rel: "icon", type: "image/x-icon", href: favicon },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: appleTouchIcon },
    { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: themeColor },
    
    // Manifest and PWA
    { rel: "manifest", href: manifest },
    
    // DNS prefetch and preconnect
    ...dnsPrefetch.map(domain => ({ rel: "dns-prefetch", href: domain })),
    ...preconnect.map(domain => ({ rel: "preconnect", href: domain })),
    
    // Preload critical resources
    ...preload.map(resource => ({
      rel: "preload",
      href: resource.href,
      as: resource.as,
      type: resource.type,
      crossOrigin: resource.crossorigin
    })),
    
    // Prefetch non-critical resources
    ...prefetch.map(resource => ({ rel: "prefetch", href: resource })),
    
    // Alternative languages
    { rel: "alternate", hreflang: "en", href: canonicalUrl },
    { rel: "alternate", hreflang: "x-default", href: canonicalUrl }
  ];

  // Generate script tags for structured data
  const scriptTags = [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(finalStructuredData)
    }
  ];

  // Performance optimization: Add resource hints
  useEffect(() => {
    // Add resource hints for better performance
    const addResourceHints = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/src/index.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload hero image
      const heroImage = document.createElement('link');
      heroImage.rel = 'preload';
      heroImage.href = '/images/hero-bg.jpg';
      heroImage.as = 'image';
      document.head.appendChild(heroImage);

      // DNS prefetch for external domains
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = 'https://www.google-analytics.com';
      document.head.appendChild(dnsPrefetch);
    };

    // Add resource hints after component mounts
    const timer = setTimeout(addResourceHints, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Meta tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
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
