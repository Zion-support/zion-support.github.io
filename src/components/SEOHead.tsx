import React from 'react';
import Head from 'next/head';
import { SEOProps } from '../types';

<<<<<<< HEAD
=======
interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: any;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = "AI, quantum computing, blockchain, cybersecurity, cloud computing, technology solutions, 2026, innovation",
  image = "/images/og-image.jpg",
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = "website",
  structuredData
>>>>>>> cursor/create-and-deploy-new-content-c963
}) => {
  const siteUrl = 'https://ziontechgroup.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const defaultImage = `${siteUrl}/og-image.jpg`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Leading-edge technology solutions and autonomous innovation platform",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com"
    },
    "sameAs": [
      "https://github.com/Zion-Holdings",
      "https://linkedin.com/company/zion-tech-group"
    ]
  };

  return (
<<<<<<< HEAD
=======
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Zion Tech Group" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
>>>>>>> cursor/create-and-deploy-new-content-c963
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
<<<<<<< HEAD
=======
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@ziontechgroup" />
      <meta property="twitter:site" content="@ziontechgroup" />
      
      {/* Additional SEO Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1a365d" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/images/logo.png",
          "description": "Leading-edge technology solutions in AI, quantum computing, and cybersecurity",
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "contact@ziontechgroup.com"
          }
        })}
      </script>
    </Helmet>
>>>>>>> cursor/create-and-deploy-new-content-c963
  );
};

export default SEOHead;
