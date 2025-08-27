import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  noindex?: boolean;
  structuredData?: object;
}

export function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  noindex = false,
  structuredData 
}: SEOProps) {
  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const defaultImage = '/images/zion-tech-group-og.jpg';
  const defaultUrl = 'https://ziontechgroup.com';
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered business solutions, IT services, and innovative technology solutions for modern enterprises.",
    "foundingDate": "2014",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "offers": {
      "@type": "Offer",
      "category": "Technology Services"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2e73ea" />
      <meta name="msapplication-TileColor" content="#2e73ea" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url || defaultUrl} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
    </Helmet>
  );
}

export const SEOPresets = {
  home: {
    title: 'Zion Tech Group | Leading Technology Solutions & Digital Transformation',
    description: 'Transform your business with Zion Tech Group\'s cutting-edge AI, cybersecurity, cloud services, and digital transformation solutions. Expert IT consulting for the modern enterprise.',
    keywords: ['Technology Solutions', 'Digital Transformation', 'AI Services', 'Cybersecurity', 'Cloud Services', 'IT Consulting'],
    type: 'website' as const,
    structuredData: {
      "@type": "WebSite",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ziontechgroup.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },
  services: {
    title: 'Our Services | Zion Tech Group | Comprehensive Technology Solutions',
    description: 'Explore Zion Tech Group\'s comprehensive suite of technology services including AI solutions, cybersecurity, cloud migration, and digital transformation consulting.',
    keywords: ['AI Solutions', 'Cybersecurity Services', 'Cloud Migration', 'Digital Transformation', 'IT Infrastructure'],
    type: 'website' as const
  },
  about: {
    title: 'About Us | Zion Tech Group | Technology Innovation & Excellence',
    description: 'Learn about Zion Tech Group\'s mission to drive technological innovation and digital transformation. Discover our expertise, values, and commitment to excellence.',
    keywords: ['About Zion Tech Group', 'Technology Innovation', 'Company Mission', 'Team Expertise', 'Company Values'],
    type: 'website' as const
  },
  contact: {
    title: 'Contact Us | Zion Tech Group | Get in Touch for Technology Solutions',
    description: 'Contact Zion Tech Group for expert technology consulting, AI solutions, cybersecurity services, and digital transformation support. Let\'s discuss your technology needs.',
    keywords: ['Contact Zion Tech Group', 'Technology Consulting', 'AI Solutions', 'Cybersecurity Services', 'Digital Transformation'],
    type: 'website' as const
  }
};
