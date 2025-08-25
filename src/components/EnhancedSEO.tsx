import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  type: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterCreator?: string;
  twitterSite?: string;
  facebookAppId?: string;
  locale?: string;
  alternateLanguages?: { [key: string]: string };
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonicalUrl,
  noindex = false,
  nofollow = false,
  structuredData,
  twitterCard = 'summary_large_image',
  twitterCreator = '@ziontechgroup',
  twitterSite = '@ziontechgroup',
  facebookAppId,
  locale = 'en_US',
  alternateLanguages = {}
}) => {
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/logo.png",
    "description": "Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.",
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
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "serviceType": [
      "AI Solutions",
      "Quantum Computing",
      "Cybersecurity",
      "Digital Transformation",
      "IT Infrastructure",
      "Micro SaaS Solutions"
    ]
  };

  // Generate page-specific structured data
  const generatePageStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type === 'article' ? 'Article' : type === 'product' ? 'Product' : type === 'service' ? 'Service' : 'WebPage',
      "headline": title,
      "description": description,
      "url": url,
      "image": image.startsWith('http') ? image : `https://ziontechgroup.com${image}`,
      "author": {
        "@type": "Organization",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ziontechgroup.com/images/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      }
    };

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

    if (type === 'service') {
      baseData["@type"] = "Service";
      baseData["serviceType"] = section || "Technology Service";
      baseData["provider"] = {
        "@type": "Organization",
        "name": "Zion Tech Group"
      };
    }

    return baseData;
  };

  const pageStructuredData = generatePageStructuredData();
  const finalStructuredData = structuredData || pageStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Language and Locale */}
      <meta property="og:locale" content={locale} />
      <html lang={locale.split('_')[0]} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith('http') ? image : `https://ziontechgroup.com${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={locale} />
      
      {/* Open Graph Article Specific */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `https://ziontechgroup.com${image}`} />
      
      {/* Facebook Meta Tags */}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Alternate Languages */}
      {Object.entries(alternateLanguages).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
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
              "item": url
            }
          ]
        })}
      </script>
      
      {/* WebSite Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "description": "Leading provider of AI-powered technology solutions and enterprise services",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;