import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  lang?: string;
  themeColor?: string;
  viewport?: string;
  robots?: string;
  charset?: string;
  refresh?: number;
  alternateLanguages?: Array<{ lang: string; url: string }>;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title = "Zion Tech Group - Revolutionary AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI, quantum computing, and next-generation technology solutions. Experience the future of digital transformation.",
  keywords = [
    "AI solutions",
    "quantum computing",
    "technology consulting",
    "digital transformation",
    "cybersecurity",
    "cloud infrastructure",
    "machine learning",
    "blockchain",
    "IoT solutions",
    "enterprise technology"
  ],
  author = "Zion Tech Group",
  canonical,
  ogImage = "/images/zion-og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noindex = false,
  nofollow = false,
  lang = "en",
  themeColor = "#06b6d4",
  viewport = "width=device-width, initial-scale=1.0",
  robots = "index, follow",
  charset = "utf-8",
  refresh,
  alternateLanguages = []
}) => {
  const fullTitle = useMemo(() => {
    const baseTitle = "Zion Tech Group";
    return title === baseTitle ? title : `${title} | ${baseTitle}`;
  }, [title]);

  const fullDescription = useMemo(() => {
    return description.length > 160 
      ? `${description.substring(0, 157)}...` 
      : description;
  }, [description]);

  const defaultStructuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-logo.png",
    "description": "Revolutionary AI & Technology Solutions",
    "foundingDate": "2020",
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "San Francisco",
      "addressRegion": "CA"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 37.7749,
        "longitude": -122.4194
      },
      "geoRadius": "50000"
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
            "description": "Advanced artificial intelligence and machine learning solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Infrastructure",
            "description": "Scalable cloud computing and DevOps solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity",
            "description": "Comprehensive security and compliance solutions"
          }
        }
      ]
    }
  }), []);

  const finalStructuredData = useMemo(() => {
    if (structuredData) {
      return [defaultStructuredData, structuredData];
    }
    return [defaultStructuredData];
  }, [structuredData, defaultStructuredData]);

  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Add theme color meta tag
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', themeColor);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = themeColor;
      document.head.appendChild(meta);
    }

    // Add viewport meta tag if not present
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = viewport;
      document.head.appendChild(meta);
    }

    // Add charset meta tag if not present
    const charsetMeta = document.querySelector('meta[charset]');
    if (!charsetMeta) {
      const meta = document.createElement('meta');
      meta.charset = charset;
      document.head.appendChild(meta);
    }

    // Add robots meta tag
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', robots);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = robots;
      document.head.appendChild(meta);
    }

    // Add refresh meta tag if specified
    if (refresh) {
      const refreshMeta = document.querySelector('meta[http-equiv="refresh"]');
      if (refreshMeta) {
        refreshMeta.setAttribute('content', refresh.toString());
      } else {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'refresh';
        meta.content = refresh.toString();
        document.head.appendChild(meta);
      }
    }

    // Add alternate language links
    alternateLanguages.forEach(({ lang: langCode, url }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = langCode;
      link.href = url;
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      // Remove alternate language links
      alternateLanguages.forEach(({ lang: langCode }) => {
        const link = document.querySelector(`link[hreflang="${langCode}"]`);
        if (link) {
          link.remove();
        }
      });
    };
  }, [fullTitle, lang, themeColor, viewport, charset, robots, refresh, alternateLanguages]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={lang} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      
      {/* Structured Data */}
      {finalStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data)
          }}
        />
      ))}
      
      {/* Additional SEO Meta Tags */}
      <meta name="generator" content="Zion Tech Group Platform" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="Global" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Conditional Meta Tags */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {noindex && nofollow && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Performance and Analytics */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      
      {/* Social Media Verification */}
      <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
      <meta name="pinterest-site-verification" content="your-pinterest-verification-code" />
      
      {/* Additional Performance Optimizations */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/css/critical.css" as="style" />
      <link rel="preload" href="/js/critical.js" as="script" />
    </Helmet>
  );
};

export default EnhancedSEO;