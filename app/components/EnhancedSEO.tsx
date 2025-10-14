<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: any;
  noIndex?: boolean;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered solutions, cybersecurity, cloud computing, and digital transformation services. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, IT services, cybersecurity, cloud computing, digital transformation, technology services, Zion Tech Group, machine learning, 5G solutions, micro SaaS",
  canonical,
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  structuredData,
  noIndex = false,
}) => {
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
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered Analytics"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Migration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Cybersecurity Solutions"
          }
        }
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

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
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || "https://ziontechgroup.com"} />
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
      <meta name="twitter:url" content={canonical || "https://ziontechgroup.com"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Structured Data for Services */}
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
=======
'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noIndex?: boolean;
  alternateUrls?: { hreflang: string; href: string }[];
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  alternateUrls = [],
}) => {
  useEffect(() => {
    // Update page title for better UX
    document.title = title;
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Add keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords.join(', '));
      document.head.appendChild(metaKeywords);
    }

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonicalLink);
    }

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: ogType },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: 'Zion Tech Group' },
    ];

    ogTags.forEach(({ property, content }) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag);
      }
    });

    // Add Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ];

    twitterTags.forEach(({ name, content }) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (twitterTag) {
        twitterTag.setAttribute('content', content);
      } else {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        twitterTag.setAttribute('content', content);
        document.head.appendChild(twitterTag);
      }
    });

    // Add robots meta tag
    if (noIndex) {
      let robotsTag = document.querySelector('meta[name="robots"]');
      if (robotsTag) {
        robotsTag.setAttribute('content', 'noindex, nofollow');
      } else {
        robotsTag = document.createElement('meta');
        robotsTag.setAttribute('name', 'robots');
        robotsTag.setAttribute('content', 'noindex, nofollow');
        document.head.appendChild(robotsTag);
      }
    }

    // Add alternate language URLs
    alternateUrls.forEach(({ hreflang, href }) => {
      let alternateLink = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (alternateLink) {
        alternateLink.setAttribute('href', href);
      } else {
        alternateLink = document.createElement('link');
        alternateLink.setAttribute('rel', 'alternate');
        alternateLink.setAttribute('hreflang', hreflang);
        alternateLink.setAttribute('href', href);
        document.head.appendChild(alternateLink);
      }
    });

    // Add structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (structuredDataScript) {
        structuredDataScript.textContent = JSON.stringify(structuredData);
      } else {
        structuredDataScript = document.createElement('script');
        structuredDataScript.type = 'application/ld+json';
        structuredDataScript.textContent = JSON.stringify(structuredData);
        document.head.appendChild(structuredDataScript);
      }
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, twitterCard, structuredData, noIndex, alternateUrls]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#00ffff" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/css/critical.css" as="style" />
>>>>>>> 2e5e52a4eac9cfecef52ec8f7193a2474fdee36e
    </Helmet>
  );
};

export default EnhancedSEO;