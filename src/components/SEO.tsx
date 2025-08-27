import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  type?: 'website' | 'article' | 'product' | 'service' | 'organization';
  image?: string;
  url?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: Record<string, any>;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterCreator?: string;
  twitterSite?: string;
  locale?: string;
  alternateLanguages?: Record<string, string>;
  robots?: string;
  viewport?: string;
  themeColor?: string;
  manifest?: string;
  appleTouchIcon?: string;
  favicon?: string;
  msTileColor?: string;
  msConfig?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  type = 'website',
  image,
  url,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  canonicalUrl,
  noindex = false,
  nofollow = false,
  ogType,
  twitterCard = 'summary_large_image',
  twitterCreator = '@ziontechgroup',
  twitterSite = '@ziontechgroup',
  locale = 'en_US',
  alternateLanguages = {},
  robots,
  viewport = 'width=device-width, initial-scale=1, shrink-to-fit=no',
  themeColor = '#22ddd2',
  manifest = '/manifest.json',
  appleTouchIcon = '/apple-touch-icon.png',
  favicon = '/favicon.ico',
  msTileColor = '#22ddd2',
  msConfig = '/browserconfig.xml'
}) => {
  const fullUrl = url || window.location.href;
  const fullImage = image ? (image.startsWith('http') ? image : `${window.location.origin}${image}`) : `${window.location.origin}/images/zion-tech-group-og.jpg`;
  
  // Default structured data if none provided
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": type === 'website' ? 'WebSite' : type === 'article' ? 'Article' : 'Organization',
    "name": title,
    "description": description,
    "url": fullUrl,
    "image": fullImage,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://ziontechgroup.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/images/zion-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    }
  };

  // Merge with provided structured data
  const finalStructuredData = structuredData ? { ...defaultStructuredData, ...structuredData } : defaultStructuredData;

  // Add article-specific structured data
  if (type === 'article' && publishedTime) {
    finalStructuredData["@type"] = "Article";
    finalStructuredData["datePublished"] = publishedTime;
    if (modifiedTime) {
      finalStructuredData["dateModified"] = modifiedTime;
    }
    if (section) {
      finalStructuredData["articleSection"] = section;
    }
    if (tags.length > 0) {
      finalStructuredData["keywords"] = tags.join(', ');
    }
  }

  // Add organization-specific structured data
  if (type === 'organization') {
    finalStructuredData["@type"] = "Organization";
    finalStructuredData["address"] = {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "Global",
      "addressRegion": "Worldwide"
    };
    finalStructuredData["contactPoint"] = {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com",
      "url": "https://ziontechgroup.com/contact"
    };
    finalStructuredData["sameAs"] = [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://github.com/zion-holdings"
    ];
  }

  // Robots meta tag
  const robotsValue = robots || `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;

  // Preload critical resources
  useEffect(() => {
    // Preload critical fonts
    const preloadFonts = () => {
      const fontLinks = [
        { href: '/fonts/orbitron-v25-latin-700.woff2', as: 'font', type: 'font/woff2' },
        { href: '/fonts/rajdhani-v15-latin-500.woff2', as: 'font', type: 'font/woff2' }
      ];

      fontLinks.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font.href;
        link.as = font.as;
        link.type = font.type;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Preload critical images
    const preloadImages = () => {
      if (fullImage) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = fullImage;
        link.as = 'image';
        document.head.appendChild(link);
      }
    };

    // Preload critical CSS
    const preloadCSS = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = '/src/index.css';
      link.as = 'style';
      document.head.appendChild(link);
    };

    // Execute preloading
    preloadFonts();
    preloadImages();
    preloadCSS();

    // Cleanup function
    return () => {
      // Remove preload links on unmount
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach(link => link.remove());
    };
  }, [fullImage]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robotsValue} />
      <meta name="viewport" content={viewport} />
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={msTileColor} />
      <meta name="msapplication-config" content={msConfig} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType || type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={locale} />
      {publishedTime && <meta property="og:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="og:modified_time" content={modifiedTime} />}
      {section && <meta property="og:section" content={section} />}
      {tags.length > 0 && <meta property="og:tag" content={tags.join(', ')} />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* Alternate Languages */}
      {Object.entries(alternateLanguages).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}

      {/* Icons and Manifest */}
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <link rel="manifest" href={manifest} />

      {/* DNS Prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* Performance Meta Tags */}
      <meta name="renderer" content="webkit" />
      <meta name="force-rendering" content="webkit" />
      <meta name="browsermode" content="application" />
      <meta name="x5-orientation" content="portrait" />
      <meta name="x5-fullscreen" content="true" />
      <meta name="x5-page-mode" content="app" />

      {/* Social Media Meta Tags */}
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="3 minutes" />
      
      {/* Article-specific meta tags */}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Business-specific meta tags */}
      <meta name="business:contact:phone" content="+1-800-ZION-TECH" />
      <meta name="business:contact:email" content="contact@ziontechgroup.com" />
      <meta name="business:contact:website" content="https://ziontechgroup.com" />
      <meta name="business:contact:address" content="Global Technology Solutions" />
      <meta name="business:contact:city" content="Worldwide" />
      <meta name="business:contact:country" content="Global" />

      {/* Service Worker Registration */}
      <script>
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
        `}
      </script>

      {/* Performance Monitoring */}
      <script>
        {`
          // Performance monitoring
          if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
              list.getEntries().forEach((entry) => {
                if (entry.entryType === 'navigation') {
                  const navEntry = entry;
                  const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
                  const domContentLoaded = navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart;
                  
                  // Send to analytics if available
                  if (window.gtag) {
                    window.gtag('event', 'page_performance', {
                      event_category: 'Performance',
                      event_label: '${title}',
                      value: Math.round(loadTime),
                      custom_map: {
                        load_time: loadTime,
                        dom_content_loaded: domContentLoaded
                      }
                    });
                  }
                }
              });
            });
            
            observer.observe({ entryTypes: ['navigation'] });
          }
        `}
      </script>

      {/* Enhanced Analytics */}
      <script>
        {`
          // Enhanced analytics tracking
          window.addEventListener('load', function() {
            // Track page load time
            const loadTime = performance.now();
            
            // Track user engagement
            let startTime = Date.now();
            let maxScroll = 0;
            
            window.addEventListener('scroll', function() {
              const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
              maxScroll = Math.max(maxScroll, scrollPercent);
            });
            
            window.addEventListener('beforeunload', function() {
              const timeOnPage = Date.now() - startTime;
              
              if (window.gtag) {
                window.gtag('event', 'user_engagement', {
                  event_category: 'Engagement',
                  event_label: '${title}',
                  value: Math.round(timeOnPage / 1000),
                  custom_map: {
                    time_on_page: timeOnPage,
                    max_scroll: maxScroll,
                    page_load_time: loadTime
                  }
                });
              }
            });
          });
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
