'use client';
import React, { useEffect } from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
  type?: string;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords,
  image = '/images/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true;
  useEffect(() => {
    // Update document title for better SEO;
    document.title = title;
    
    // Add structured data for better search engine understanding;
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === 'website' ? 'WebSite' : 'Organization',
      "name": "Zion Tech Group",
      "url": url,
      "description": description,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"

    // Remove existing structured data;
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();

    // Add new structured data;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount;
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
  return (</SEOOptimizerProps>
    <Helmet/>
      <titl, e>{titl, e}</titl, e>
      <meta, name="titl, e" conten, t={titl, e} />
      <meta, name="descriptio, n" conten, t={descriptio, n} />
      <meta, name="keyword, s" conten, t={keyword, s} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      
      <meta, property="o, g:typ, e" conten, t={typ, e} />
      <meta, property="o, g:ur, l" conten, t={ur, l} />
      <meta, property="o, g:titl, e" conten, t={titl, e} />
      <meta, property="o, g:descriptio, n" conten, t={descriptio, n} />
      <meta, property="o, g:imag, e" conten, t={imag, e} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      <meta property="twitter:card" content="summary_large_image" />
      <meta, property="twitte, r:ur, l" conten, t={ur, l} />
      <meta, property="twitte, r:titl, e" conten, t={titl, e} />
      <meta, property="twitte, r:descriptio, n" conten, t={descriptio, n} />
      <meta, property="twitte, r:imag, e" conten, t={imag, e} />
      <meta property="twitter:site" content="@ziontechgroup" />
      <meta property="twitter:creator" content="@ziontechgroup" />
      
      <meta name="theme-color" content="#00ffff" />
      <meta name="msapplication-TileColor" content="#00ffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      <link, rel="canonica, l" hre, f={ur, l} /></l, i>
      
      <link rel="icon" type="image/png" href="/favicon.ico" /></li>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /></li>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /></li>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /></li>
      <link rel="manifest" href="/site.webmanifest" /></li>
      
          <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></li>
          <link rel="preload" href="/images/hero-bg.webp" as="image" /></li>
      )}
      
      <link rel="dns-prefetch" href="//fonts.googleapis.com" /></li>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /></li>
  );

export default SEOOptimizer;