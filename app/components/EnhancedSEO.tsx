import React from "react";
import { Helmet } from "react-helmet-async;
interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
const EnhancedSEO: React.FC<EnhancedSEOProps> = ({

  title,
  description,
  keywords,
  canonical,";
  const siteUrl = 'https://ziontechgroup.com';}'
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl''
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  
  // Enhanced meta description with better length control
  const optimizedDescription = description.length > 160 '
    ? description.substring(0, 157) + '...' '
    : description;
'
  const defaultStructuredData = {''
    '@context': 'https://schema.org'''
    '@type': 'Organization','
    name: siteName,
    url: siteUrl,}'
    logo: `${siteUrl}/logo.png`''
    description: 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.','
    address: {''
      '@type': 'PostalAddress'''
      addressLocality: 'Middletown'''
      addressRegion: 'DE'''
      addressCountry: 'US'}'
    },'
    contactPoint: {''
      '@type': 'ContactPoint'''
      telephone: '+1-302-464-0950'''
      contactType: 'customer service'''
      email: 'kleber@ziontechgroup.com'}'
    },'
    sameAs: [''
      'https://www.linkedin.com/'''
      'https://github.com/ziontechgroup'''
      'https://twitter.com/ziontechgroup'
    ]
  };
  const mergedStructuredData = structuredData || defaultStructuredData;
  return (
    <Helmet />
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={optimizedDescription} /></meta>"
      {keywords && <meta name="keywords" content={keywords} />}"
      <link rel="canonical" href={fullCanonical} /></link>"
      <html lang={lang} /></html>
      {/* Enhanced Performance Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" /></meta>"
      <meta name="theme-color" content="#0f172a" /></meta>"
      <meta name="color-scheme" content="dark" /></meta>"
      {/* Robots */}'
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} /></meta>'
      <meta name="googlebot" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} /></meta>'
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} /></meta>"
      <meta property="og:description" content={ogDescription || description} /></meta>"
      <meta property="og:image" content={fullOgImage} /></meta>"
      <meta property="og:url" content={fullOgUrl} /></meta>"
      <meta property="og:type" content={ogType} /></meta>"
      <meta property="og:site_name" content="Zion Tech Group" /></meta>"
      <meta property="og:locale" content="en_US" /></meta>"
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} /></meta>"
      <meta name="twitter:title" content={twitterTitle || title} /></meta>"
      <meta name="twitter:description" content={twitterDescription || description} /></meta>"
      <meta name="twitter:image" content={twitterImage} /></meta>"
      <meta name="twitter:site" content="@ziontechgroup" /></meta>"
      <meta name="twitter:creator" content="@ziontechgroup" /> "
      
      {/* Article Specific Meta Tags */}
      {publishedTime && (
        <></>
          <meta property="article:published_time" content={publishedTime} /></meta>"
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}"
          <meta property="article:author" content={author} /></meta>"
          {section && <meta property="article:section" content={section} />}"
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} /></meta>"
          ))}
        </>
      )}
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Zion Tech Group" /></meta>"
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /></meta>"
      <meta name="theme-color" content="#0ea5e9" /></meta>"
      <meta name="msapplication-TileColor" content="#0ea5e9" /></meta>"
      {/* Favicon */}
      <link rel="icon" type="" href="/favicon.ico" /></link>"
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /></link>"
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /></link>"
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /></link>"
      <link rel="manifest" href="/site.webmanifest" /></link>"
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json"></script>"
          {JSON.stringify(structuredData, null, 2)}
        </script>
      )}
      
      {/* Default Structured Data */}
      {!structuredData && (
        <script type="application/ld+json"></script>"
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": baseUrl,"
            "logo": `${baseUrl}/logo.png`,"
            "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://twitter.com/ziontechgroup","
              "https://linkedin.com/company/ziontechgroup","
              "https://github.com/ziontechgroup"
            ]
          }, null, 2)}
        </script>
      )}

    </Helmet>
  )};

export default EnhancedSEO;
'