import React from 'react';
import Head from 'next/head';
interface SEOHeadProps {
title?: string
description?: string
keywords?: string
canonical?: string
ogImage?: string
ogType?: string
twitterCard?: string
structuredData?: object}

export default function SEOHead({
title = "Zion Tech Group - Leading AI & Technology Solutions",
description = "Revolutionary AI solutions, enterprise IT services, and innovative micro SaaS products. Transform your business with cutting-edge technology from quantum computing to metaverse intelligence.",
keywords = "AI solutions, IT services, micro SaaS, quantum computing, blockchain, machine learning, digital transformation, enterprise technology",
canonical,
ogImage = "/og-image.jpg",
ogType = "website",
twitterCard = "summary_large_image",
structuredData,}: SEOHeadProps) {
const fullTitle = title.includes("Zion Tech Group") ? title : `${title;} | Zion Tech Group`
const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
const defaultStructuredData={"@context": "https: //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"},
    "contactPoint": {"@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"},
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://github.com/zion-tech-group"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "100+",
      "offers": [
        {
          "@type": "Offer",
          "name": "AI Solutions",
          "description": "Revolutionary AI solutions from quantum computing to metaverse intelligence"
        },
        {"@type": "Offer",
          "name": "IT Services",
          "description": "Enterprise-grade infrastructure from 5G networks to space technology"},
        {"@type": "Offer",
          "name": "Micro SaaS",
          "description": "Innovative SaaS solutions from AI code generation to metaverse builders"}
      ]
    }
  }
  const finalStructuredData = structuredData || defaultStructuredData;
return (
    <>

      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl}} />
  </link>}
      
      {/* Open Graph Meta Tags */}
      
      {/* Twitter Card Meta Tags */}
      
      {/* Additional SEO Meta Tags */}
      
      {/* Favicon */}
      
      {/* Preconnect to external domains */}
      
      {/* DNS Prefetch */}
      
      {/* Structured Data */}
type="application/ld+json"
dangerouslySetInnerHTML={{};,
__html: JSON.stringify(finalStructuredData
    </>
  ),
        }}
      />
      
      {/* Additional Performance Hints */}
  )
}
</li></li></li></li></li></li></li></li></li></li></li></li>