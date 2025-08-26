<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======

>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterCreator?: string;
  twitterSite?: string;
  noindex?: boolean;
<<<<<<< HEAD
  nofollow?: boolean;
  language?: string;
  author?: string;
=======
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
=======
  type?: "website" | "article" | "profile" | "product";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4514
}

export function SEO({
  title,
  description,
  keywords,
<<<<<<< HEAD
=======
  // Default to a professional Zion Tech Group image
  ogImage = "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop&crop=center",
  ogUrl,
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4514
  canonical,
<<<<<<< HEAD
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterCreator = '@ziontechgroup',
  twitterSite = '@ziontechgroup',
  noindex = false,
  nofollow = false,
  language = 'en',
  author = 'Zion Tech Group'
}: SEOProps) {
  const robotsValue = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;

=======
  noindex,
  type = "website",
<<<<<<< HEAD
  publishedTime,
  modifiedTime,
  author,
=======
  author,
  publishedTime,
  modifiedTime,
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4514
  section,
  tags,
}: SEOProps) {
  const siteTitle = "Zion Tech Group - The Future of Tech & AI Marketplace";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = "https://ziontechgroup.com";
  const fullCanonical = canonical || `${siteUrl}${window.location.pathname}`;
  
<<<<<<< HEAD
  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": siteUrl,
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "The world's first free marketplace dedicated to high-tech and artificial intelligence",
=======
  // Enhanced keywords with default tech-related terms
  const defaultKeywords = [
    "AI marketplace", "tech talent", "IT services", "software development",
    "artificial intelligence", "technology consulting", "digital transformation",
    "tech recruitment", "AI solutions", "enterprise technology"
  ];
  const allKeywords = keywords 
    ? `${keywords}, ${defaultKeywords.join(", ")}`
    : defaultKeywords.join(", ");

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "website" ? "WebSite" : "Organization",
    "name": siteTitle,
    "url": siteUrl,
    "description": "Zion Tech Group is a leading technology marketplace connecting businesses with world-class AI talent, IT services, and innovative tech solutions.",
    "logo": "https://ziontechgroup.com/logo.png",
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4514
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-ZION-TECH",
      "contactType": "customer service",
<<<<<<< HEAD
      "availableLanguage": ["English", "Spanish", "Portuguese", "Arabic"]
=======
      "availableLanguage": ["English", "Spanish", "French", "German", "Chinese"]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4514
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global",
      "addressLocality": "Worldwide"
    }
  };

<<<<<<< HEAD
  // Structured data for website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech & AI Marketplace",
    "url": siteUrl,
    "description": "Discover top AI and tech talent, services, and equipment in one place",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:site" content={twitterSite} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading provider of innovative IT solutions, AI services, and comprehensive tech services",
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
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://facebook.com/ziontechgroup",
            "https://github.com/ziontechgroup"
          ]
        })}
=======
      
      {/* Enhanced meta tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
=======
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author || "Zion Tech Group"} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Enhanced Open Graph / Facebook */}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4514
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
<<<<<<< HEAD
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
=======
      <meta property="og:url" content={ogUrl || fullCanonical} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
      {author && <meta property="og:author" content={author} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4514
      
      {/* Enhanced Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={description} />
      
      {/* Additional meta tags for better SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteTitle} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
<<<<<<< HEAD
      {/* Additional SEO links */}
      <link rel="alternate" hrefLang="en" href={fullCanonical} />
      <link rel="alternate" hrefLang="es" href={`https://es.ziontechgroup.com${window.location.pathname}`} />
      <link rel="alternate" hrefLang="pt" href={`https://pt.ziontechgroup.com${window.location.pathname}`} />
      <link rel="alternate" hrefLang="ar" href={`https://ar.ziontechgroup.com${window.location.pathname}`} />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
=======
      {/* Favicon and app icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4514
      </script>
    </Helmet>
  );
};

