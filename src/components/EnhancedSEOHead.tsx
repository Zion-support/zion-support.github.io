import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({</SEOHeadProps>title</SEOHeadProps> = "Zion Tech Group - AI-Powered Enterprise Solutions","
  description = "Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.","
  keywords = "AI solutions, enterprise AI, quantum computing, digital transformation, machine learning, automation, cybersecurity, cloud computing, IT services, Zion Tech Group","
  image = "https://ziontechgroup.com/og-image.png","
  url = "https://ziontechgroup.com","
  type = "website""
}) => {
  const structuredData = {
    "@context": "https://schema.org","
    "@type": "Organization","
    "name": "Zion Tech Group","
    "url": "https://ziontechgroup.com","
    "logo": "https://ziontechgroup.com/logo.png","
    "description": description,"
    "address": {"
      "@type": "PostalAddress","
      "streetAddress": "364 E Main St STE 1008","
      "addressLocality": "Middletown","
      "addressRegion": "DE","
      "postalCode": "19709","
      "addressCountry": "US""
    },
    "contactPoint": {"
      "@type": "ContactPoint","
      "telephone": "+1-302-464-0950","
      "contactType": "customer service","
      "email": "kleber@ziontechgroup.com""
    },
    "sameAs": ["
      "https://linkedin.com/company/zion-tech-group","
      "https://twitter.com/ziontechgroup","
      "https://github.com/zion-tech-group""
    ],
    "foundingDate": "2020","
    "numberOfEmployees": "50-100","
    "industry": "Information Technology","
    "services": ["
      "AI Solutions","
      "Machine Learning","
      "Quantum Computing","
      "Digital Transformation","
      "IT Services","
      "Cybersecurity","
      "Cloud Computing","
      "Automation""
    ]
  };

  return (
    <Helmet></Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} /></meta>"
      <meta name="keywords" content={keywords} /></meta>"
      <meta name="author" content="Zion Tech Group" /></meta>"
      <meta name="robots" content="index, follow" /></meta>"
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" /></meta>"
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" /></meta>"
      <meta name="format-detection" content="telephone=no,address=no,email=no" /></meta>"
      <meta name="color-scheme" content="dark light" /></meta>"
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} /></meta>"
      <meta property="og:url" content={url} /></meta>"
      <meta property="og:title" content={title} /></meta>"
      <meta property="og:description" content={description} /></meta>"
      <meta property="og:image" content={image} /></meta>"
      <meta property="og:site_name" content="Zion Tech Group" /></meta>"
      <meta property="og:locale" content="en_US" /></meta>"
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" /></meta>"
      <meta property="twitter:url" content={url} /></meta>"
      <meta property="twitter:title" content={title} /></meta>"
      <meta property="twitter:description" content={description} /></meta>"
      <meta property="twitter:image" content={image} /></meta>"
      <meta property="twitter:creator" content="@ziontechgroup" /></meta>"
      <meta property="twitter:site" content="@ziontechgroup" /></meta>"
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} /></link>"
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" /></link>"
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /></link>"
      
      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" /></link>"
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" /></link>"
      <link rel="apple-touch-icon" href="/logo192.png" /></link>"
      <link rel="manifest" href="/manifest.json" /></link>"
      
      {/* Theme Color */}
      <meta name="theme-color" content="#0 f172 a" /></meta>"
      
      {/* Structured Data */}
      <script type="application/ld+json"></scrip>"
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional SEO Scripts */}
      <script type="application/ld+json"></scrip>"
        {JSON.stringify({
          "@context": "https://schema.org","
          "@type": "WebSite","
          "name": "Zion Tech Group","
          "url": "https://ziontechgroup.com/","
          "potentialAction": {"
            "@type": "SearchAction","
            "target": "https://ziontechgroup.com/search?q={search_term_string}","
            "query-input": "required name=search_term_string""
          }
        })}
      </script>
      
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" /></link>"
      <link rel="dns-prefetch" href="//fonts.gstatic.com" /></link>"
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></link>"
      
      {/* Performance Optimizations */}
      <meta name="mobile-web-app-capable" content="yes" /></meta>"
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" /></meta>"
      <meta name="application-name" content="Zion Tech Group" /></meta>"
      <meta name="msapplication-tooltip" content="AI-Powered Enterprise Solutions" /></meta>"
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" /></meta>"
      <meta httpEquiv="X-Frame-Options" content="DENY" /></meta>"
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" /></meta>"
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" /></meta>"
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" /></meta>"
      
      {/* Additional SEO Meta Tags */}
      <meta name="rating" content="general" /></meta>"
      <meta name="distribution" content="global" /></meta>"
      <meta name="target" content="all" /></meta>"
      <meta name="HandheldFriendly" content="true" /></meta>"
      <meta name="MobileOptimized" content="width" /></meta>"
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" /></meta>"
      <meta name="msvalidate.01" content="your-bing-verification-code" /></meta>"
      <meta name="yandex-verification" content="your-yandex-verification-code" /></meta>"
      <meta name="pinterest-site-verification" content="your-pinterest-verification-code" /></meta>"
      
      {/* Additional Performance Hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></link>"
      <link rel="preload" href="/images/hero-bg.webp" as="image" type="image/webp" /></link>"
      
      {/* Critical Resource Hints */}
      <link rel="preconnect" href="https://www.google-analytics.com" /></link>"
      <link rel="preconnect" href="https://www.googletagmanager.com" /></link>"
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" /></link>"
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" /></link>"
      
      {/* Rich Snippets */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /></meta>"
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /></meta>"
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /></meta>"
      
      {/* Enhanced Open Graph */}
      <meta property="og:image:width" content="1200" /></meta>"
      <meta property="og:image:height" content="630" /></meta>"
      <meta property="og:image:alt" content="Zion Tech Group - AI-Powered Enterprise Solutions" /></meta>"
      <meta property="og:updated_time" content={new Date().toISOString()} /></meta>"
      
      {/* Enhanced Twitter Cards */}
      <meta name="twitter:image:alt" content="Zion Tech Group - AI-Powered Enterprise Solutions" /></meta>"
      <meta name="twitter:domain" content="ziontechgroup.com" /></meta>"
      <meta name="twitter:url" content={url} /></meta>"
      
      {/* Additional Performance Hints */}
      <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></link>"
      <link rel="preload" href="/images/hero-bg.webp" as="image" type="image/webp" /></link>"
      
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" /></link>"
      
      {/* Theme Color Variations */}
      <meta name="theme-color" content="#00 ffff" media="(prefers-color-scheme: light)" /></meta>"
      <meta name="theme-color" content="#0 f172 a" media="(prefers-color-scheme: dark)" /></meta>"
    </Helmet>
  );
};

export default EnhancedSEOHead;
