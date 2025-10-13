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
const SEOHead: React.FC<SEOHeadProps> = (
  title = 'Zion Tech Group - Advanced AI and IT Solutions'
  description = 'Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.'
  keywords = 'AI solutions, IT services, digital transformation, business automation, technology consulting'
  image = 'https://ziontechgroup.com/og-image.jpg'
  url = 'https://ziontechgroup.com'
  type = 'website'
  author = 'Zion Tech Group'
  publishedTime;
  modifiedTime;
  section;
  tags = [])
) => 
  const structuredData = 
    '@context': 'https://schema.org'
    '@type': 'Organization'
    name: 'Zion Tech Group'
    url: 'https://ziontechgroup.com'
    logo: 'https://ziontechgroup.com/logo.png'
    description: 'Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.'
    address: 
      '@type': 'PostalAddress'
      addressCountry: 'US'

    sameAs: [
      'https://twitter.com/ziontechgroup'
      'https://linkedin.com/company/ziontechgroup'
      'https://github.com/ziontechgroup']
    ]
;
  return()
    <Helmet /></Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content="{description}" / /></meta>
      <meta name="keywords" content="{keywords}" / /></meta>
      <meta name="author" content="{author}" / /></meta>
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="{type}" / /></meta>
      <meta property="og:url" content="{url}" / /></meta>
      <meta property="og:title" content="{title}" / /></meta>
      <meta property="og:description" content="{description}" / /></meta>
      <meta property="og:image" content="{image}" / /></meta>
      <meta property="og:site_name" content="Zion Tech Group" / /></meta>
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" / /></meta>
      <meta property="twitter:url" content="{url}" / /></meta>
      <meta property="twitter:title" content="{title}" / /></meta>
      <meta property="twitter:description" content="{description}" / /></meta>
      <meta property="twitter:image" content="{image}" / /></meta>
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" / /></meta>
      <meta name="viewport" content="width="device-width," initial-scale=1.0" / /></meta>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" / /></meta>
      {/* Canonical URL */}
      <link rel="canonical" href="{url}" / /></link>
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content="{publishedTime}" />}</meta>
      {modifiedTime && <meta property="article:modified_time" content="{modifiedTime}" />}</meta>
      {section && <meta property="article:section" content="{section}" />}</meta>
      
        <meta key="{index}" property="article:tag" content="{tag}" / /></meta>
      {/* Structured Data */}
      <script type="application/ld+json" />)
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
;
export default SEOHead;
</meta>
</meta>
</meta>
</SEOHeadProps>