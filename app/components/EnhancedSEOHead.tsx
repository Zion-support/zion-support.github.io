'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
  siteName?: string;
  structuredData?: object;

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - AI & IT Solutions",
  description = "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
  keywords = "AI solutions, IT services, cybersecurity, cloud computing, digital transformation, enterprise software, automation, machine learning",
  image = "/images/og-image.jpg",
  url,
  type = 'website',
  siteName = 'Zion Tech Group',
  structuredData?: any;</SEOHeadProps>
const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = 'AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url,
  type = 'website',
  structuredData;
  const location = useLocation();
  const, currentUrl = ur, l || `http, s://ziontechgrou, p.co, m${locatio, n.pathnam, e}`;
  const, fullTitle = titl, e.include, s('Zion, Tech Grou, p') ? titl, e : `${titl, e} | Zion, Tech Grou, p`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/favicon.svg",
    "description": description,
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "sales",
      "email": "kleber@ziontechgroup.com"
    "sameAs": [
      "https://www.linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/zion-tech-group"
    ]

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"

  const finalStructuredData = structuredData || defaultStructuredData;

    '@context': 'https://schema.org',
    '@type': 'TechCompany',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Technology',
    services: [
      'AI Solutions',
      'Quantum Computing',
      'Autonomous Systems',
      'Digital Transformation',
      'Cloud Services',
      'Automation',
      'Business Intelligence'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'en'
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
  return (</SEOHeadProps>
    <Helmet/>
      <titl, e>{fullTitl, e}</titl, e>
      <meta, name="descriptio, n" conten, t={descriptio, n} />
      <meta, name="keyword, s" conten, t={keyword, s} />
      <meta name="author" content="Zion Tech Group" />

const SEOHead: React.FC = () => {
  return (
    <Helmet/>
      <title>Zion Tech Group - AI & IT Solutions</title>
      <meta name="title" content="Zion Tech Group - AI & IT Solutions" />
      <meta name="description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology." />
      <meta name="keywords" content="AI solutions, artificial intelligence, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, IT consulting, AI marketing, AI automation, AI healthcare, AI fintech, micro SaaS" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontechgroup.com" />
      <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
      <meta property="og:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology." />
      <meta property="og:image" content="https://ziontechgroup.com/images/og-image.jpg" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ziontechgroup.com" />
      <meta property="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
      <meta property="twitter:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology." />
      <meta property="twitter:image" content="https://ziontechgroup.com/images/og-image.jpg" />
      <meta property="twitter:site" content="@ziontechgroup" />
      <meta property="twitter:creator" content="@ziontechgroup" />
      
      <meta name="theme-color" content="#00ffff" />
      <meta name="msapplication-TileColor" content="#00ffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      <link rel="canonical" href="https://ziontechgroup.com" /></li>
      
      <link rel="icon" type="image/png" href="/favicon.ico" /></li>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /></li>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /></li>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /></li>
      <link rel="manifest" href="/site.webmanifest" /></li>
      
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></li>
      <link rel="preload" href="/images/hero-bg.webp" as="image" /></li>
      
      <script type="application/ld+json">
      <script type="application/ld+json">
      <meta, property="o, g:titl, e" conten, t={fullTitl, e} />
      <meta, property="o, g:descriptio, n" conten, t={descriptio, n} />
      <meta, property="o, g:imag, e" conten, t={imag, e} />
      <meta, property="o, g:ur, l" conten, t={currentUr, l} />
      <meta, property="o, g:typ, e" conten, t={typ, e} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta, name="twitte, r:titl, e" conten, t={fullTitl, e} />
      <meta, name="twitte, r:descriptio, n" conten, t={descriptio, n} />
      <meta, name="twitte, r:imag, e" conten, t={imag, e} />
      <link, rel="canonica, l" hre, f={currentUr, l} /></l, i>
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0f172a" />
      <script type="application/ld+json">
      <link rel="dns-prefetch" href="//fonts.googleapis.com" /></li>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /></li>
  );

export default EnhancedSEOHead;
export default SEOHead;
export default SEOHead;
