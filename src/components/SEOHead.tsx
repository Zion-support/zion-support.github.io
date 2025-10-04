import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - Revolutionary AI Solutions for Enterprise",
  description = "Transform your business with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous Operations. Advanced AI solutions for enterprise digital transformation.",
  keywords = "AI solutions, enterprise AI, machine learning, artificial intelligence, digital transformation, quantum computing, autonomous operations, meta-cognitive AI",
  canonical,
  ogImage = "/images/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noindex = false,
  nofollow = false
}) => {
  const fullTitle = title.includes("Zion Tech Group") ? title : `${title} | Zion Tech Group`;
  const robots = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Revolutionary AI solutions for enterprise transformation",
    "url": "https://zion.app",
    "logo": "https://zion.app/images/logo.png",
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-ZION-TECH",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Artificial Intelligence, Information Technology"
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || "https://zion.app"} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;