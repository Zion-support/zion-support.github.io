import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO({ title, description, keywords, image, url }) {
  const defaultTitle = 'Zion Tech Group - Revolutionary AI, Quantum Computing & Next-Generation Technology Solutions';
  const defaultDescription = 'Pioneering the future with revolutionary AI, quantum computing, and next-generation technology solutions. Transform your business with cutting-edge innovation.';
  const defaultKeywords = 'AI, artificial intelligence, quantum computing, technology solutions, IT services, micro SAAS, cybersecurity, cloud infrastructure, digital transformation';
  const defaultImage = '/og-image.jpg';
  const defaultUrl = 'https://ziontechgroup.com';

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = image || defaultImage;
  const seoUrl = url || defaultUrl;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Contact Information */}
      <meta name="contact:phone" content="+1 302 464 0950" />
      <meta name="contact:email" content="kleber@ziontechgroup.com" />
      <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />
    </Helmet>
  );
}