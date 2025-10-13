'use client;

import React from 'react;

import { Helmet } from react-helmet-async;

interface EnhancedSEOHeadProps {}
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;

  description?: string;

  keywords?: string[];

  canonicalUrl?: string;

  ogImage?: string;

  structuredData?: Record<string, unknown>;

  noIndex?: boolean;

  author?: string;

  publishedTime?: string;

  modifiedTime?: string;

  section?: string;

  tags?: string[];

}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions,
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.,
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI],
  canonicalUrl = 'https://ziontechgroup.com,
  ogImage = 'https://ziontechgroup.com/og-image.jpg,
  structuredData,
  noIndex = false,
  author = 'Zion Tech Group,
  publishedTime,
  modifiedTime,
  section = 'Technology,
  tags = []
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group;;

  const fullDescription = description.length > 160 ? description.substring(0, 157) + ... : description;;

  const fullKeywords = [...keywords, 'Zion Tech Group', 'technology solutions', 'AI consulting', IT services];;

const SEOHead: React.FC = () => {
  return (

    <Helmet>
      {/* Basic Meta Tags */}

      <title>{fullTitle}</title>
      <meta name="description content={fullDescription} />
      <meta name="keywords" content={fullKeywords.join(', )} />
      <meta name="author content={author} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow} />
      <link rel="canonical href={canonicalUrl} />
      
      {/* Open Graph Tags */}

      <meta property="og:type" content="website />
      <meta property="og:title content={fullTitle} />
      <meta property="og:description content={fullDescription} />
      <meta property="og:image content={ogImage} />
      <meta property="og:url content={canonicalUrl} />
      <meta property="og:site_name" content="Zion Tech Group />
      <meta property="og:locale" content="en_US />
      
      {/* Twitter Card Tags */}

      <meta name="twitter:card" content="summary_large_image />
      <meta name="twitter:title content={fullTitle} />
      <meta name="twitter:description content={fullDescription} />
      <meta name="twitter:image content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup />
      <meta name="twitter:creator" content="@ziontechgroup />
      
      {/* Additional SEO Tags */}

      <meta name="viewport" content="width=device-width, initial-scale=1.0 />
      <meta name="theme-color" content="#0f172a />
      <meta name="msapplication-TileColor" content="#0f172a />
      <meta name="apple-mobile-web-app-capable" content="yes />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent />
      
      {/* Favicon */}

      <link rel="icon" type="image/x-icon" href="/favicon.ico />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png />
      <link rel="manifest" href="/site.webmanifest />
      
      {/* Preconnect to external domains */}

      <link rel="preconnect" href="https://fonts.googleapis.com />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous />
      
      {/* Article specific tags */}

      {publishedTime && <meta property="article:published_time content={publishedTime} />}

      {modifiedTime && <meta property="article:modified_time content={modifiedTime} />}

      {section && <meta property="article:section content={section} />}

      {tags.map((tag, index) => (

        <meta key={index} property="article:tag content={tag} />
      ))}

      {/* Structured Data */}

      {structuredData && (

        <script type="application/ld+json>
          {JSON.stringify(structuredData)}

        </script>
      )}

      {/* Default Organization Structured Data */}

      <script type="application/ld+json>
        {JSON.stringify({
          '@context': 'https://schema.org,
          '@type': 'Organization,
          name: 'Zion Tech Group,
          url: 'https://ziontechgroup.com,
          logo: 'https://ziontechgroup.com/logo.png,
          description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.,
          foundingDate: '2020,
          numberOfEmployees: '50-100,
          industry: 'Technology,
          address: {
            '@type': 'PostalAddress,
            streetAddress: '364 E Main St STE 1008,
            addressLocality: 'Middletown,
            addressRegion: 'DE,
            postalCode: '19709,
            addressCountry: US
          },
          contactPoint: {
            '@type': 'ContactPoint,
            telephone: '+1-302-464-0950,
            contactType: 'Customer Service,
            areaServed: 'US,
            availableLanguage: en
          },
          sameAs: [
            'https://linkedin.com/company/ziontechgroup,
            https://twitter.com/ziontechgroup
          ]
        })}

      </script>
    </Helmet>
  );

};

export default EnhancedSEOHead;
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || 'https://ziontechgroup.com'} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `https://ziontechgroup.com${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywordsString} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || 'https://ziontechgroup.com'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `https://ziontechgroup.com${ogImage}`} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Middletown" />
      <meta name="geo.position" content="39.4496;-75.7163" />
      <meta name="ICBM" content="39.4496, -75.7163" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};

export default SEOHead;
