import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: any;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  facebookAppId?: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    siteName?: string;
    locale?: string;
  };
}

export function EnhancedSEO({
  title,
  description,
  keywords = [],
  author = 'Zion Tech Group',
  image = '/images/zion-tech-group-og.jpg',
  url = window.location.href,
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noindex = false,
  nofollow = false,
  structuredData,
  twitterCard = 'summary_large_image',
  facebookAppId,
  googleAnalyticsId,
  googleTagManagerId,
  openGraph
}: SEOProps) {
  
  // Default Open Graph data
  const defaultOpenGraph = useMemo(() => ({
    title: openGraph?.title || title,
    description: openGraph?.description || description,
    image: openGraph?.image || image,
    url: openGraph?.url || url,
    type: openGraph?.type || type,
    siteName: openGraph?.siteName || 'Zion Tech Group',
    locale: openGraph?.locale || 'en_US'
  }), [openGraph, title, description, image, url, type]);

  // Generate structured data
  const generateStructuredData = useMemo(() => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type === 'article' ? 'Article' : 'WebPage',
      "name": title,
      "description": description,
      "url": url,
      "image": image,
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
          "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      }
    };

    // Add article-specific data
    if (type === 'article' && publishedTime) {
      baseData["@type"] = "Article";
      baseData["datePublished"] = publishedTime;
      if (modifiedTime) {
        baseData["dateModified"] = modifiedTime;
      }
      if (section) {
        baseData["articleSection"] = section;
      }
      if (tags.length > 0) {
        baseData["keywords"] = tags.join(', ');
      }
    }

    // Add service-specific data
    if (type === 'service') {
      baseData["@type"] = "Service";
      baseData["provider"] = {
        "@type": "Organization",
        "name": "Zion Tech Group"
      };
      if (tags.length > 0) {
        baseData["category"] = tags[0];
      }
    }

    // Add product-specific data
    if (type === 'product') {
      baseData["@type"] = "Product";
      baseData["brand"] = {
        "@type": "Brand",
        "name": "Zion Tech Group"
      };
    }

    return baseData;
  }, [title, description, url, image, type, publishedTime, modifiedTime, section, tags, author]);

  // Generate meta keywords
  const metaKeywords = useMemo(() => {
    const defaultKeywords = [
      'AI solutions',
      'business intelligence',
      'IT services',
      'digital transformation',
      'cloud computing',
      'cybersecurity',
      'data analytics',
      'machine learning',
      'automation',
      'technology consulting'
    ];
    
    return [...new Set([...keywords, ...defaultKeywords, ...tags])].join(', ');
  }, [keywords, tags]);

  // Generate canonical URL
  const canonicalUrl = useMemo(() => {
    if (canonical) return canonical;
    
    const baseUrl = 'https://ziontechgroup.com';
    const path = window.location.pathname;
    return `${baseUrl}${path}`;
  }, [canonical]);

  // Inject Google Analytics
  useEffect(() => {
    if (googleAnalyticsId && typeof window !== 'undefined') {
      // Google Analytics 4
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', googleAnalyticsId, {
          page_title: title,
          page_location: url
        });
      }
    }
  }, [googleAnalyticsId, title, url]);

  // Inject Google Tag Manager
  useEffect(() => {
    if (googleTagManagerId && typeof window !== 'undefined') {
      if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
          event: 'page_view',
          page_title: title,
          page_location: url,
          page_type: type
        });
      }
    }
  }, [googleTagManagerId, title, url, type]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={defaultOpenGraph.title} />
      <meta property="og:description" content={defaultOpenGraph.description} />
      <meta property="og:image" content={defaultOpenGraph.image} />
      <meta property="og:url" content={defaultOpenGraph.url} />
      <meta property="og:type" content={defaultOpenGraph.type} />
      <meta property="og:site_name" content={defaultOpenGraph.siteName} />
      <meta property="og:locale" content={defaultOpenGraph.locale} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Facebook App ID */}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#38bdf8" />
      <meta name="msapplication-TileColor" content="#38bdf8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || generateStructuredData)}
      </script>
      
      {/* Additional Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
          "description": "Leading provider of AI-powered business solutions and IT services",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "info@ziontechgroup.com"
          },
          "sameAs": [
            "https://www.linkedin.com/company/zion-tech-group",
            "https://twitter.com/ziontechgroup",
            "https://www.facebook.com/ziontechgroup"
          ],
          "foundingDate": "2020",
          "numberOfEmployees": "50-100",
          "industry": "Technology",
          "serviceType": [
            "AI Business Intelligence",
            "IT Services",
            "Digital Transformation",
            "Cloud Computing",
            "Cybersecurity"
          ]
        })}
      </script>
      
      {/* Web App Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Performance Hints */}
      <link rel="preload" href="/fonts/orbitron-v19-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/rajdhani-v15-latin-500.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Critical CSS */}
      <style>
        {`
          /* Critical CSS for above-the-fold content */
          .bg-futuristic {
            background: radial-gradient(1200px 600px at 10% -10%, rgba(56,189,248,0.15), transparent 60%),
                        radial-gradient(900px 500px at 110% 10%, rgba(168,85,247,0.10), transparent 60%),
                        linear-gradient(180deg, rgba(2,6,23,1) 0%, rgba(2,6,23,0.95) 100%);
          }
          
          .container-responsive {
            margin: 0 auto;
            padding: 0 1rem;
            max-width: 80rem;
          }
          
          @media (min-width: 640px) {
            .container-responsive {
              padding: 0 1.5rem;
            }
          }
          
          @media (min-width: 1024px) {
            .container-responsive {
              padding: 0 2rem;
            }
          }
        `}
      </style>
    </Helmet>
  );
}

// Extend Window interface for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}