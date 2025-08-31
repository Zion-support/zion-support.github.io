<<<<<<< HEAD
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
=======
import React, { useEffect, useCallback } from 'react.ts';
import { Helmet               } from 'react-helmet-async.ts';

interface EnhancedSEOProps extends React.PropsWithChildren<{}> {

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'service';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
<<<<<<< HEAD
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
=======
  twitterCreator?: string;
  twitterSite?: string;
  robots?: string;
  viewport?: string;
  charset?: string;
  themeColor?: string;
  manifest?: string;
  appleTouchIcon?: string;
  favicon?: string;
  msTileColor?: string;
  msConfig?: string;
=======

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
}

interface EnhancedSEOProps {
  data: SEOData;
  children?: React.ReactNode;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ data, children }) => {
  const {
    title,
    description,
    keywords = [],
    author = 'Zion Tech Group',
    canonical,
    ogImage = '/images/zion-tech-group-og.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    structuredData,
    noIndex = false,
    noFollow = false
  } = data;

  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Empowering the future through innovative technology solutions including AI, IT services, and MicroSaaS platforms.",
    "foundingDate": "2020",
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
<<<<<<< HEAD
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Innovation Drive",
      "addressLocality": "Tech City",
      "addressRegion": "CA",
      "postalCode": "90210",
      "addressCountry": "US"
    },
=======
<<<<<<< HEAD
    "sameAs"[
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ]
=======
    "sameAs": [
      "https: anyanyanyanyanyanyanyanyanyanyanyanyanyany//twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "100+",
    "serviceArea": "Worldwide",
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
            "name": "IT Services",
            "description": "Comprehensive IT infrastructure and consulting services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MicroSaaS Platforms",
            "description": "Innovative software-as-a-service solutions for businesses"
          }
        }
      ]
    }
  };

