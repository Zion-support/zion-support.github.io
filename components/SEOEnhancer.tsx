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
  title = "Zion Tech Group - Leading Technology Solutions","
  description = "Zion Tech Group provides cutting-edge AI, IT, and software development services.","
  keywords = "technology, AI, software development, IT services","
  image = "/images/zion-tech-group-og.jpg","
  url = "https:// comment
  type = "website"
}) => {"
  const fullTitle = title.includes("Zion Tech Group") ? title : "${title} | Zion Tech Group"
  return (
    <Head>
      {/* comment */}
      <title>{title}</title>
<meta name="description" content={description}    />"      <meta name="keywords" content={keywords}    />"      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"  />"      <meta name="robots" content={"${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}"}    />"      <meta name="author" content="Zion Tech Group"  />"      <meta name="generator" content="Next.js"  />"      "      {/* comment */}`      <link rel="canonical" href={canonicalUrl}    />"      "      {/* comment */}
      <meta property="og:title" content={title}    />"      <meta property="og:description" content={description}    />"      <meta property="og:image" content={ogImage}    />"      <meta property="og:image:width" content="1200"  />"      <meta property="og:image:height" content="630"  />"      <meta property="og:image:alt" content={title}    />"      <meta property="og:type" content="website"  />"      <meta property="og:url" content={canonicalUrl}    />"      <meta property="og:site_name" content="Zion Tech Group"  />"      <meta property="og:locale" content="en_US"  />"      "      {/* comment */}
      <meta name="twitter:card" content="summary_large_image"  />"      <meta name="twitter:title" content={title}    />"      <meta name="twitter:description" content={description}    />"      <meta name="twitter:image" content={ogImage}    />"      <meta name="twitter:image:alt" content={title}    />"      <meta name="twitter:site" content="@ZionTechGroup"  />"      <meta name="twitter:creator" content="@ZionTechGroup"  />"      "      {/* comment */}
      <meta name="theme-color" content="#0ea5e9"  />"      <meta name="msapplication-TileColor" content="#0ea5e9"  />"      <meta name="apple-mobile-web-app-capable" content="yes"  />"      <meta name="apple-mobile-web-app-status-bar-style" content="default"  />"      <meta name="apple-mobile-web-app-title" content="Zion Tech Group"  />"      "      {/* comment */}
      <link rel="icon" href="/favicon.ico"   />"      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"   />"      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"   />"      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"   />"      <link rel="manifest" href="/manifest.json"   />"      "      {/* comment */}
      <link rel="preconnect" href="https://fonts.googleapis.com"   />"      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"   />"      <link rel="preconnect" href="https://www.google-analytics.com"   />"      <link rel="preconnect" href="https://www.googletagmanager.com"   />"      "      {/* comment */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com"   />"      <link rel="dns-prefetch" href="//www.google-analytics.com"   />"      <link rel="dns-prefetch" href="//www.googletagmanager.com"   />"      "      {/* comment */}
      <script type="application/ld+json""        dangerouslySetInnerHTML={{"          __html: JSON.stringify(finalStructuredData);
}}
         />
      
      {/* comment */}
<meta httpEquiv="x-dns-prefetch-control" content="on"  />"      <meta name="format-detection" content="telephone=no"  />"      "      {/* comment */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff"  />"      <meta httpEquiv="X-Frame-Options" content="DENY"  />"      <meta httpEquiv="X-XSS-Protection" content="1; mode=block"  />"      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin"  />"    </Head>"  );};
export default SEOEnhancer;