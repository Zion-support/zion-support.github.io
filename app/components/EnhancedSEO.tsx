import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = '',
  canonical = '',
  ogImage = '/og-image.svg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description || 'Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.';
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/favicon.svg",
    "description": fullDescription,
    "sameAs": [
      "https://www.linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "info@ziontechgroup.com",
      "telephone": "+1-302-464-0950"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords || 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology'} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical || `https://ziontechgroup.com${window.location.pathname}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || `https://ziontechgroup.com${window.location.pathname}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonical || `https://ziontechgroup.com${window.location.pathname}`} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <meta name="color-scheme" content="dark light" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default EnhancedSEO;
