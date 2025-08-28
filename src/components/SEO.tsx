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
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com",
      "availableLanguage": ["English"],
      "contactOption": "TollFree"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "offers": {
      "@type": "Offer",
      "category": "Technology Services",
      "description": "AI, Quantum Computing, and Digital Transformation Solutions",
      "price": "0",
      "priceCurrency": "USD"
    },
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
            "description": "Quantum Computing Solutions and Consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Transformation",
            "description": "End-to-end Digital Transformation Services"
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
      "Blockchain",
      "Internet of Things",
      "Digital Transformation"
    ]
  };

<<<<<<< HEAD
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'AI, artificial intelligence, quantum computing, business automation, Zion Tech Group, technology solutions, digital transformation',
  author = 'Zion Tech Group',
  image = '/images/zion-tech-group-og.jpg',
  url = window.location.href,
  type = 'website',
  noindex = false,
  canonical,
  structuredData,
  data,
  className = '',
  showAnalysis = false
}) => {
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null);
=======
  const finalStructuredData = structuredData || defaultStructuredData;

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
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-618a

  // Use data prop if provided, otherwise use individual props
  const seoData: SEOData = data || {
    title: title || '',
    description: description || '',
    keywords: keywords || '',
    author: author || '',
    image: image || '',
    url: url || '',
    type: type || 'website',
    noindex: noindex || false,
    canonical: canonical || '',
    structuredData: structuredData || undefined
  };

  useEffect(() => {
<<<<<<< HEAD
    if (showAnalysis) {
      const seoAnalysis = analyzeSEO(seoData);
      setAnalysis(seoAnalysis);
    }
  }, [seoData, showAnalysis]);
