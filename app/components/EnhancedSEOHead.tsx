'use client';
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
interface SEOHeadProps {
  title: string;
  description: string;
=======
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
>>>>>>> cursor/analyze-improve-and-deploy-application-5431
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
<<<<<<< HEAD
  siteName?: string;
  structuredData?: object;
}
const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology.',
  keywords = 'AI solutions, artificial intelligence, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, IT consulting',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  siteName = 'Zion Tech Group',
  structuredData
}) => {
  const defaultStructuredData = {
=======
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - AI & IT Solutions",
  description = "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
  keywords = "AI, cybersecurity, cloud computing, digital transformation, technology services, Zion Tech Group",
  image = "/og-image.svg",
  url,
  type = "website"
}) => {
  const location = useLocation();
  const currentUrl = url || `https://ziontechgroup.com${location.pathname}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  const structuredData = {
>>>>>>> cursor/analyze-improve-and-deploy-application-5431
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
<<<<<<< HEAD
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.",
=======
    "logo": "https://ziontechgroup.com/favicon.svg",
    "description": description,
    "foundingDate": "2020",
>>>>>>> cursor/analyze-improve-and-deploy-application-5431
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
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://github.com/zion-tech-group"
    ]
  };
=======

const EnhancedSEOHead: React.FC = () => {
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
=======
      "contactType": "sales",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
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
        "name": "Custom Development",
        "description": "Tailored software solutions for specific business needs"
      }
    ]
  };

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

>>>>>>> cursor/analyze-improve-and-deploy-application-5431
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
<<<<<<< HEAD
<<<<<<< HEAD
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
=======
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://ziontechgroup.com" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta property="og:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontechgroup.com" />
      <meta property="og:image" content="https://ziontechgroup.com/images/og-image.jpg" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
<<<<<<< HEAD
      {/* Twitter */}
=======
      
      {/* Twitter Card Meta Tags */}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta name="twitter:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
      <meta name="twitter:image" content="https://ziontechgroup.com/images/og-image.jpg" />
      <meta name="twitter:site" content="@ziontechgroup" />
<<<<<<< HEAD
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#00ffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      {/* Business Information */}
      <meta name="contact" content="kleber@ziontechgroup.com" />
      <meta name="phone" content="+1-302-464-0950" />
      <meta name="address" content="364 E Main St STE 1008, Middletown, DE 19709" />
=======
      <meta name="twitter:creator" content="@ziontechgroup" />
      
=======
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta property="twitter:site" content="@ziontechgroup" />
      <meta property="twitter:creator" content="@ziontechgroup" />

>>>>>>> cursor/analyze-improve-and-deploy-application-5431
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="color-scheme" content="dark light" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />

      {/* PWA Meta Tags */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<<<<<<< HEAD
      
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
=======

>>>>>>> cursor/analyze-improve-and-deploy-application-5431
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
    </Helmet>
  );
};
export default EnhancedSEOHead;
  </SEOHeadProps>