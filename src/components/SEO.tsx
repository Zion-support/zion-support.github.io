import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const defaultSEO = {
  title: 'Zion Tech Group - AI, Cybersecurity, Cloud & Digital Transformation',
  description: 'Leading technology company delivering cutting-edge AI solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with Zion Tech Group.',
  keywords: 'AI solutions, cybersecurity, cloud computing, digital transformation, machine learning, IT services, micro SaaS, edge computing, IoT, blockchain, quantum computing',
  image: '/og-image.jpg',
  url: 'https://ziontechgroup.com',
  type: 'website' as const,
  author: 'Zion Tech Group',
  section: 'Technology Services',
  tags: ['AI', 'Cybersecurity', 'Cloud Computing', 'Digital Transformation', 'Technology']
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags
}) => {
  const location = useLocation();
  const currentUrl = `${defaultSEO.url}${location.pathname}`;
  
  const seoData = {
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    url: url || currentUrl,
    type: type || defaultSEO.type,
    author: author || defaultSEO.author,
    publishedTime: publishedTime || '',
    modifiedTime: modifiedTime || '',
    section: section || defaultSEO.section,
    tags: tags || defaultSEO.tags
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      <meta name="author" content={seoData.author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoData.url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:type" content={seoData.type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": seoData.description,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": "https://ziontechgroup.com/contact"
          },
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://facebook.com/ziontechgroup"
          ]
        })}
      </script>
      
      {/* Page-specific structured data */}
      {seoData.type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": seoData.title,
            "description": seoData.description,
            "image": seoData.image,
            "author": {
              "@type": "Organization",
              "name": seoData.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ziontechgroup.com/logo.png"
              }
            },
            "datePublished": seoData.publishedTime,
            "dateModified": seoData.modifiedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": seoData.url
            }
          })}
        </script>
      )}
      
      {/* Product-specific structured data */}
      {seoData.type === 'product' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": seoData.title,
            "description": seoData.description,
            "image": seoData.image,
            "brand": {
              "@type": "Brand",
              "name": "Zion Tech Group"
            },
            "offers": {
              "@type": "Offer",
              "url": seoData.url,
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      )}
    </Helmet>
  );
};
