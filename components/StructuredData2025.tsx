'use client';

import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'SoftwareApplication' | 'Product' | 'Article';
  data: any;
}

export default function StructuredData2025({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading AI and technology solutions provider specializing in automation, cloud infrastructure, and digital transformation.",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://github.com/ziontechgroup"
          ],
          "offers": {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Solutions",
              "description": "Comprehensive AI implementation and consulting services"
            }
          }
        };

      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "description": "AI and technology solutions for modern businesses",
          "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'SoftwareApplication':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": data.name || "AI Tools Suite 2025",
          "description": data.description || "Comprehensive suite of AI tools for business automation and optimization",
          "url": "https://ziontechgroup.com/ai-tools",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web, Windows, macOS, Linux",
          "offers": {
            "@type": "Offer",
            "price": data.price || "29",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": data.rating || "4.9",
            "ratingCount": data.reviewCount || "150"
          },
          "author": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          }
        };

      case 'Product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": data.name || "AI Automation Platform",
          "description": data.description || "Advanced AI-powered automation platform for enterprise businesses",
          "brand": {
            "@type": "Brand",
            "name": "Zion Tech Group"
          },
          "offers": {
            "@type": "Offer",
            "price": data.price || "99",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Zion Tech Group"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": data.rating || "4.8",
            "ratingCount": data.reviewCount || "75"
          }
        };

      case 'Article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title || "AI Tools Showcase 2025: Revolutionary Solutions for Modern Businesses",
          "description": data.description || "Discover the latest AI tools and technologies transforming industries in 2025",
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
          "datePublished": data.datePublished || "2025-01-15",
          "dateModified": data.dateModified || "2025-01-15",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://ziontechgroup.com/ai-tools-showcase"
          }
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}