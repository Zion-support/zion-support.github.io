import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
  service: {
    name: string;
    description: string;
    url: string;
    category: string;
    price?: string;
    features?: string[];
    rating?: number;
    users?: string;
    popular?: boolean;
  };
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({ service }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": service.name,
    "description": service.description,
    "url": `https://ziontechgroup.com${service.url}`,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": service.price ? {
      "@type": "Offer",
      "price": service.price.replace('$', '').replace('/mo', ''),
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": service.price.replace('$', '').replace('/mo', ''),
        "priceCurrency": "USD",
        "billingIncrement": "P1M"
      }
    } : undefined,
    "aggregateRating": service.rating ? {
      "@type": "AggregateRating",
      "ratingValue": service.rating,
      "ratingCount": service.users ? parseInt(service.users.replace(/[^\d]/g, '')) : 100
    } : undefined,
    "featureList": service.features || [],
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    },
    "screenshot": `https://ziontechgroup.com/screenshots${service.url}.webp`,
    "softwareVersion": "1.0",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "en-US",
    "isAccessibleForFree": false,
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "softwareRequirements": "Web browser",
    "memoryRequirements": "512MB RAM",
    "storageRequirements": "1GB available space",
    "permissions": "Internet connection required",
    "releaseNotes": "Latest version with enhanced AI capabilities and improved performance",
    "downloadUrl": `https://ziontechgroup.com${service.url}`,
    "installUrl": `https://ziontechgroup.com${service.url}`,
    "updateUrl": `https://ziontechgroup.com${service.url}`,
    "supportUrl": "https://ziontechgroup.com/support",
    "screenshot": `https://ziontechgroup.com/screenshots${service.url}.webp`
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData, null, 2)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;