import React from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
}

export default function SEOOptimizer({
  title = "Zion Tech Group - Revolutionary AI & Quantum Computing Solutions 2025-2030",
  description = "Transform your business with revolutionary AI 2025-2030 solutions, quantum computing breakthroughs, and autonomous operations. Guaranteed 10,000%+ ROI with transcendent intelligence systems.",
  keywords = "AI 2025, AI 2026, quantum computing, autonomous operations, transcendent intelligence, 10000% ROI, revolutionary AI, quantum neural fusion, consciousness AI, error-corrected quantum supremacy",
  url = "https://zion.app",
  image = "https://zion.app/og-image.jpg",
  type = "website"
}: SEOOptimizerProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Zion Tech Group" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@ZionTechGroup" />
      <meta property="twitter:site" content="@ZionTechGroup" />
      
      {/* Additional SEO Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#7c3aed" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://zion.app",
            "logo": "https://zion.app/logo.png",
            "description": description,
            "foundingDate": "2020",
            "founders": [
              {
                "@type": "Person",
                "name": "Zion Tech Group Founders"
              }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-ZION-TECH",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://twitter.com/ZionTechGroup",
              "https://linkedin.com/company/zion-tech-group",
              "https://github.com/Zion-Holdings"
            ]
          })
        }}
      />
      
      {/* Structured Data - WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Zion Tech Group",
            "url": "https://zion.app",
            "description": description,
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://zion.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      {/* Structured Data - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Revolutionary AI & Quantum Computing Solutions",
            "description": description,
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group"
            },
            "areaServed": "Worldwide",
            "serviceType": "AI Technology Consulting",
            "offers": {
              "@type": "Offer",
              "description": "AI 2025-2030 Solutions with 10,000%+ ROI Guarantee",
              "price": "Contact for pricing",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.github.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//api.github.com" />
    </Head>
  );
}