=======
    // Enhanced resource preloading
    const preloadCriticalResources = () => {
      // Preload critical fonts with font-display: swap
      const fontLinks = [
        { 
          rel: 'preload', 
          href: '/fonts/inter-var.woff2', 
          as: 'font', 
          type: 'font/woff2', 
          crossOrigin: 'anonymous',
          media: '(preload)'
        },
        { 
          rel: 'preload', 
          href: '/fonts/roboto-var.woff2', 
          as: 'font', 
          type: 'font/woff2', 
          crossOrigin: 'anonymous',
          media: '(preload)'
        }
      ];
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-618a

      fontLinks.forEach(link => {
        const linkElement = document.createElement('link');
        Object.assign(linkElement, link);
        document.head.appendChild(linkElement);
      });

      // Preload critical images with priority hints
      const imageLinks = [
        { rel: 'preload', href: ogImage, as: 'image', fetchPriority: 'high' },
        { rel: 'preload', href: '/logo.png', as: 'image', fetchPriority: 'high' }
      ];

<<<<<<< HEAD
    // Keyword density analysis
    const content = `${seoData.title} ${seoData.description}`.toLowerCase();
    const keywordsArray = typeof seoData.keywords === 'string' ? seoData.keywords.split(',').map(k => k.trim()) : [];
    const keywordDensity = keywordsArray.reduce((total, keyword) => {
      const regex = new RegExp(keyword.toLowerCase(), 'g');
      const matches = content.match(regex);
      return total + (matches ? matches.length : 0);
    }, 0);
    
    let keywordDensityStatus: 'good' | 'warning' | 'poor';
    if (keywordDensity >= 2 && keywordDensity <= 5) {
      keywordDensityStatus = 'good';
      score += 20;
    } else if (keywordDensity >= 1 && keywordDensity <= 7) {
      keywordDensityStatus = 'warning';
      score += 10;
    } else {
      keywordDensityStatus = 'poor';
      score += 5;
    }

    // Additional checks
    const hasStructuredData = !!seoData.structuredData;
    const hasCanonical = !!seoData.canonical;
    const hasOpenGraph = !!seoData.image;
    const hasTwitterCard = !!seoData.image;

    if (hasStructuredData) score += 10;
    if (hasCanonical) score += 5;
    if (hasOpenGraph) score += 5;
    if (hasTwitterCard) score += 5;

    return {
      titleLength: titleLengthStatus,
      descriptionLength: descriptionLengthStatus,
      keywordDensity: keywordDensityStatus,
      hasStructuredData,
      hasCanonical,
      hasOpenGraph,
      hasTwitterCard,
      score
=======
      imageLinks.forEach(link => {
        const linkElement = document.createElement('link');
        Object.assign(linkElement, link);
        document.head.appendChild(linkElement);
      });

      // Preload critical CSS
      const cssLinks = [
        { rel: 'preload', href: '/css/critical.css', as: 'style' }
      ];

      cssLinks.forEach(link => {
        const linkElement = document.createElement('link');
        Object.assign(linkElement, link);
        document.head.appendChild(linkElement);
      });
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-618a
    };

<<<<<<< HEAD
  const fullTitle = seoData.title.includes('Zion Tech Group') ? seoData.title : `${seoData.title} - Zion Tech Group`;
  const fullUrl = seoData.canonical || seoData.url;
  
  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered business solutions, quantum computing, and autonomous business operations",
    "foundingDate": "2015",
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "areaServed": "Worldwide"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "streetAddress": "364 E Main St STE 1008"
    }
  };

  const finalStructuredData = seoData.structuredData || defaultStructuredData;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content={seoData.author} />
        
        {/* Robots Meta */}
        {seoData.noindex ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        )}
        
        {/* Canonical URL */}
        <link rel="canonical" href={fullUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content={seoData.type} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Performance Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(finalStructuredData)}
        </script>
      </Helmet>

      {/* SEO Analysis Display */}
      {showAnalysis && analysis && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 max-w-sm ${className}`}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
              <Search className="w-4 h-4 text-blue-500" />
              <span>SEO Analysis</span>
            </h3>
            <div className={`text-lg font-bold ${
              analysis.score >= 80 ? 'text-green-500' :
              analysis.score >= 60 ? 'text-yellow-500' : 'text-red-500'
            }`}>
              {analysis.score}/100
            </div>
          </div>

          <div className="space-y-3">
            {/* Title Length */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Title Length</span>
              <div className="flex items-center space-x-2">
                {analysis.titleLength === 'good' && <CheckCircle className="w-4 h-4 text-green-500" />}
                {analysis.titleLength === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                {analysis.titleLength === 'poor' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                <span className={`text-xs font-medium ${
                  analysis.titleLength === 'good' ? 'text-green-600' :
                  analysis.titleLength === 'warning' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {analysis.titleLength}
                </span>
              </div>
            </div>

            {/* Description Length */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Description</span>
              <div className="flex items-center space-x-2">
                {analysis.descriptionLength === 'good' && <CheckCircle className="w-4 h-4 text-green-500" />}
                {analysis.descriptionLength === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                {analysis.descriptionLength === 'poor' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                <span className={`text-xs font-medium ${
                  analysis.descriptionLength === 'good' ? 'text-green-600' :
                  analysis.descriptionLength === 'warning' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {analysis.descriptionLength}
                </span>
              </div>
            </div>

            {/* Keyword Density */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Keywords</span>
              <div className="flex items-center space-x-2">
                {analysis.keywordDensity === 'good' && <CheckCircle className="w-4 h-4 text-green-500" />}
                {analysis.keywordDensity === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                {analysis.keywordDensity === 'poor' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                <span className={`text-xs font-medium ${
                  analysis.keywordDensity === 'good' ? 'text-green-600' :
                  analysis.keywordDensity === 'warning' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {analysis.keywordDensity}
                </span>
              </div>
            </div>

            {/* Additional Checks */}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center space-x-2">
                  {analysis.hasStructuredData ? <CheckCircle className="w-3 h-3 text-green-500" /> : <AlertTriangle className="w-3 h-3 text-red-500" />}
                  <span className="text-gray-600 dark:text-gray-400">Structured Data</span>
                </div>
                <div className="flex items-center space-x-2">
                  {analysis.hasCanonical ? <CheckCircle className="w-3 h-3 text-green-500" /> : <AlertTriangle className="w-3 h-3 text-red-500" />}
                  <span className="text-gray-600 dark:text-gray-400">Canonical</span>
                </div>
                <div className="flex items-center space-x-2">
                  {analysis.hasOpenGraph ? <CheckCircle className="w-3 h-3 text-green-500" /> : <AlertTriangle className="w-3 h-3 text-red-500" />}
                  <span className="text-gray-600 dark:text-gray-400">Open Graph</span>
                </div>
                <div className="flex items-center space-x-2">
                  {analysis.hasTwitterCard ? <CheckCircle className="w-3 h-3 text-green-500" /> : <AlertTriangle className="w-3 h-3 text-red-500" />}
                  <span className="text-gray-600 dark:text-gray-400">Twitter Card</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
=======
    // Enhanced viewport meta tag
    const addViewportMeta = () => {
      let viewportMeta = document.querySelector('meta[name="viewport"]');
      if (!viewportMeta) {
        viewportMeta = document.createElement('meta');
        viewportMeta.setAttribute('name', 'viewport');
        viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover');
        document.head.appendChild(viewportMeta);
      }
    };

    // Add security headers
    const addSecurityHeaders = () => {
      // Add CSP meta tag if not already present
      if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
        const cspMeta = document.createElement('meta');
        cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
        cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;");
        document.head.appendChild(cspMeta);
      }
    };

    // Add performance optimizations
    const addPerformanceOptimizations = () => {
      // Add resource hints
      const resourceHints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];

      resourceHints.forEach(hint => {
        const linkElement = document.createElement('link');
        Object.assign(linkElement, hint);
        document.head.appendChild(linkElement);
      });
    };

    // Execute optimizations
    preloadCriticalResources();
    addViewportMeta();
    addSecurityHeaders();
    addPerformanceOptimizations();

    // Cleanup function
    return () => {
      // Remove any dynamically added elements if needed
      const dynamicElements = document.querySelectorAll('link[data-dynamic="true"]');
      dynamicElements.forEach(element => element.remove());
    };
  }, [ogImage]);

  return (
    <Helmet>
      {/* Basic HTML */}
      <title>{title}</title>
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Meta tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional structured data for breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ziontechgroup.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://ziontechgroup.com/services"
            }
          ]
        })}
      </script>
      
      {/* Web App Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Favicon and app icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3B82F6" />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      
      {/* Additional performance optimizations */}
      <link rel="preconnect" href="https://ziontechgroup.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Critical CSS inline for above-the-fold content */}
      <style>
        {`
          /* Critical CSS for above-the-fold content */
          .critical-content {
            opacity: 1 !important;
            visibility: visible !important;
          }
          
          /* Optimize font loading */
          @font-face {
            font-family: 'Inter';
            font-display: swap;
            src: url('/fonts/inter-var.woff2') format('woff2');
          }
          
          /* Reduce layout shift */
          img, video {
            max-width: 100%;
            height: auto;
          }
        `}
      </style>
    </Helmet>
  );
}

export default SEO;
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-618a
