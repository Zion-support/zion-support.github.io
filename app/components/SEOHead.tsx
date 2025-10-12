'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead: React.FC = () => {
  return (
    <Helmet>
      <title>Zion Tech Group - Advanced AI & IT Solutions | Leading Technology Company</title>
      <meta name="description" content="Zion Tech Group provides cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development. Transform your business with our innovative technology services." />
      <meta name="keywords" content="AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
      <meta property="og:description" content="Leading technology company providing AI solutions, cloud infrastructure, and cybersecurity services." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontechgroup.com" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
      <meta name="twitter:description" content="Transform your business with cutting-edge AI and IT solutions." />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Canonical */}
      <link rel="canonical" href="https://ziontechgroup.com" />
    </Helmet>
  );
};

export default SEOHead;
