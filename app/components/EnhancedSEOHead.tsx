<<<<<<< HEAD
'use client';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b853
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

<<<<<<< HEAD
const EnhancedSEOHead: React.FC = () => {
  const structuredData = {
=======
import { useLocation } from 'react-router-dom';

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b853
interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  structuredData?: object;
=======
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
>>>>>>> cursor/fix-errors-and-merge-to-main-b853
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
<<<<<<< HEAD
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = 'AI solutions, artificial intelligence, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, IT consulting',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url,
  type = 'website',
  siteName = 'Zion Tech Group',
  structuredData
}) => {
  const location = useLocation();
  const currentUrl = url || `https://ziontechgroup.com${location.pathname}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  const defaultStructuredData = {
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
<<<<<<< HEAD
=======
    "description": "Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.",
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
    "foundingDate": "2020",
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
<<<<<<< HEAD
      "contactType": "sales",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ziontechgroup",
=======
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
      "https://twitter.com/ziontechgroup",
      "https://github.com/zion-tech-group"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "AI Solutions",
        "description": "Comprehensive artificial intelligence solutions for business transformation"
      },
      {
        "@type": "Service", 
        "name": "Cloud Infrastructure",
        "description": "Scalable and secure cloud solutions for modern businesses"
      },
      {
        "@type": "Service",
        "name": "Cybersecurity",
        "description": "Advanced security solutions to protect digital assets"
      },
      {
        "@type": "Service",
        "name": "IT Consulting",
        "description": "Strategic IT consulting to optimize business operations"
      }
    ]
  };

<<<<<<< HEAD
=======
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

>>>>>>> cursor/analyze-improve-and-deploy-application-e765
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Zion Tech Group - AI & IT Solutions | Digital Transformation Experts</title>
      <meta name="title" content="Zion Tech Group - AI & IT Solutions | Digital Transformation Experts" />
      <meta name="description" content="Leading provider of AI and IT solutions. Transform your business with our cutting-edge technology, cloud infrastructure, cybersecurity, and digital transformation services." />
      <meta name="keywords" content="AI solutions, IT services, cloud computing, cybersecurity, digital transformation, business automation, machine learning, data analytics, software development" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
<<<<<<< HEAD
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontechgroup.com/" />
      <meta property="og:title" content="Zion Tech Group - AI & IT Solutions | Digital Transformation Experts" />
      <meta property="og:description" content="Leading provider of AI and IT solutions. Transform your business with our cutting-edge technology, cloud infrastructure, cybersecurity, and digital transformation services." />
      <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ziontechgroup.com/" />
      <meta property="twitter:title" content="Zion Tech Group - AI & IT Solutions | Digital Transformation Experts" />
      <meta property="twitter:description" content="Leading provider of AI and IT solutions. Transform your business with our cutting-edge technology, cloud infrastructure, cybersecurity, and digital transformation services." />
      <meta property="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://ziontechgroup.com/" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
=======
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#00ffff" />
      <meta name="color-scheme" content="dark light" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      
      {/* Business Information */}
      <meta name="contact" content="kleber@ziontechgroup.com" />
      <meta name="phone" content="+1-302-464-0950" />
      <meta name="address" content="364 E Main St STE 1008, Middletown, DE 19709" />

      {/* PWA Meta Tags */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

>>>>>>> cursor/analyze-improve-and-deploy-application-e765
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
=======
  description = 'Transform your business with our advanced AI and IT solutions. Enterprise-grade security, real-time analytics, and cutting-edge technology.',
  keywords = 'AI solutions, IT services, business automation, enterprise software, Zion Tech Group',
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup'
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Leading provider of AI and IT solutions",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "contact@ziontechgroup.com"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://github.com/ziontechgroup"
          ]
        })}
>>>>>>> cursor/fix-errors-and-merge-to-main-b853
      </script>
    </Helmet>
<<<<<<< HEAD
  )}
export default EnhancedSEOHead
=======
  );
};

<<<<<<< HEAD
export default EnhancedSEOHead;
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
=======
export default SEOHead;
>>>>>>> cursor/fix-errors-and-merge-to-main-b853
