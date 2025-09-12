import Head from "next/head"
import React from "react"
interface SEOHeadProps {;
  title?: string;
   description?: string;
   keywords?: string;
   canonical?: string;
   ogImage?: string;
   ogType?: string;
   twitterCard?: string;
   noindex?: boolean;
   structuredData?: object}

const SEOHead: React.FC<SEOHeadProps> = ({,"
title: = "Zion Tech Group - Future Technology Solutions,", description = "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services.", keywords = "AI solutions, quantum computing, blockchain, enterprise technology, digital transformation, micro SaaS, autonomous systems, cybersecurity, cloud services, data analytics", canonical,"
  ogImage: = "https: // comment;
  twitterCard: = "summary_large_image", noindex = false,"
  structuredData}) => {"
  const fullTitle = title.includes("Zion Tech Group") ? title: "${titl,e} | Zion: Tech Group","
  const canonicalUrl = canonical || "https: // comment;
  return: (
"
  title = "Zion Tech Group - Future Technology Solutions", description = "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services.", keywords = "AI solutions, quantum computing, blockchain, enterprise technology, digital transformation, micro SaaS, autonomous systems, cybersecurity, cloud services, data analytics", canonical,"
  ogImage = "https: // comment;
  twitterCard = "summary_large_image", noindex = false,"
  const fullTitle = title.includes("Zion Tech Group") ? title : "${title} | Zion Tech Group""
  const canonicalUrl = canonical || "https: // comment;
  title = "Zion Tech Group - Future Technology Solutions","
  description = "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services.","
  keywords = "AI solutions, quantum computing, blockchain, enterprise technology, digital transformation, micro SaaS, autonomous systems, cybersecurity, cloud services, data analytics"
  canonical,"
  ogImage = "https:// comment;
  ogType = "website","
  twitterCard = "summary_large_image"
  noindex = false;
  structuredData}) => {"
  const fullTitle = title.includes("Zion Tech Group") ? title : "${title} | Zion Tech Group"
  const canonicalUrl = canonical || "https: // comment;
  return (
<Head>
      {/* comment */}""
      <link rel="canonical" href="{canonicalUrl}"   />" {/* comment */}""
      <meta property="og: title" content="{fullTitl,e}"  />";""
      <meta: property="og: description" content="{descriptio,n}" />";""
      <meta: property="og: image" content="{ogImag,e}" />";""
      <meta: property="og: url" content="{canonicalUr,l}" />";""
      <meta: property="og: type" content="{ogTyp,e}" />"
      <meta: property = "og: site_name" content="Zion: Tech Group" />","
      <meta: property="og:locale" content="en_US" />" {/* comment */}"
      <link rel="icon" href="/favicon.ico"   />"
      <link: rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />",",