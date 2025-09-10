<<<<<<< HEAD
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  ogImage?: string;
  url?: string; // For backward compatibility
}

export function SEO({ title, description, keywords, image, canonical, ogImage, url }: SEOProps) {
  const siteName = 'Zion Tech Group';
  const fullTitle = `${title} | ${siteName}`;
  const imageUrl = ogImage || image || '/og-image.jpg';
  const canonicalUrl = canonical || url;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
>>>>>>> origin/chore/fix-links-and-build
  image?: string;
  url?: string;
  type?: string;
  canonical?: string;
  noindex?: boolean;
<<<<<<< HEAD
  structuredData?: object;
}

const SEO = memo(function SEO({
  title = 'Zion Tech Group - Leading AI and Technology Solutions',
  description = 'Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.',
  keywords = ['AI', 'artificial intelligence', 'micro SaaS', 'IT services', 'technology', 'innovation'],
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
=======
  nofollow?: boolean;
  structuredData?: object;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  image = '/images/zion-og-image.jpg',
>>>>>>> origin/chore/fix-links-and-build
  type = 'website',
  canonical,
  noindex = false,
  structuredData
}: SEOProps) {
<<<<<<< HEAD
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const canonicalUrl = canonical || fullUrl;
=======
  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical || window.location.href;
  
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-logo.png",
    "description": "The premier marketplace for AI and tech talent, services, and equipment",
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup"
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
>>>>>>> origin/chore/fix-links-and-build

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
<<<<<<< HEAD
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
=======
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author || 'Zion Tech Group'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots Meta */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph Meta Tags */}
>>>>>>> origin/chore/fix-links-and-build
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<<<<<<< HEAD
      <meta name="theme-color" content="#0f172a" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="language" content="en" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
=======
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
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
>>>>>>> origin/chore/fix-links-and-build
    </Helmet>
  );
});

export { SEO };

export const HomePageSEO: React.FC = () => {
  return (
    <SEO
      title="Zion Tech Group - Leading AI and Technology Solutions"
      description="Transform your business with cutting-edge AI and technology solutions from Zion Tech Group. Specializing in AI development, cybersecurity, and cloud computing."
      keywords={[
        'AI development',
        'artificial intelligence',
        'cybersecurity',
        'cloud computing',
        'micro SaaS',
        'IT services',
        'technology innovation',
        'business automation'
      ]}
    />
  );
};
