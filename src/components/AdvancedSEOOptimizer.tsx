'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface AdvancedSEOOptimizerProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  structuredData?: any;
  noIndex?: boolean;
  locale?: string;
  alternateLanguages?: { href: string; hreflang: string }[];
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData,
  noIndex = false,
  locale = 'en-US',
  alternateLanguages = [],
}) => {
  useEffect(() => {
    // Update document title with dynamic suffix
    const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
    document.title = fullTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords.join(', ');
      document.head.appendChild(meta);
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }

    // Add robots meta tag
    const robots = document.querySelector('meta[name="robots"]');
    if (robots) {
      robots.setAttribute('content', noIndex ? 'noindex,nofollow' : 'index,follow');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = noIndex ? 'noindex,nofollow' : 'index,follow';
      document.head.appendChild(meta);
    }

    // Add language meta tag
    const html = document.documentElement;
    html.setAttribute('lang', locale.split('-')[0]);
    
  }, [title, description, keywords, canonicalUrl, noIndex, locale]);

  return (
    <Helmet>
      <title>{title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="language" content={locale} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="publisher" content="Zion Tech Group" />
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="theme-color" content="#0f172a" />
      
      {/* Alternate Languages */}
      {alternateLanguages.map((alt) => (
        <link key={alt.hreflang} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
      ))}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
          "foundingDate": "2020",
          "numberOfEmployees": "50-100",
          "industry": "Technology",
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
            "https://www.linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup",
            "https://facebook.com/ziontechgroup",
            "https://instagram.com/ziontechgroup",
            "https://github.com/ziontechgroup",
            "https://youtube.com/@ziontechgroup"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;