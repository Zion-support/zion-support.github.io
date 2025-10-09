'use client';

import React from 'react';
import { Metadata } from 'next';
// import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
  title: '{title}',
};

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  children,
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.",
  keywords = "AI, artificial intelligence, enterprise solutions, automation, digital transformation",
  canonicalUrl,
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/zion-tech-group"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    }
  };

  return (
    <>
      
      {children}
    </>
  );
};

export default SEOOptimizer;