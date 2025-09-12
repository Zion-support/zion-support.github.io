import React from 'react';
import Head from 'next/head';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'article';
  data: Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://zion.app",
          "logo": {
            "@type": "ImageObject",
            "url": "https://zion.app/images/zion-tech-group-logo.png",
            "width": 600,
            "height": 60
          },
          "description": "Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "info@zion.app",
              "availableLanguage": "English"
            },
            {
              "@type": "ContactPoint",
              "contactType": "sales",
              "email": "sales@zion.app",
              "availableLanguage": "English"
            }
          ],
          "sameAs": [
            "https://linkedin.com/company/zion-tech-group",
            "https://twitter.com/ZionTechGroup",
            "https://github.com/Zion-Holdings"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Technology Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI & Machine Learning",
                  "description": "Advanced AI solutions for enterprise automation and workforce transformation"
                },
                "priceRange": "$$$",
                "availability": "InStock"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cloud Infrastructure",
                  "description": "Scalable cloud solutions and micro SaaS development"
                },
                "priceRange": "$$$",
                "availability": "InStock"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Data Privacy & Compliance",
                  "description": "GDPR, CCPA, and enterprise data protection solutions"
                },
                "priceRange": "$$$",
                "availability": "InStock"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Green AI & Sustainability",
                  "description": "Sustainable AI solutions and green technology implementation"
                },
                "priceRange": "$$$",
                "availability": "InStock"
              }
            ]
          },
          "areaServed": {
            "@type": "Country",
            "name": "Worldwide"
          },
          "knowsAbout": [
            "Artificial Intelligence",
            "Machine Learning",
            "Cloud Computing",
            "Data Privacy",
            "Sustainability",
            "Digital Transformation",
            "Micro SaaS",
            "Enterprise Solutions"
          ]
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https://zion.app",
          "description": "Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.",
          "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://zion.app"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://zion.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "mainEntity": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://zion.app"
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name || "Technology Services",
          "description": data.description || "Cutting-edge technology solutions",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "areaServed": "Worldwide",
          "serviceType": data.serviceType || "Technology Consulting"
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title || "Technology Insights",
          "description": data.description || "Latest insights from Zion Tech Group",
          "author": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ziontechgroup.com/logo.png"
            }
          },
          "datePublished": data.datePublished || new Date().toISOString(),
          "dateModified": data.dateModified || new Date().toISOString()
        };

      default:
        return {};
    }
  };

  const structuredData = generateStructuredData();

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </Head>
  );
};

export default StructuredData;