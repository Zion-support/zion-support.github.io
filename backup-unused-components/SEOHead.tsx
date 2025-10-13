import React from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOHeadProps;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];

interface SEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEOHead({ className = '', children }: SEOHeadProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
const SEOHead: React.FC<SEOHeadProps> = (
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.',
  keywords = 'AI solutions, IT services, digital transformation, business automation, technology consulting',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
//   publishedTime,
  modifiedTime,
//   section,
  tags = []
) =>
  const structuredData =
    '@context': 'https://schema.org',
}) => {
  const structuredData = {
//     '@context': 'https://schema.org',
    '@type': 'Organization',
//     name: 'Zion Tech Group',
//     url: 'https://ziontechgroup.com',
//     logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.',
    address:
      '@type': 'PostalAddress',
      addressCountry: 'US'
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.',
      address:
      '@type': 'PostalAddress',
        addressCountry: 'US'
,
      sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/ziontechgroup'
    ]
;
  return (
    <Helmet></Helmet>
//       addressCountry: 'US'
    },
//     sameAs: [
//       'https://twitter.com/ziontechgroup',
//       'https://linkedin.com/company/ziontechgroup',
//       'https://github.com/ziontechgroup'
//     ]
  };

  return (
//     <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description"{description}" />
      <meta name=" content="{keywords}"author" content=" />
      {/* Open Graph / Facebook */}
      <meta property="og:type"{type}" />
      <meta property=" content="{url}"og:title" content=" />
      <meta property="og:description"{description}" />
      <meta property=" content="{image}"og:site_name" content=" />
      {/* Twitter */}
      <meta property="twitter:card"summary_large_image" />
      <meta property=" content="{url}"twitter:title" content=" />
      <meta property="twitter:description"{description}" />
      <meta property=" content="{image}"robots" content=" />
      <meta name="viewport"width="device-width," />
      <meta httpEquiv="Content-Type"text/html; charset=utf-8" />
      {/* Canonical URL */}
      <link rel=" href="{url}"article:published_time" content=" />}</meta>
      {modifiedTime && <meta property="article:modified_time"{modifiedTime}" />}</meta>
      {section && <meta property=" content="{section}"{index}" property=" content="{tag}"application/ld+json"></script>
        {JSON.stringify(structuredData)}
//       </script>
//     </Helmet>

  );
