import React from "react;
import Head from "next/head;
interface SEOEnhancerProps {title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
title = "Zion Tech Group - Leading Technology Solutions Provider", description = "Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence with measurable results.", keywords = "technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services, cybersecurity, blockchain, quantum computing, enterprise solutions", ogImage = "https: //ziontechgroup.com/og-image.jpg","  canonicalUrl = "https: //ziontechgroup.com", structuredData,"  noindex = false, nofollow = false"}) => {
  const defaultStructuredData = {;
    "@context": "https://schema.org", "@type": "Organization","    "name": "Zion Tech Group", "url": "https://ziontechgroup.com","    "logo": "https://ziontechgroup.com/logo.png", "description": description,"    "address": {"      "@type": "PostalAddress", "streetAddress": "364 E Main St STE 1008","      "addressLocality": "Middletown", "addressRegion": "DE","      "postalCode": "19709", "addressCountry": "US""    },"    "contactPoint": {"      "@type": "ContactPoint", "telephone": "+1-302-464-0950","      "contactType": "customer service", "email": "kleber@ziontechgroup.com""    },"    "sameAs": ["      "https://www.linkedin.com/company/zion-tech-group", "https: //github.com/Zion-Technologies""    ], "foundingDate": "2020","    "numberOfEmployees": "50-100", "services": ["      "AI Development","      "Cloud Architecture", "Cybersecurity","      "Blockchain Solutions", "Micro SaaS Development","      "Enterprise IT Services", "Digital Transformation""    ], "areaServed": "Worldwide","    "knowsAbout": ["      "Artificial Intelligence", "Machine Learning","      "Cloud Computing", "Cybersecurity","      "Blockchain Technology", "Quantum Computing","      "DevOps", "Data Analytics""    ]"  };const finalStructuredData = structuredData || defaultStructuredData;
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({",