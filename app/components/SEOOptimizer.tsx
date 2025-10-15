import React, { useEffect, memo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  structuredData?: object;
  sitemapUrl?: string;
  robotsTxtUrl?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = memo(({
  structuredData,
  sitemapUrl = '/sitemap.xml',
  robotsTxtUrl = '/robots.txt'
}) => {
  useEffect(() => {
    // Add structured data for better SEO
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [structuredData]);

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Advanced AI and IT Solutions for the modern world",
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
      "https://ziontechgroup.com"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "AI Solutions",
        "description": "Advanced artificial intelligence and machine learning solutions"
      },
      {
        "@type": "Service", 
        "name": "IT Services",
        "description": "Comprehensive technology services including development and infrastructure"
      },
      {
        "@type": "Service",
        "name": "Cloud Infrastructure",
        "description": "Scalable cloud solutions and infrastructure management"
      }
    ]
  };

  return (
    <Helmet>
      {/* Enhanced meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Sitemap and robots */}
      <link rel="sitemap" type="application/xml" href={sitemapUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
});

SEOOptimizer.displayName = 'SEOOptimizer';

export default SEOOptimizer;