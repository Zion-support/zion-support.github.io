const fs = require('fs');

// Generate comprehensive structured data
function generateStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ziontechgroup.com/#organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ziontechgroup.com/logo.svg",
          "width": 200,
          "height": 200
        },
        "description": "Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.",
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
          "contactType": "customer service",
          "email": "kleber@ziontechgroup.com",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://twitter.com/ziontechgroup",
          "https://linkedin.com/company/ziontechgroup"
        ],
        "foundingDate": "2020",
        "numberOfEmployees": "50-100",
        "areaServed": "United States",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 39.4496,
            "longitude": -75.7163
          },
          "geoRadius": "1000000"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://ziontechgroup.com/#website",
        "url": "https://ziontechgroup.com",
        "name": "Zion Tech Group",
        "description": "Advanced AI and IT Solutions",
        "publisher": {
          "@id": "https://ziontechgroup.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ziontechgroup.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://ziontechgroup.com/#webpage",
        "url": "https://ziontechgroup.com",
        "name": "Zion Tech Group - Advanced AI and IT Solutions",
        "isPartOf": {
          "@id": "https://ziontechgroup.com/#website"
        },
        "about": {
          "@id": "https://ziontechgroup.com/#organization"
        },
        "description": "Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses."
      }
    ]
  };

  // Write structured data
  fs.writeFileSync('/workspace/public/structured-data.json', JSON.stringify(structuredData, null, 2));
  console.log('✅ Comprehensive structured data generated');
}

generateStructuredData();