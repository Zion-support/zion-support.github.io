<<<<<<< HEAD
import React from 'react';

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'Service' | 'BreadcrumbList';
  data?: any;
=======
'use client'
import React from 'react'
interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'LocalBusiness'
  data?: Record<string, unknown>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'Organization', data }) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
    };

    switch (type) {
      case 'Organization':
        return {
          ...baseData,
          name: "Zion Tech Group",
          description: "Leading provider of AI-powered solutions, cybersecurity, and digital transformation services",
          url: "https://ziontechgroup.com",
          logo: "https://ziontechgroup.com/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-302-464-0950",
            contactType: "customer service",
            email: "kleber@ziontechgroup.com"
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "364 E Main St STE 1008",
            addressLocality: "Middletown",
            addressRegion: "DE",
            postalCode: "19709",
            addressCountry: "US"
          },
          sameAs: [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://github.com/ziontechgroup"
          ],
          offers: {
            "@type": "AggregateOffer",
            offerCount: "50+",
            lowPrice: "9",
            highPrice: "999",
            priceCurrency: "USD"
          }
        };

      case 'WebSite':
        return {
          ...baseData,
          name: "Zion Tech Group",
          url: "https://ziontechgroup.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'Service':
        return {
          ...baseData,
          name: data?.name || "AI & IT Solutions",
          description: data?.description || "Comprehensive AI and IT solutions for modern businesses",
          provider: {
            "@type": "Organization",
            name: "Zion Tech Group"
          },
          areaServed: "Worldwide",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Technology Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Solutions"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "IT Services"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Micro SAAS"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "5G Solutions"
                }
              }
            ]
          }
        };

<<<<<<< HEAD
      case 'BreadcrumbList':
        return {
          ...baseData,
          itemListElement: data?.breadcrumbs?.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url
          })) || []
        };

      default:
        return baseData;
    }
  };

=======
  const structuredData = data || getDefaultData()
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
<<<<<<< HEAD
  );
};
=======
  )
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

export default StructuredData