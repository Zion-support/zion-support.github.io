import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

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
}

export function SEO({
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology.",
  keywords = "AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation",
  ogImage = "/og-image.jpg",
  canonicalUrl = "https://ziontechgroup.com",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData
}: SEOProps) {
  
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Leading AI & Technology Solutions Provider",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "offers": {
      "@type": "Offer",
      "category": "Technology Services",
      "description": "AI, Quantum Computing, and Digital Transformation Solutions"
    }
  };

  // Merge with provided structured data
  const finalStructuredData = structuredData || defaultStructuredData;

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLinks = [
        { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { rel: 'preload', href: '/fonts/roboto-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' }
      ];

      fontLinks.forEach(link => {
        const linkElement = document.createElement('link');
        Object.assign(linkElement, link);
        document.head.appendChild(linkElement);
      });

      // Preload critical images
      const imageLinks = [
        { rel: 'preload', href: ogImage, as: 'image' },
        { rel: 'preload', href: '/logo.png', as: 'image' }
      ];

      imageLinks.forEach(link => {
        const linkElement = document.createElement('link');
        Object.assign(linkElement, link);
        document.head.appendChild(linkElement);
      });
    };

    // Add meta viewport for mobile optimization
    const addViewportMeta = () => {
      let viewportMeta = document.querySelector('meta[name="viewport"]');
      if (!viewportMeta) {
        viewportMeta = document.createElement('meta');
        viewportMeta.setAttribute('name', 'viewport');
        document.head.appendChild(viewportMeta);
      }
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    };

    // Add performance hints
    const addPerformanceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//cdn.jsdelivr.net' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];

      hints.forEach(hint => {
        const linkElement = document.createElement('link');
        Object.assign(linkElement, hint);
        document.head.appendChild(linkElement);
      });
    };

    // Initialize SEO optimizations
    preloadCriticalResources();
    addViewportMeta();
    addPerformanceHints();

    // Cleanup function
    return () => {
      // Remove any dynamically added elements if needed
      const dynamicLinks = document.querySelectorAll('link[rel="preload"], link[rel="dns-prefetch"], link[rel="preconnect"]');
      dynamicLinks.forEach(link => {
        if (link.getAttribute('href')?.includes('fonts.googleapis.com') || 
            link.getAttribute('href')?.includes('cdn.jsdelivr.net')) {
          link.remove();
        }
      });
    };
  }, [ogImage]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
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
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional SEO Scripts */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Breadcrumb Structured Data */}
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
              "name": title,
              "item": canonicalUrl
            }
          ]
        })}
      </script>
      
      {/* Performance and Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      
      {/* Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Language and Region */}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="en" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Business Information */}
      <meta name="business:contact:phone" content="+1-555-0123" />
      <meta name="business:contact:email" content="contact@ziontechgroup.com" />
      <meta name="business:contact:address" content="123 Tech Street, Innovation City, IC 12345" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Analytics and Tracking */}
      <meta name="google-analytics" content="GA_TRACKING_ID" />
      <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
      
      {/* Mobile App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* PWA Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech" />
      
      {/* Search Engine Optimization */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Zion Tech Group",
          "image": "https://ziontechgroup.com/office.jpg",
          "telephone": "+1-555-0123",
          "email": "contact@ziontechgroup.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Tech Street",
            "addressLocality": "Innovation City",
            "addressRegion": "IC",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.7128",
            "longitude": "-74.0060"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          }
        })}
      </script>
    </Helmet>
  );
}
