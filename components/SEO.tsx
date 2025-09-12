import React from "react";
import Head from "next/head";
interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
const SEO: React.FC<SEOProps> = ({
  title;
  description;
  keywords = "AI solutions, cloud services, technology consulting, digital transformation, IT services, Zion Tech Group"
  image = "https://ziontechgroup.com/og-image.png"
  url = "https://ziontechgroup.com"
  type = "website"
}) => {
  const fullTitle = title.includes("Zion Tech Group") ? title : "${title} | Zion Tech Group";
  return (
    <Head>
      {/* comment */}
      <title>{fullTitle}</title>
      <meta name="description" content={description}    />
      <meta name="keywords" content={keywords}    />
      <meta name="author" content="Zion Tech Group"  />
      <meta name="robots" content="index, follow"  />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"  />
      
      {/* comment */}
      <meta property="og:type" content={type}    />
      <meta property="og:url" content={url}    />
      <meta property="og:title" content={fullTitle}    />
      <meta property="og:description" content={description}    />
      <meta property="og:image" content={image}    />
      <meta property="og:site_name" content="Zion Tech Group"  />
      
      {/* comment */}
      <meta property="twitter:card" content="summary_large_image"  />
      <meta property="twitter:url" content={url}    />
      <meta property="twitter:title" content={fullTitle}    />
      <meta property="twitter:description" content={description}    />
      <meta property="twitter:image" content={image}    />
      
      {/* comment */}
      <meta name="theme-color" content="#3B82F6"  />
      <meta name="msapplication-TileColor" content="#3B82F6"  />
      
      {/* comment */}
      <link rel="canonical" href={url}    />
      
      {/* comment */}
      <link rel="icon" href="/favicon.ico"   />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"   />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"   />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"   />
      <link rel="manifest" href="/site.webmanifest"   />
      
      {/* comment */}
      <script type="application/ld+json"