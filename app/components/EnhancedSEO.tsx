import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  structuredData?: any;
  faqs?: FAQItem[];
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Transform your business with Zion Tech Group's cutting-edge AI solutions, cybersecurity services, and digital transformation expertise. 99.9% uptime SLA, 24/7 support.",
  keywords = "AI solutions, IT services, cybersecurity, cloud computing, digital transformation, business automation, technology consulting, Zion Tech Group, machine learning, 5G solutions, micro SaaS, enterprise software",
  canonical,
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  noIndex = false,
  structuredData,
  faqs = [],
  breadcrumbs = []
}) => {
  const location = useLocation();
  const currentUrl = `https://ziontechgroup.com${location.pathname}`;
  const finalCanonical = canonical || currentUrl;

  // Generate FAQ structured data
  const generateFAQStructuredData = () => {
    if (faqs.length === 0) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  };

  // Generate breadcrumb structured data
  const generateBreadcrumbStructuredData = () => {
    if (breadcrumbs.length === 0) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  };

  // Default structured data
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
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
      "areaServed": "US",
      "availableLanguage": "English",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "AI Solutions",
        "description": "Cutting-edge artificial intelligence solutions for business automation and optimization"
      },
      {
        "@type": "Service", 
        "name": "IT Services",
        "description": "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and custom development"
      },
      {
        "@type": "Service",
        "name": "5G Implementation",
        "description": "Next-generation connectivity and infrastructure services for modern businesses"
      },
      {
        "@type": "Service",
        "name": "Micro SaaS Solutions",
        "description": "Ready-to-use software solutions for immediate deployment and business growth"
      }
    ]
  };

  // Page-specific structured data
  const getPageStructuredData = () => {
    const path = location.pathname;
    
    if (path === '/') {
      return {
        ...defaultStructuredData,
        "@type": "WebSite",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ziontechgroup.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };
    }
    
    if (path === '/about') {
      return {
        ...defaultStructuredData,
        "@type": "AboutPage"
      };
    }
    
    if (path === '/contact') {
      return {
        ...defaultStructuredData,
        "@type": "ContactPage"
      };
    }
    
    if (path.startsWith('/services') || path.startsWith('/ai-') || path.startsWith('/zion-')) {
      return {
        ...defaultStructuredData,
        "@type": "Service",
        "name": title,
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "category": "Technology Services"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "serviceType": "AI and IT Solutions"
      };
    }
    
    return defaultStructuredData;
  };

  const finalStructuredData = structuredData || getPageStructuredData();
  const faqStructuredData = generateFAQStructuredData();
  const breadcrumbStructuredData = generateBreadcrumbStructuredData();

  // Track page views
  useEffect(() => {
    // Track page view in analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: currentUrl,
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
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Zion Tech Group`} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="rating" content="General" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="1 days" />
      <meta name="expires" content="never" />
      <meta name="coverage" content="worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-tooltip" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-navbutton-color" content="#8b5cf6" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Language and Geo Tags */}
      <meta name="language" content="en-US" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* FAQ Structured Data */}
      {faqStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      )}
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      )}
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Resource hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Service Worker */}
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
    </Helmet>
  );
};

export default EnhancedSEO;
