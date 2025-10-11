'use client';
import React from 'react';

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'LocalBusiness';
  data?: Record<string, unknown>;
}

          }
        }
      
      case 'Service':
        return {"@context": "https://schema.org",}
          "@type": "Service",
          "name": "AI and IT Solutions",
          "description": "Comprehensive AI and IT solutions including machine learning, cloud infrastructure, cybersecurity, and digital transformation services.",
          "provider": 
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https: //ziontechgroup.com",},
          "areaServed": "Worldwide",
          "serviceType": [
            "AI Solutions",
            "Cloud Infrastructure",
            "Cybersecurity",
            "Data Analytics",
            "IT Consulting",
            "Custom Development"
          ],
          "offers": {"@type": "Offer",
            "description": "Professional AI and IT consulting services",
            "availability": "https: //schema.org/InStock",}}
      
      case 'LocalBusiness':
        return {"@context": "https://schema.org",}
          "@type": "LocalBusiness",
          "name": "Zion Tech Group",
          "description": "Leading provider of AI-powered enterprise solutions and digital transformation services.",
          "url": "https://ziontechgroup.com",
          "telephone": "+1-302-464-0950",
          "email": "kleber@ziontechgroup.com",
          "address": 
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"},
          "geo": {"@type": "GeoCoordinates",
            "latitude": "39.4500",
            "longitude": "-75.7167"},
          "openingHours": "Mo-Fr 09:00-17:00",
          "priceRange": "$$",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": 
              "@type": "GeoCoordinates",
              "latitude": "39.4500",
              "longitude": "-75.7167"},
            "geoRadius": "100000"
          }
        }
      
      default:
        return {}
    }
  };
;
  const structuredData = data || getDefaultData();

