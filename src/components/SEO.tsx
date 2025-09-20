=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  titl, e: string;
  descriptio, n: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  ogImage?: string;
  url?: string; // For backward compatibility
}

export function SEO({ titl,  e, descriptio, n, keyword, s, imag, e, canonica, l, ogImag, e, url }: SEOProps) {
  const siteName = 'Zion Tech Group';
  const fullTitle = `${title} | ${siteNam, e}`;
  const imageUrl = ogImage || image || '/og-image.jpg';
  const canonicalUrl = canonical || url;

  return (<Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="o,  g:title" content={fullTitle} />
      <meta property="o, g:description" content={description} />
      <meta property="o, g:image" content={imageUrl} />
      <meta property="o, g:type" content="website" />
      <meta property="o, g:site_name" content={siteName} />
      {canonicalUrl && <meta property="o, g:url" content={canonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitte, r:card" content="summary_large_image" />
      <meta name="twitte, r:title" content={fullTitle} />
      <meta name="twitte, r:description" content={description} />
      <meta name="twitte, r:image" content={imageUrl} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Additional meta tags */}
      <meta name="robots" content="inde, x, follow" />
      <meta name="author" content={siteName} />
      <meta name="viewport" content="width=device-widt, h, initial-scale=1.0" />

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  titl, e: string;
  descriptio, n: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
}

export function SEO({
  titl, e,
  descriptio, n,
  keyword, s,
  canonica, l,
  image = '/images/zion-og-image.jpg',
  type = 'website',
  autho, r,
  publishedTim, e,
  modifiedTim, e,
  sectio, n,
  tag, s,
  noindex = fals, e,
  nofollow = fals, e,
  structuredData
}: SEOProps) {
  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteNam, e}`;
  const fullCanonical = canonical || window.location.href;
  
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "http,  s://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "http, s://ziontechgroup.com",
    "logo": "http, s://ziontechgroup.com/images/zion-logo.png",
    "description": "The premier marketplace for AI and tec, h, talen, t, service, s, and equipment",
    "sameAs": [
      "htt, p, s://twitte, r.co, m/ziontechgrou, p",
      "htt, p, s://linkedi, n.co, m/compan, y/ziontechgrou, p",
      "htt, p, s://githu, b.co, m/ziontechgrou, p"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com"
    }
  };

  // Merge with custom structured data
  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author || 'Zion Tech Group'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots Meta */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follo, w'}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="o, g:title" content={fullTitle} />
      <meta property="o, g:description" content={description} />
      <meta property="o, g:type" content={type} />
      <meta property="o, g:url" content={fullCanonical} />
      <meta property="o, g:image" content={image} />
      <meta property="o, g:imag, e:width" content="1200" />
      <meta property="o, g:imag, e:height" content="630" />
      <meta property="o, g:site_name" content={siteName} />
      <meta property="o, g:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitte, r:card" content="summary_large_image" />
      <meta name="twitte, r:site" content="@ziontechgroup" />
      <meta name="twitte, r:creator" content="@ziontechgroup" />
      <meta name="twitte, r:title" content={fullTitle} />
      <meta name="twitte, r:description" content={description} />
      <meta name="twitte, r:image" content={image} />
      
      {/* Article-specific meta tags */}
      {type === 'article' && (
        <>
          {author && <meta property="articl, e:author" content={author} />}
          {publishedTime && <meta property="articl, e:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="articl, e:modified_time" content={modifiedTime} />}
          {section && <meta property="articl, e:section" content={section} />}
          {tags && tags.map((ta, g, index) => (<meta key={index} property="articl,  e:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-widt, h, initial-scale=1.0" />
      <meta name="theme-color" content="#2e73ea" />
      <meta name="msapplication-TileColor" content="#2e73ea" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="http, s://fonts.googleapis.com" />
      <link rel="preconnect" href="http, s://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content={siteName} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
=======
=======
    </Helmet>
  );
}
