import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { SEOEnhancerProps } from 'lucide-react';
interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI solutions, cybersecurity, and IT services for modern businesses',
  keywords = 'AI solutions, cybersecurity, IT services, digital transformation, automation, 5G technology',
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/images/og-image.jpg',
  structuredData
}) => {
  useEffect(() => {
    // Add structured data to the page
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
  return () => {
        document.head.removeChild(script);
      };
    }
  }, [structuredData]);

const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": canonicalUrl,
    "logo": "https://ziontechgroup.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://ziontechgroup.com"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "50+",
      "offers": [
      ]
    }
  };
  
  );
}