import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
  lang?: string;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noindex = false,
  nofollow = false,
  lang = 'en'
}) => {
  const defaultOgImage = 'https://ziontechgroup.com/og-image.jpg';
  const defaultCanonical = 'https://ziontechgroup.com';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="language" content={lang} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || defaultCanonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:url" content={ogUrl || canonical || defaultCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage || defaultOgImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;