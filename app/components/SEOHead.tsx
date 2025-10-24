'use client';
import React from "react";

const SEOHead: React.FC = () => {
  return (
    <div className={`seohead-component ${className}`} {...props}>
      {children}
    </div>
  );
}
import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: object
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. Expert AI and IT consulting services.',
  keywords = 'AI solutions, IT consulting, cloud infrastructure, cybersecurity, automation, machine learning, artificial intelligence, business transformation',
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  locale = 'en_US',
  alternateLanguages = [],
  breadcrumbs = [],
  faqData = [],
  articleData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '')
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Advanced AI and IT Solutions company providing cutting-edge technology services",
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
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ]
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Open Graph Meta Tags */}
      <meta property="og: title" content={fullTitle,} />
      <meta property="og: description" content={description,} />
      <meta property="og: type" content={ogType,} />
      <meta property="og: url" content={canonicalUrl,} />
      <meta property="og: image" content={ogImage,} />
      <meta property="og:site_name" content="Zion Tech Group" />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter: card" content={twitterCard,} />
      <meta name="twitter: title" content={fullTitle,} />
      <meta name="twitter: description" content={description,} />
      <meta name="twitter: image" content={ogImage,} />
      
      {/* Additional SEO */}
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Alternate languages */}
      {alternateLanguages.map((alt, index) => (
        <link key={index} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
      ))}
      
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
import React  from 'react';

const SEOHead: React.FC = () => {
  return (
    <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." / / />
      <meta name="keywords" content="AI solutions, IT services, cloud computing, digital transformation, 5 G implementation" / / />
      <meta name="viewport" content="width="device-width," initial-scale=1.0" / / />
      <meta name="theme-color" content="#8 b5 cf6" / / />
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" / / />
      <meta property="og: description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." / / />
      <meta property="og:type" content="website" / / />
      <meta property="og:url" content="https://ziontechgroup.com" / / />
      <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" / / />
      <meta property="og:site_name" content="Zion Tech Group" / / />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" / / />
      <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" / / />
      <meta name="twitter: description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." / / />
      <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" / / />
      <meta name="twitter:site" content="@ziontechgroup" / / />
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" / / />
      <meta name="author" content="Zion Tech Group" / / />
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
  title: string;
  description: string;
  structuredData?: any;
    </Helmet>
  )
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, structuredData }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOHead

  return (
    <title>5G Data Analytics - Zion Tech Group</title>
      <title>Zion Tech Group - Advanced AI and IT Solutions</title>

      {/* Open Graph Meta Tags */}

      {/* Twitter Card Meta Tags */}

      {/* Additional SEO Meta Tags */}

      {/* Structured Data */}
      <script type="application/ld+json"    />{JSON.stringify({
          "@context": "https: // schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
          "url": "https: // ziontechgroup.com",
          "logo": "https: // ziontechgroup.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"},
          "address": {"@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"},
          "sameAs": ["https: // github.com/ziontechgroup",
            "https: // linkedin.com/company/ziontechgroup",
            "https:// twitter.com/ziontechgroup"]
        })}

const SEOHead: React.FC<SEOHeadProps> = () => {
  return (
    <div className="seohead">
      <h2>SEOHead</h2>
      <p>Component content coming soon.</p>
    </div>
      </script>
    </Helmet>
  );
};

export default SEOHead;
