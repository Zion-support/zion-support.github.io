'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

const EnhancedSEOHead: React.FC = () => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Zion Tech Group - Advanced AI and IT Solutions</title>
      <meta name="description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
      <meta name="keywords" content="AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta property="og:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontechgroup.com" />
      <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta name="twitter:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
      <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://ziontechgroup.com" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};

export default EnhancedSEOHead;