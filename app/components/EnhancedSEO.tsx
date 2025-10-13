import React from 'react'
import { Helmet } from 'react-helmet-async'

interface EnhancedSEOProps {
<<<<<<< HEAD
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
  structuredData?: object;
  noIndex?: boolean;
  lang?: string;
  noindex?: boolean;
  nofollow?: boolean;
=======
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  structuredData?: object
  noIndex?: boolean
>>>>>>> cursor/analyze-improve-and-deploy-application-2b18
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
<<<<<<< HEAD
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noIndex = false,
  noindex = false,
  nofollow = false,
  lang = 'en'
}) => {
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';
  const defaultImage = 'https://ziontechgroup.com/og-image.jpg';
  
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : undefined;
  const fullOgUrl = ogUrl || fullCanonical || siteUrl;
  const fullOgImage = ogImage || defaultImage;
  const fullTwitterImage = twitterImage || fullOgImage;
  
  const defaultKeywords = 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology, Zion Tech Group';
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.svg`,
    "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ]
  };

  const mergedStructuredData = structuredData ? { ...defaultStructuredData, ...structuredData } : defaultStructuredData;
=======
  keywords = "AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology",
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  twitterTitle,
  twitterDescription,
  twitterImage = "https://ziontechgroup.com/twitter-image.jpg",
  structuredData,
  noIndex = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  const fullOgTitle = ogTitle || fullTitle
  const fullOgDescription = ogDescription || description
  const fullTwitterTitle = twitterTitle || fullTitle
  const fullTwitterDescription = twitterDescription || description
>>>>>>> cursor/analyze-improve-and-deploy-application-2b18

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
<<<<<<< HEAD
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content={`${noIndex || noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="language" content={lang} />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : lang} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || fullTitle} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={fullTwitterImage} />
=======
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullOgTitle} />
      <meta property="og:description" content={fullOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTwitterTitle} />
      <meta name="twitter:description" content={fullTwitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
>>>>>>> cursor/analyze-improve-and-deploy-application-2b18
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<<<<<<< HEAD
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-2b18
      <meta name="theme-color" content="#00ffff" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      
      {/* Structured Data */}
<<<<<<< HEAD
      <script type="application/ld+json">
        {JSON.stringify(mergedStructuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
=======
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Structured Data for Organization */}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.svg",
            "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com"
            },
            "sameAs": [
              "https://twitter.com/ziontechgroup",
              "https://linkedin.com/company/ziontechgroup"
            ]
          })}
        </script>
      )}
>>>>>>> cursor/analyze-improve-and-deploy-application-2b18
    </Helmet>
  )
}

export default EnhancedSEO