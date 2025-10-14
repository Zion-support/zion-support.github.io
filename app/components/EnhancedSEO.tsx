import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
  lang?: string;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions"
  description = "Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses."
  keywords = "AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology"
  ogImage = "https://ziontechgroup.com/og-image.jpg"
  twitterCard = "summary_large_image"
  lang = "en"
      title: "@context": "https: //schema.org"
    "@type": "Organization"
    "name": "Zion Tech Group"
    "url": "https: //ziontechgroup.com"
    "logo": "https: //ziontechgroup.com/logo.png"
    "description": description"
    "contactPoint": {
      title: "
      "@type": "ContactPoint"
      "telephone": "+1-302-464-0950"
      "contactType": "customer service"
      "email": "kleber@ziontechgroup.com"
    
    }address"
      title: "
      "@type": "PostalAddress"
      "streetAddress": "364 E Main St STE 1008"
      "addressLocality": "Middletown"
      "addressRegion": "DE"
      "postalCode": "19709"
      "addressCountry": "US"
    }sameAs": ["
      "https://linkedin.com/company/zion-tech-group"
      "https://twitter.com/ziontechgroup"
      <title>{title}</title><meta name="description"
      <meta name="keywords"
      <meta name="robots"
      <meta name="language"
      <meta name="author" content="Zion Tech Group"
      <meta name="viewport" content="width=device-width, initial-scale=1.0"
      {canonical && <link rel="canonical"
      <meta property="og:type" content="website"
      <meta property="og:title"
      <meta property="og:description"
      <meta property="og:image"
      <meta property="og:url" content={ogUrl || canonical || "https://ziontechgroup.com"
      <meta property="og:site_name" content="Zion Tech Group"
      <meta property="og:locale" content="en_US"
      <meta name="twitter:card"
      <meta name="twitter:title"
      <meta name="twitter:description"
      <meta name="twitter:image"
      <meta name="twitter:site" content="@ziontechgroup"
      <meta name="twitter:creator" content="@ziontechgroup"
      <meta name="theme-color" content="#06b6d4"
      <meta name="msapplication-TileColor" content="#06b6d4"
      <meta name="apple-mobile-web-app-capable" content="yes"
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group"
      <link rel="icon" type="image/x-icon" href="/favicon.ico"
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"
      <link rel="manifest" href="/site.webmanifest"
      <script type="application/ld+json"
      <meta name="google-site-verification" content="your-google-verification-code"
      <meta name="yandex-verification" content="your-yandex-verification-code"
      <meta name="bing-site-verification" content="your-bing-verification-code"
      <link rel="preconnect" href="https://fonts.googleapis.com"
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"
      <link rel="preconnect" href="https://images.unsplash.com"
      <link rel="dns-prefetch" href="//fonts.googleapis.com"
      <link rel="dns-prefetch" href="//images.unsplash.com"
      <meta httpEquiv="x-dns-prefetch-control" content="on" /></Helmet>"