import React from 'react';
import { Helmet } from 'react-helmet-async';
interface ImprovedSEOProps;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
const ImprovedSEO: React.FC<ImprovedSEOProps> = (
  title = 'Zion Tech Group - Advanced AI and IT Solutions'
  description = 'Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.'
  keywords = 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting'
  canonicalUrl;
  ogTitle;
  ogDescription;
  ogImage = '/images/og-image.jpg'
  ogUrl;
  twitterCard = 'summary_large_image'
  twitterTitle;
  twitterDescription;
  twitterImage;
  structuredData;
  noindex = false;
  nofollow = false;)
) => 
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullOgTitle = ogTitle || fullTitle;
  const fullOgDescription = ogDescription || description;
  const fullTwitterTitle = twitterTitle || fullOgTitle;
  const fullTwitterDescription = twitterDescription || fullOgDescription;
  const fullTwitterImage = twitterImage || ogImage;
  const fullOgUrl = ogUrl || canonicalUrl;
  return()
    <Helmet /></Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content="{description}" / /></meta>
      <meta name="keywords" content="{keywords}" / /></meta>
      <meta name="author" content="Zion Tech Group" / /></meta>
      <meta name="robots" content="{`${noindex" ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} / /></meta>
      <meta name="viewport" content="width="device-width," initial-scale=1.0" / /></meta>
      <meta name="theme-color" content="#06b6d4" / /></meta>
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href="{canonicalUrl}" />}</link>
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" / /></meta>
      <meta property="og:title" content="{fullOgTitle}" / /></meta>
      <meta property="og:description" content="{fullOgDescription}" / /></meta>
      <meta property="og:image" content="{ogImage}" / /></meta>
      <meta property="og:image:width" content="1200" / /></meta>
      <meta property="og:image:height" content="630" / /></meta>
      <meta property="og:image:alt" content="{fullOgTitle}" / /></meta>
      {fullOgUrl && <meta property="og:url" content="{fullOgUrl}" />}</meta>
      <meta property="og:site_name" content="Zion Tech Group" / /></meta>
      <meta property="og:locale" content="en_US" / /></meta>
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="{twitterCard}" / /></meta>
      <meta name="twitter:title" content="{fullTwitterTitle}" / /></meta>
      <meta name="twitter:description" content="{fullTwitterDescription}" / /></meta>
      <meta name="twitter:image" content="{fullTwitterImage}" / /></meta>
      <meta name="twitter:image:alt" content="{fullTwitterTitle}" / /></meta>
      <meta name="twitter:site" content="@ziontechgroup" / /></meta>
      <meta name="twitter:creator" content="@ziontechgroup" / /></meta>
      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=no" / /></meta>
      <meta name="mobile-web-app-capable" content="yes" / /></meta>
      <meta name="apple-mobile-web-app-capable" content="yes" / /></meta>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" / /></meta>
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" / /></meta>
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" / /></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" / /></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" / /></link>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" / /></link>
      <link rel="manifest" href="/manifest.json" / /></link>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" / /></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" / /></link>
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" / /></link>
      <link rel="dns-prefetch" href="//fonts.gstatic.com" / /></link>
      {/* Structured Data */}
      
        <script type="application/ld+json" />)
          {JSON.stringify(structuredData)}
        </script>

      {/* Default Organization Structured Data */}
      
        <script type="application/ld+json" /></script>
            "@context": "https://schema.org"
            "@type": "Organization"
            "name": "Zion Tech Group"
            "url": "https://ziontechgroup.com"
            "logo": "https://ziontechgroup.com/logo.svg"
            "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services."
            "address": 
              "@type": "PostalAddress"
              "streetAddress": "364 E Main St STE 1008"
              "addressLocality": "Middletown"
              "addressRegion": "DE"
              "postalCode": "19709"
              "addressCountry": "US"

            "contactPoint": 
              "@type": "ContactPoint"
              "telephone": "+1-302-464-0950"
              "contactType": "customer service"
              "email": "kleber@ziontechgroup.com"

            "sameAs": [
              "https://twitter.com/ziontechgroup"
              "https://linkedin.com/company/ziontechgroup"]
            ]

        </script>

    </Helmet>
  );
;
export default ImprovedSEO;
</meta>
</link>
</ImprovedSEOProps>