<<<<<<< HEAD
  // Merge custom structured data with default
  const finalStructuredData = structuredData 
    ? { ...defaultStructuredData, ...structuredData }
    : defaultStructuredData;

  // Generate meta robots content
  const robotsContent = [
    noIndex ? 'noindex' : 'index',
    noFollow ? 'nofollow' : 'follow'
  ].join(',');

  // Enhanced meta description with proper length
  const optimizedDescription = description.length > 160 
    ? description.substring(0, 157) + '...'
    : description;

  // Enhanced title with proper length
  const optimizedTitle = title.length > 60 
    ? title.substring(0, 57) + '...'
    : title;

  // Generate keywords string
  const keywordsString = keywords.join(', ');

  // Set canonical URL
  const canonicalUrl = canonical || window.location.href;

  useEffect(() => {
    // Update page title for better UX
    document.title = optimizedTitle;
=======
  // Preload critical resources
  useEffect(()               => {
    // Preload critical fonts
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
    ];
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

    // Add structured data to page
    if (finalStructuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(finalStructuredData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
<<<<<<< HEAD
  }, [optimizedTitle, finalStructuredData]);
=======

    // DNS prefetch for external domains
    const dnsPrefetchDomains = [
      'https: anyanyanyanyanyanyanyanyanyanyanyanyanyany//fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com'
    ];

    dnsPrefetchDomains.forEach(domain               => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, [ogImage]);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{optimizedTitle}</title>
        <meta name="description" content={optimizedDescription} />
        <meta name="keywords" content={keywordsString} />
        <meta name="author" content={author} />
        <meta name="robots" content={robotsContent} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={optimizedTitle} />
        <meta property="og:description" content={optimizedDescription} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        <meta name="twitter:title" content={optimizedTitle} />
        <meta name="twitter:description" content={optimizedDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

        {/* Language and Region */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Tech City, CA" />

        {/* Business Information */}
        <meta name="business:contact_data:street_address" content="123 Innovation Drive" />
        <meta name="business:contact_data:locality" content="Tech City" />
        <meta name="business:contact_data:region" content="CA" />
        <meta name="business:contact_data:postal_code" content="90210" />
        <meta name="business:contact_data:country_name" content="United States" />
        <meta name="business:contact_data:phone_number" content="+1-555-0123" />
        <meta name="business:contact_data:email" content="info@ziontechgroup.com" />

        {/* Social Media Verification */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional Meta Tags for Better SEO */}
        <meta name="application-name" content="Zion Tech Group" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

        {/* Performance and Caching */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
        <meta httpEquiv="Expires" content="31536000" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(finalStructuredData)}
        </script>
      </Helmet>

      {children}
    </>
  );
};

// Predefined SEO configurations for common pages
export const SEOConfigs = {
  home: {
    title: "Zion Tech Group - Empowering the Future Through Innovative Technology Solutions",
    description: "Leading provider of AI solutions, IT services, and MicroSaaS platforms. Transform your business with cutting-edge technology and expert consulting.",
    keywords: ["AI solutions", "IT services", "MicroSaaS", "technology consulting", "digital transformation", "artificial intelligence", "machine learning", "cloud computing", "cybersecurity"],
    ogType: "website" as const,
    structuredData: {
      "@type": "WebSite",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ziontechgroup.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },

  about: {
    title: "About Zion Tech Group - Our Mission and Vision",
    description: "Learn about Zion Tech Group's mission to revolutionize technology solutions. Discover our team, values, and commitment to innovation.",
    keywords: ["about us", "company history", "team", "mission", "vision", "values", "leadership", "company culture"],
    ogType: "website" as const
  },

  services: {
    title: "Technology Services - AI, IT, and MicroSaaS Solutions",
    description: "Comprehensive technology services including AI solutions, IT infrastructure, and innovative MicroSaaS platforms. Transform your business today.",
    keywords: ["AI services", "IT consulting", "MicroSaaS platforms", "technology services", "digital solutions", "business transformation"],
    ogType: "website" as const,
    structuredData: {
      "@type": "Service",
      "name": "Technology Services",
      "provider": {
        "@type": "Organization",
        "name": "Zion Tech Group"
      },
      "serviceType": "Technology Consulting and Solutions"
    }
  },

  contact: {
    title: "Contact Zion Tech Group - Get in Touch Today",
    description: "Ready to transform your business? Contact Zion Tech Group for expert technology consulting and innovative solutions.",
    keywords: ["contact us", "get quote", "consultation", "support", "sales", "inquiry"],
    ogType: "website" as const,
    structuredData: {
      "@type": "ContactPage",
      "name": "Contact Zion Tech Group",
      "description": "Get in touch for technology consulting and solutions"
    }
  },

  aiServices: {
    title: "AI Solutions - Artificial Intelligence and Machine Learning Services",
    description: "Cutting-edge AI solutions including machine learning, natural language processing, and predictive analytics. Transform your business with intelligent automation.",
    keywords: ["AI solutions", "machine learning", "artificial intelligence", "ML", "deep learning", "predictive analytics", "NLP", "computer vision"],
    ogType: "service" as const,
    structuredData: {
      "@type": "Service",
      "name": "AI Solutions",
      "description": "Artificial Intelligence and Machine Learning Services",
      "provider": {
        "@type": "Organization",
        "name": "Zion Tech Group"
      },
      "serviceType": "AI and Machine Learning"
    }
  },

  itServices: {
    title: "IT Services - Infrastructure, Security, and Consulting",
    description: "Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and strategic consulting.",
    keywords: ["IT services", "infrastructure", "cybersecurity", "cloud computing", "IT consulting", "network security", "data center"],
    ogType: "service" as const,
    structuredData: {
      "@type": "Service",
      "name": "IT Services",
      "description": "Infrastructure, Security, and Consulting Services",
      "provider": {
        "@type": "Organization",
        "name": "Zion Tech Group"
      },
      "serviceType": "Information Technology"
    }
  },

  microSaaS: {
    title: "MicroSaaS Solutions - Innovative Software Platforms",
    description: "Revolutionary MicroSaaS platforms designed for modern businesses. Scalable, efficient, and cost-effective software solutions.",
    keywords: ["MicroSaaS", "software platforms", "SaaS solutions", "business software", "cloud applications", "enterprise software"],
    ogType: "service" as const,
    structuredData: {
      "@type": "Service",
      "name": "MicroSaaS Solutions",
      "description": "Innovative Software Platforms for Modern Businesses",
      "provider": {
        "@type": "Organization",
        "name": "Zion Tech Group"
      },
      "serviceType": "Software as a Service"
    }
  }
};

// Hook for easy SEO management
export const useSEO = (config: keyof typeof SEOConfigs | SEOData) => {
  const seoData = typeof config === 'string' ? SEOConfigs[config] : config;
  return { EnhancedSEO, seoData };
};