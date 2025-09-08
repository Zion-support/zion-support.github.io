import React, { useEffect, useMemo } from 'react';
import { Helmet    } from 'react-helmet-async';
import { useLocation    } from 'react-router-dom';

interface SEOProps extends React.PropsWithChildren<{}> {

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: unknown;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  noindex?: boolean;
  nofollow?: boolean;
  author?: string;
}

interface PageMetadata {



  title: string;
  description: string;
  keywords: string[];
  image: string;
  type: string;
  section: string;



}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  author,
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
    if (Array.isArray(keywords)) return keywords?.join(', ');
    return keywords;
  }, [keywords]);

  // Generate meta tags
  const generateMetaTags = () => {
    const metaTags = [
      // Basic meta tags
      { name: 'description', content: finalMetadata.description },
      { name: 'keywords', content: finalMetadata.keywords.join(', ') },
      { name: 'author', content: author || 'Zion Tech Group' },
      { name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' },

      // Open Graph meta tags
      { property: 'og:title', content: finalMetadata.title },
      { property: 'og:description', content: finalMetadata.description },
      { property: 'og:image', content: finalMetadata.image },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: finalMetadata.type },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: ogLocale },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: finalMetadata.title },

      // Twitter Card meta tags
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:site', content: twitterSite },
      { name: 'twitter:creator', content: twitterCreator },
      { name: 'twitter:title', content: finalMetadata.title },
      { name: 'twitter:description', content: finalMetadata.description },
      { name: 'twitter:image', content: finalMetadata.image },
      { name: 'twitter:image:alt', content: finalMetadata.title },

      // Additional meta tags
      { name: 'theme-color', content: '#007bff' },
      { name: 'msapplication-TileColor', content: '#007bff' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
      { name: 'application-name', content: 'Zion Tech Group' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
    ];

    // Add article-specific meta tags
    if (type === 'article' && publishedTime) {
      metaTags.push(
        { property: any'article:published_time', content: publishedTime },
        { property: 'article:modified_time', content: modifiedTime || publishedTime },
        { property: 'article:author', content: author || 'Zion Tech Group' },
        { property: 'article:section', content: finalMetadata.section }
      );

      // Add article tags
      tags.forEach(tag    => {
        metaTags.push({ property: 'article:tag', content: tag });
      });
    }

    return metaTags;
  };

  // Generate link tags
  const generateLinkTags = () => {
    const linkTags = [
      // Canonical URL
      { rel: any'canonical', href: canonical || currentUrl },
      
      // Alternate languages (if you have multiple language versions)
      { rel: 'alternate', hreflang: 'en', href: currentUrl },
      { rel: 'alternate', hreflang: 'x-default', href: currentUrl },
      
      // Preconnect to external domains
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      
      // DNS prefetch
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      
      // Favicon and app icons
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      
      // RSS feed
      { rel: 'alternate', type: 'application/rss+xml', title: 'RSS Feed', href: '/rss.xml' },
    ];

    return linkTags;
  };

  // Update page title and meta tags when route changes
  useEffect(()    => {
    // Update document title
    document.title = finalMetadata.title;
    
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

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string)    => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    updateOGTag('og:title', finalMetadata.title);
    updateOGTag('og:description', finalMetadata.description);
    updateOGTag('og:image', finalMetadata.image);
    updateOGTag('og:url', currentUrl);
    updateOGTag('og:type', finalMetadata.type);

    // Update Twitter tags
    const updateTwitterTag = (name: string, content: string)    => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:title', finalMetadata.title);
    updateTwitterTag('twitter:description', finalMetadata.description);
    updateTwitterTag('twitter:image', finalMetadata.image);

    // Add structured data
    const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
    if (existingStructuredData) {
      existingStructuredData.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData || generateStructuredData());
    document.head.appendChild(script);

    // Track page view for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: finalMetadata.title,
        page_location: currentUrl,
      });
    }

  }, [finalMetadata, currentUrl, canonical, structuredData, type, publishedTime, modifiedTime, author, tags]);

  return (
    <Helmet>
      {/* Basic HTML tags */}
      <title>{title}</title>
      <html lang={language} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots Meta */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Performance monitoring */}
      <script>
        {`
          // Performance monitoring
          if ('performance' in window) {
            window.addEventListener('load', () => {
              const navigation = performance.getEntriesByType('navigation')[0];
              if (navigation) {
                const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
                // console.log('Page load time:', loadTime + 'ms');
                
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
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content={siteName} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
}