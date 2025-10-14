import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  readingTime?: number;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions'
  canonicalUrl,
  ogImage = '/api/placeholder/1200/630'
  ogType = 'website'
  twitterCard = 'summary_large_image'
  structuredData,
  noIndex = false,
  noFollow = false,
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const siteUrl = "https://ziontechgroup.com";
  const defaultImage = `${siteUrl}/api/placeholder/1200/630`;
  
  const fullTitle = title.includes("Zion Tech Group") ? title : `${title} | Zion Tech Group`;
  const fullDescription = description || "Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.";
  const fullKeywords = keywords || "AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology";
  
  const defaultKeywords = 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology, Zion Tech Group';
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  const defaultStructuredData = {
    '@context': 'https://schema.org'
    '@type': 'Organization'
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.'
    address: {
      '@type': 'PostalAddress'
      addressLocality: 'Middletown'
      addressRegion: 'DE'
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint'
      telephone: '+1-302-464-0950'
      contactType: 'customer service'
      email: 'kleber@ziontechgroup.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group'
      'https://github.com/ziontechgroup'
      'https://twitter.com/ziontechgroup'
    ]
  };

  const articleStructuredData = publishedTime ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": fullDescription,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.svg`
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "image": ogImage || defaultImage,
    "url": canonical || ogUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical || ogUrl
    },
    "articleSection": section,
    "keywords": tags.join(", ")
  } : null;

  const finalStructuredData = structuredData || articleStructuredData || defaultStructuredData;
  const mergedStructuredData = structuredData ? { ...defaultStructuredData, ...structuredData } : defaultStructuredData;

  const robotsContent = [
    (noIndex || noindex) ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');

const EnhancedSEO: React.FC = () => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={publishedTime ? "article" : "website"} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || fullDescription} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:url" content={ogUrl || canonical || siteUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || fullTitle} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || fullDescription} />
      <meta name="twitter:image" content={twitterImage || ogImage || defaultImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Article Specific Meta Tags */}
      {publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:author" content={author} />
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};

export default EnhancedSEO;
