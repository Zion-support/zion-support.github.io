import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  structuredData?: any;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.',
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development',
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  structuredData,
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullCanonicalUrl = canonicalUrl ? `https://ziontechgroup.com${canonicalUrl}` : 'https://ziontechgroup.com';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://ziontechgroup.com${ogImage}`} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://ziontechgroup.com${ogImage}`} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
      
      {/* Default Structured Data for Organization */}
      {!structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": "Leading provider of AI services, IT solutions, and micro SaaS development",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://linkedin.com/company/zion-tech-group",
                "https://twitter.com/ziontechgroup",
                "https://facebook.com/ziontechgroup"
              ]
            }),
          }}
        />
      )}
    </Head>
  );
};

export default SEOHead;