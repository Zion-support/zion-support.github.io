import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: any;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  ogType?: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other' | 'business.business' | 'website';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  robots?: string;
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
  dnsPrefetch?: string[];
  preconnect?: string[];
}

export function SEO({
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology.",
  keywords = "AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation, machine learning, artificial intelligence, business intelligence, cloud computing, cybersecurity, IT services, software development, digital twin, blockchain, IoT, edge computing",
  ogImage = "/og-image.jpg",
  canonicalUrl = "https://ziontechgroup.com",
  structuredData,
  twitterCard = "summary_large_image",
  ogType = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section = "Technology",
  tags = ["AI", "Technology", "Digital Transformation", "Quantum Computing"],
  noindex = false,
  nofollow = false,
  robots,
  viewport = "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes",
  charset = "utf-8",
  language = "en",
  themeColor = "#22ddd2",
  msApplicationTileColor = "#22ddd2",
  appleMobileWebAppTitle = "Zion Tech",
  appleMobileWebAppCapable = true,
  appleMobileWebAppStatusBarStyle = "default",
  appleTouchIcon = "/apple-touch-icon.png",
  favicon = "/favicon.ico",
  manifest = "/manifest.json",
  preconnect = ["https://fonts.googleapis.com", "https://fonts.gstatic.com", "https://www.google-analytics.com"],
  dnsPrefetch = ["https://www.google-analytics.com", "https://www.googletagmanager.com"],
  preload = [
    { href: "/fonts/orbitron-v16-latin-400.woff2", as: "font", type: "font/woff2", crossorigin: true },
    { href: "/fonts/orbitron-v16-latin-600.woff2", as: "font", type: "font/woff2", crossorigin: true }
  ],
  prefetch = ["/images/hero-bg.jpg", "/images/services-bg.jpg"]
}: SEOProps) {
  
  // Default structured data for Zion Tech Group
  const defaultStructuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Leading AI & Technology Solutions Provider",
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
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.4496,
        "longitude": -75.7163
      },
      "geoRadius": "50000"
    }
  }), []);

  // Merge custom structured data with default
  const finalStructuredData = useMemo(() => {
    if (structuredData) {
      return { ...defaultStructuredData, ...structuredData };
    }
    return defaultStructuredData;
  }, [structuredData, defaultStructuredData]);

  // Generate robots meta tag
  const robotsContent = useMemo(() => {
    if (robots) return robots;
    if (noindex && nofollow) return "noindex, nofollow";
    if (noindex) return "noindex";
    if (nofollow) return "nofollow";
    return "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
  }, [robots, noindex, nofollow]);

  // Generate meta keywords
  const metaKeywords = useMemo(() => {
    if (typeof keywords === 'string') return keywords;
    if (Array.isArray(keywords)) return keywords.join(', ');
    return keywords;
  }, [keywords]);

  // Generate meta tags
  const metaTags = useMemo(() => [
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
  ], [
    title, description, metaKeywords, author, robotsContent, viewport, charset, language,
    ogImage, canonicalUrl, ogType, publishedTime, modifiedTime, section, tags,
    themeColor, msApplicationTileColor, appleMobileWebAppTitle, appleMobileWebAppCapable,
    appleMobileWebAppStatusBarStyle, twitterCard
  ]);

  // Generate link tags
  const linkTags = useMemo(() => [
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
  ], [
    canonicalUrl, favicon, appleTouchIcon, themeColor, manifest,
    dnsPrefetch, preconnect, preload, prefetch
  ]);

  // Generate script tags for structured data
  const scriptTags = useMemo(() => [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(finalStructuredData)
    }
  ], [finalStructuredData]);

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
      {/* Basic HTML tags */}
      <title>{title}</title>
      <html lang={language} />
      
      {/* Meta tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* Link tags */}
      {linkTags.map((link, index) => (
        <link key={index} {...link} />
      ))}
      
      {/* Script tags for structured data */}
      {scriptTags.map((script, index) => (
        <script key={index} {...script} />
      ))}
      
      {/* Additional performance optimizations */}
      <style>
        {`
          /* Critical CSS for above-the-fold content */
          .hero-section {
            background: linear-gradient(135deg, #22ddd2 0%, #8c15e9 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
          }
          
          /* Optimize font loading */
          @font-face {
            font-family: 'Orbitron';
            font-display: swap;
            src: url('/fonts/orbitron-v16-latin-400.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
          }
          
          @font-face {
            font-family: 'Orbitron';
            font-display: swap;
            src: url('/fonts/orbitron-v16-latin-600.woff2') format('woff2');
            font-weight: 600;
            font-style: normal;
          }
          
          /* Reduce layout shift */
          img {
            max-width: 100%;
            height: auto;
          }
          
          /* Optimize animations */
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
      
      {/* Performance monitoring */}
      <script>
        {`
          // Performance monitoring
          if ('performance' in window) {
            window.addEventListener('load', () => {
              const navigation = performance.getEntriesByType('navigation')[0];
              if (navigation) {
                const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
                console.log('Page load time:', loadTime + 'ms');
                
                // Send to analytics if available
                if (window.gtag) {
                  window.gtag('event', 'timing_complete', {
                    name: 'load',
                    value: Math.round(loadTime)
                  });
                }
              }
            });
          }
          
          // Core Web Vitals monitoring
          if ('web-vital' in window) {
            import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
              getCLS(console.log);
              getFID(console.log);
              getFCP(console.log);
              getLCP(console.log);
              getTTFB(console.log);
            });
          }
        `}
      </script>
    </Helmet>
  );
}
