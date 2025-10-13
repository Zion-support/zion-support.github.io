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
  structuredData?: object;
  noIndex?: boolean;
  lang?: string;
  noindex?: boolean;
  nofollow?: boolean;
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
  noIndex = false,
  lang = 'en',
  noindex = false,
  nofollow = false
}) => {
  const defaultOgImage = '/og-image.svg';
  const defaultCanonical = typeof window !== 'undefined' ? window.location.href : '';

  const seoTitle = title ? `${title} | Zion Tech Group` : 'Zion Tech Group - Advanced AI and IT Solutions';
  const seoDescription = description || 'Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.';
  const seoKeywords = keywords || 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology';
  const seoCanonical = canonical || defaultCanonical;
  const seoOgTitle = ogTitle || seoTitle;
  const seoOgDescription = ogDescription || seoDescription;
  const seoOgImage = ogImage || defaultOgImage;
  const seoOgUrl = ogUrl || seoCanonical;
  const seoTwitterTitle = twitterTitle || seoOgTitle;
  const seoTwitterDescription = twitterDescription || seoOgDescription;
  const seoTwitterImage = twitterImage || seoOgImage;

  const robotsContent = noIndex || noindex ? 'noindex' : 'index';
  const robotsContentWithFollow = nofollow ? `${robotsContent}, nofollow` : `${robotsContent}, follow`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="robots" content={robotsContentWithFollow} />
      <meta name="language" content={lang} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <meta name="color-scheme" content="dark light" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={seoOgUrl} />
      <meta property="og:title" content={seoOgTitle} />
      <meta property="og:description" content={seoOgDescription} />
      <meta property="og:image" content={seoOgImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={seoOgUrl} />
      <meta property="twitter:title" content={seoTwitterTitle} />
      <meta property="twitter:description" content={seoTwitterDescription} />
      <meta property="twitter:image" content={seoTwitterImage} />
      <meta property="twitter:site" content="@ziontechgroup" />
      <meta property="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Structured Data if none provided */}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.svg",
            "description": seoDescription,
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
    </Helmet>
  );
};

export default EnhancedSEO;