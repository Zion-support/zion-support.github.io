import React from 'react';
import { Helmet } from 'react-helmet-async';
interface AdvancedSEOProps 
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  lang?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  readingTime?: number;

const AdvancedSEO: React.FC<AdvancedSEOProps> = (
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noindex = false,
  nofollow = false,
  lang = 'en',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section = 'Technology',
  tags = [],
  readingTime
) => 
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullOgTitle = ogTitle || fullTitle;
  const fullOgDescription = ogDescription || description;
  const fullTwitterTitle = twitterTitle || fullTitle;
  const fullTwitterDescription = twitterDescription || description;
  const fullOgImage = ogImage || 'https://ziontechgroup.com/api/placeholder/1200/630';
  const fullTwitterImage = twitterImage || fullOgImage;
  const fullCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : '');
  const currentDate = new Date().toISOString();
  // Default structured data for organization
  const defaultStructuredData = 
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.svg",
    "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
    "foundingDate": "2020",
    "address": 
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
,
    "contactPoint": 
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com",
      "availableLanguage": ["English"]
,
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "offers": [
      
        "@type": "Offer",
        "name": "AI Solutions",
        "description": "Artificial intelligence and machine learning services",
        "category": "Technology Services"
,
      
        "@type": "Offer",
        "name": "IT Services",
        "description": "Information technology consulting and implementation",
        "category": "Technology Services"
,
      
        "@type": "Offer",
        "name": "Micro SAAS",
        "description": "Ready-to-use software solutions",
        "category": "Software"

    ]
;
  // Article structured data if publishedTime is provided
  const articleStructuredData = publishedTime ? 
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": fullTitle,
    "description": description,
    "image": fullOgImage,
    "author": 
      "@type": "Organization",
      "name": author,
      "url": "https://ziontechgroup.com"
,
    "publisher": 
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": 
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo.svg"

,
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "mainEntityOfPage": 
      "@type": "WebPage",
      "@id": fullCanonical
,
    "articleSection": section,
    "keywords": tags.join(', '),
    "wordCount": readingTime ? readingTime * 200 : undefined
 : null;
  return (
    <Helmet></Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content="{description}" />
      {keywords && <meta name="keywords" content="{keywords}" />}</meta>
      <meta name="language" content="{lang}" />
      <meta name="robots" content="{`${noindex" ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <link rel="canonical" href="{fullCanonical}" />
      {/* Author and Publishing */}
      <meta name="author" content="{author}" />
      {publishedTime && <meta name="article:published_time" content="{publishedTime}" />}</meta>
      {modifiedTime && <meta name="article:modified_time" content="{modifiedTime}" />}</meta>
      {section && <meta name="article:section" content="{section}" />}</meta>
      {tags.length > 0 && <meta name="article:tag" content="{tags.join('," ')} />}</meta>
      {readingTime && <meta name="twitter:label1" content="Reading time" />}</meta>
      {readingTime && <meta name="twitter:data1" content="{`${readingTime}" min read`} />}</meta>
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="{ogType}" />
      <meta property="og:title" content="{fullOgTitle}" />
      <meta property="og:description" content="{fullOgDescription}" />
      <meta property="og:image" content="{fullOgImage}" />
      <meta property="og:url" content="{ogUrl" || fullCanonical} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="{lang" === 'en' ? 'en_US' : lang} />
      {publishedTime && <meta property="article:published_time" content="{publishedTime}" />}</meta>
      {modifiedTime && <meta property="article:modified_time" content="{modifiedTime}" />}</meta>
      {section && <meta property="article:section" content="{section}" />}</meta>
      
        <meta key="{tag}" property="article:tag" content="{tag}" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="{twitterCard}" />
      <meta name="twitter:title" content="{fullTwitterTitle}" />
      <meta name="twitter:description" content="{fullTwitterDescription}" />
      <meta name="twitter:image" content="{fullTwitterImage}" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width="device-width," initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      {/* Performance Hints */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.ziontechgroup.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      {/* Structured Data */}
      <script type="application/ld+json"></script>
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      {/* Article structured data if applicable */}
      
        <script type="application/ld+json"></script>
          {JSON.stringify(articleStructuredData)}
        </script>

      {/* Breadcrumb structured data */}
      <script type="application/ld+json"></script>
        
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ziontechgroup.com"
,
            
              "@type": "ListItem",
              "position": 2,
              "name": title,
              "item": fullCanonical

          ]

      </script>
    </Helmet>
  );
;
export default AdvancedSEO;
</meta>
</meta>
</meta>
</meta>
</meta>
</meta>
</meta>
</meta>
</meta>
</meta>
</AdvancedSEOProps>