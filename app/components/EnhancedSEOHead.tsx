import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
<<<<<<< HEAD
=======
export default SEOHead;

'use client';

import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

interface SEOHeadProps {title?: string;
  description?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  structuredData?: object;
}

<<<<<<< HEAD
const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology.',
  keywords = 'AI solutions, artificial intelligence, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, IT consulting',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  siteName = 'Zion Tech Group',
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
=======
const SEOHead: React.FC<SEOHeadProps   /> = ({
  const title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.',
  keywords = 'AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics, machine learning, artificial intelligence',
  canonical = 'https: // ziontechgroup.com',
  ogImage = 'https: // ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData;
  const defaultStructuredData = {
    "@context": "https: // schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.",
    "url": "https: // ziontechgroup.com",
    "logo": "https: // ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"},
    "address": {"@type": "PostalAddress",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
<<<<<<< HEAD
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://github.com/zion-tech-group"
    ]
=======
      "addressCountry": "US"},
    "sameAs": ["https: // linkedin.com/company/ziontechgroup",
      "https: // twitter.com/ziontechgroup"],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "services": ["AI Solutions",
      "Cloud Infrastructure",
      "Cybersecurity",
      "Software Development",
      "Data Analytics",
      "Machine Learning"]
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  };

  return (
<<<<<<< HEAD
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og: type" content={type,} />
      <meta property="og: url" content={url,} />
      <meta property="og: title" content={title,} />
      <meta property="og: description" content={description,} />
      <meta property="og: image" content={image,} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og: image:alt" content={title,} />
      <meta property="og: site_name" content={siteName,} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter: url" content={url,} />
      <meta name="twitter: title" content={title,} />
      <meta name="twitter: description" content={description,} />
      <meta name="twitter: image" content={image,} />
      <meta name="twitter: image:alt" content={title,} />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#00ffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      
      {/* Business Information */}
      <meta name="contact" content="kleber@ziontechgroup.com" />
      <meta name="phone" content="+1-302-464-0950" />
      <meta name="address" content="364 E Main St STE 1008, Middletown, DE 19709" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
=======
  structuredData?: any;
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({ title, description, structuredData }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    </Helmet>
  );
};

export default EnhancedSEOHead;
=======
    <title>5G Data Analytics - Zion Tech Group</title>
      {/* Basic Meta Tags */}

      <title>{title}</title>
      {/* Canonical URL */}
      {/* Open Graph Meta Tags */}

      {/* Twitter Card Meta Tags */}

      {/* Additional Meta Tags */}

      {/* Favicon and Icons */}

      {/* Preconnect to external domains */}

      {/* DNS Prefetch */}

      {/* Structured Data */}

      <script type="application/ld+json">{JSON.stringify(finalStructuredData)}

      {/* Additional SEO Scripts */}
      <script type="application/ld+json"    />{JSON.stringify({
          "@context": "https: // schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https: // ziontechgroup.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https: // ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        })}

      {/* Performance Hints */}

      {/* Security Headers */}

      <meta httpEquiv="X-Frame-Options" content="DENY" / /   />;
  );
};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
