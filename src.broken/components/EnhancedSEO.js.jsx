import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
    };
    // Merge with provided structured data
    const finalStructuredData = structuredData ? { ...defaultStructuredData, ...structuredData } : defaultStructuredData;
    return (<Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>"
      <meta name="description" content={description}/>"
      <meta name="keywords" content={keywords}/>"
      <meta name="author" content="Zion Tech Group"/>"
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>"
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      
      {/* Canonical URL */}"
      {canonical && <link rel="canonical" href={canonical}/>}
      
      {/* Robot Instructions */}'"
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`}/>
      
      {/* Open Graph Tags */}"
      <meta property="og:title" content={title}/>"
      <meta property="og:description" content={description}/>"
      <meta property="og:type" content={ogType}/>"
      <meta property="og:url" content={currentUrl}/>"
      <meta property="og:image" content={ogImage}/>"
      <meta property="og:image:width" content="1200"/>"
      <meta property="og:image:height" content="630"/>"
      <meta property="og:image:alt" content={title}/>"
      <meta property="og:site_name" content="Zion Tech Group"/>"
      <meta property="og:locale" content="en_US"/>
      
      {/* Twitter Card Tags */}"
      <meta name="twitter:card" content={twitterCard}/>"
      <meta name="twitter:site" content="@ziontechgroup"/>"
      <meta name="twitter:creator" content="@ziontechgroup"/>"
      <meta name="twitter:title" content={title}/>"
      <meta name="twitter:description" content={description}/>"
      <meta name="twitter:image" content={ogImage}/>"
      <meta name="twitter:image:alt" content={title}/>
      
      {/* Additional Meta Tags for Better SEO */}"
      <meta name="theme-color" content="#1a1a2e"/>"
      <meta name="msapplication-TileColor" content="#1a1a2e"/>"
      <meta name="apple-mobile-web-app-capable" content="yes"/>"
      <meta name="apple-mobile-web-app-status-bar-style" content="black"/>"
      <meta name="format-detection" content="telephone=no"/>
      
      {/* Structured Data */}"
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Preconnect to external domains for performance */}"
      <link rel="preconnect" href="https://fonts.googleapis.com"/>"
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>"
      <link rel="preconnect" href="https://www.google-analytics.com"/>
      
      {/* DNS Prefetch for external resources */}"
      <link rel="dns-prefetch" href="https://www.googletagmanager.com"/>"
      <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
      
      {/* Security Headers */}"
      <meta httpEquiv="X-Content-Type-Options" content="nosniff"/>"
      <meta httpEquiv="X-Frame-Options" content="DENY"/>"
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block"/>"
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin"/>
    </Helmet>)}
'"`