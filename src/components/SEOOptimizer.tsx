import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
}

interface SEOOptimizerProps {
  data: SEOData;
  pathname?: string;
  enableAnalytics?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  data,
  pathname = '',
  enableAnalytics = true,
}) => {
  // Generate structured data for different page types
  const generateStructuredData = (): any => {
    const baseUrl = process.env.REACT_APP_BASE_URL || 'https://ziontechgroup.com';
    
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          "name": "Zion Tech Group",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`,
            "width": 200,
            "height": 60
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          }
        },
        {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          "url": baseUrl,
          "name": "Zion Tech Group",
          "description": "Leading AI consulting and enterprise automation solutions",
          "publisher": {
            "@id": `${baseUrl}/#organization`
          }
        },
        {
          "@type": "WebPage",
          "@id": `${baseUrl}${pathname}/#webpage`,
          "url": `${baseUrl}${pathname}`,
          "name": data.title,
          "description": data.description,
          "isPartOf": {
            "@id": `${baseUrl}/#website`
          },
          "about": {
            "@id": `${baseUrl}/#organization`
          }
        }
      ]
    };

    // Add service-specific structured data
    if (pathname.includes('/services/')) {
      structuredData["@graph"].push({
        "@type": "Service",
        "@id": `${baseUrl}${pathname}/#service`,
        "name": data.title,
        "description": data.description,
        "provider": {
          "@id": `${baseUrl}/#organization`
        },
        "category": "Technology Services",
        "serviceType": "AI Consulting"
      });
    }

    // Add blog-specific structured data
    if (pathname.includes('/blog/')) {
      structuredData["@graph"].push({
        "@type": "Article",
        "@id": `${baseUrl}${pathname}/#article`,
        "headline": data.title,
        "description": data.description,
        "author": {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`
        },
        "publisher": {
          "@id": `${baseUrl}/#organization`
        },
        "datePublished": new Date().toISOString(),
        "dateModified": new Date().toISOString()
      });
    }

    return structuredData;
  };

  // Track page view for analytics
  useEffect(() => {
    if (enableAnalytics && typeof window !== 'undefined') {
      // Google Analytics tracking
      if (window.gtag) {
        window.gtag('config', 'GA_TRACKING_ID', {
          page_title: data.title,
          page_location: window.location.href,
        });
      }

      // Custom analytics tracking
      if (window.analytics) {
        window.analytics.track('Page Viewed', {
          title: data.title,
          path: pathname,
          timestamp: new Date().toISOString(),
        });
      }
    }
  }, [data.title, pathname, enableAnalytics]);

  const baseUrl = process.env.REACT_APP_BASE_URL || 'https://ziontechgroup.com';
  const fullUrl = `${baseUrl}${pathname}`;
  const structuredData = data.structuredData || generateStructuredData();

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords.join(', ')} />
      <link rel="canonical" href={data.canonicalUrl || fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={data.ogType || 'website'} />
      <meta property="og:image" content={data.ogImage || `${baseUrl}/og-image.jpg`} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={data.twitterCard || 'summary_large_image'} />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={data.ogImage || `${baseUrl}/twitter-image.jpg`} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e293b" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

export default SEOOptimizer;