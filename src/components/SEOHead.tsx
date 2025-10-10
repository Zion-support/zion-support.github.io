import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - AI-Powered Enterprise Solutions & Digital Transformation',
  description = 'Leading provider of AI-powered enterprise solutions, IT services, and digital transformation. Machine learning, computer vision, cybersecurity, cloud migration, and more.',
  keywords = 'AI solutions, artificial intelligence, machine learning, computer vision, natural language processing, cybersecurity, cloud migration, IT services, digital transformation, enterprise solutions, automation, data analytics, business intelligence',
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  noFollow = false
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "alternateName": "Zion Tech",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/logo.png",
    "description": "Leading provider of AI-powered enterprise solutions and digital transformation services",
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Kleber Santos"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": "kleber@ziontechgroup.com",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "AI Solutions",
        "description": "Artificial intelligence solutions including machine learning, computer vision, and natural language processing",
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        }
      },
      {
        "@type": "Service",
        "name": "IT Services",
        "description": "Comprehensive IT services including cloud migration, cybersecurity, and infrastructure management",
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        }
      },
      {
        "@type": "Service",
        "name": "Digital Transformation",
        "description": "End-to-end digital transformation services to modernize business operations",
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        }
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Cybersecurity",
      "Cloud Computing",
      "Data Analytics",
      "Business Intelligence",
      "Digital Transformation",
      "IT Consulting"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#00ffff" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Zion Tech Group - AI & IT Solutions" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Zion Tech Group - AI & IT Solutions" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Structured Data for Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "AI Services",
          "description": "Comprehensive list of AI services offered by Zion Tech Group",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "Machine Learning Solutions",
              "description": "Custom ML models for predictive analytics and decision-making",
              "provider": {
                "@type": "Organization",
                "name": "Zion Tech Group"
              }
            },
            {
              "@type": "Service",
              "name": "Natural Language Processing",
              "description": "Advanced NLP solutions for text analysis and language understanding",
              "provider": {
                "@type": "Organization",
                "name": "Zion Tech Group"
              }
            },
            {
              "@type": "Service",
              "name": "Computer Vision",
              "description": "Image and video analysis solutions for object detection and recognition",
              "provider": {
                "@type": "Organization",
                "name": "Zion Tech Group"
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;