import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: any;
  noindex?: boolean;
  canonical?: string;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions | Enterprise AI Services",
  description = "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology.",
  keywords = "AI solutions, artificial intelligence, enterprise AI, machine learning, quantum computing, autonomous systems, digital transformation, IT services, automation, business intelligence",
  image = "https://ziontechgroup.com/og-image.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  structuredData,
  noindex = false,
  canonical
}) => {
  const currentUrl = canonical || url;
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  // Default structured data
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "TechCompany",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "services": [
      "AI Solutions",
      "Quantum Computing", 
      "Autonomous Systems",
      "Digital Transformation",
      "Cloud Services",
      "Automation",
      "Business Intelligence"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "Customer Service",
      "areaServed": "US",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  useEffect(() => {
    // Update page title for analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: currentUrl
      });
    }
  }, [title, currentUrl]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Business Information */}
      <meta name="contact" content="kleber@ziontechgroup.com" />
      <meta name="phone" content="+1-302-464-0950" />
      <meta name="address" content="364 E Main St STE 1008, Middletown, DE 19709" />
      
      {/* Theme and Viewport */}
      <meta name="theme-color" content="#00ffff" />
      <meta name="color-scheme" content="dark light" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Structured Data for Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI and IT Solutions",
          "provider": {
            "@type": "TechCompany",
            "name": "Zion Tech Group"
          },
          "description": description,
          "serviceType": "Technology Services",
          "areaServed": "United States",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Technology Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Enterprise Transformation",
                  "description": "Comprehensive AI implementation strategies for enterprise organizations"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Digital Automation",
                  "description": "Process automation and workflow optimization services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cloud Infrastructure",
                  "description": "Scalable and secure cloud solutions for modern businesses"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;