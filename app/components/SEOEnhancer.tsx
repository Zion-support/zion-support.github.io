import React from 'react';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  children: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence, Zion Tech Group",
  image = "https://ziontechgroup.com/og-image.jpg",
  url = "https://ziontechgroup.com",
  children
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechCompany",
    "name": "Zion Tech Group",
    "url": url,
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "services": [
      "AI Solutions",
      "Quantum Computing", 
      "Autonomous Systems",
      "Digital Transformation",
      "Cloud Services",
      "Automation",
      "Business Intelligence"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "Customer Service",
      "areaServed": "US",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "offers": [
      {
        "@type": "Offer",
        "category": "AI Solutions",
        "description": "Enterprise AI solutions, digital transformation, and cloud services",
        "price": "1500",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1500",
          "priceCurrency": "USD",
          "billingIncrement": "P1M"
        }
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "39.8283",
        "longitude": "-75.5795"
      },
      "geoRadius": "1000000"
    }
  };

  return (
    <>
            {children}
    </>
  );
};

export default SEOEnhancer;