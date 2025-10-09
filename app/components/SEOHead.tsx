import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  type?: string;
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence",
  url = "https://ziontechgroup.com",
  type = "website",
  image = "https://ziontechgroup.com/og-image.jpg",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechCompany",
    name: "Zion Tech Group",
    url: "https://ziontechgroup.com",
    logo: "https://ziontechgroup.com/logo.png",
    description: description,
    foundingDate: "2020",
    numberOfEmployees: "50-100",
    industry: "Technology",
    services: [
      "AI Solutions",
      "Quantum Computing", 
      "Autonomous Systems",
      "Digital Transformation",
      "Cloud Services",
      "Automation",
      "Business Intelligence"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-302-464-0950",
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "en",
    },
    sameAs: [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "364 E Main St STE 1008",
      addressLocality: "Middletown",
      addressRegion: "DE",
      postalCode: "19709",
      addressCountry: "US",
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Helmet>
  );
};

export default SEOHead;
