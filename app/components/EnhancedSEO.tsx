import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  viewport?: string;
  charset?: string;
  publisher?: string;
  language?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  geo?: {
    latitude?: string;
    longitude?: string;
    region?: string;
    placename?: string;
  };
  alternate?: Array<{
    href: string;
    hreflang: string;
  }>;
  structuredData?: any;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of advanced AI and IT solutions for businesses worldwide. Expert services in artificial intelligence, cloud computing, cybersecurity, and digital transformation.',
  keywords = 'AI solutions, artificial intelligence, IT services, cloud computing, cybersecurity, digital transformation, machine learning, data analytics, automation, business intelligence',
  canonicalUrl = 'https://zion.app',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  robots = 'index, follow',
  author = 'Zion Tech Group',
  publisher = 'Zion Tech Group',
  language = 'en-US',
  viewport = 'width=device-width, initial-scale=1.0',
  charset = 'UTF-8',
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  twitterImage,
  geo,
  alternate,
  structuredData
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta name="robots" content={robots} />
      <meta name="viewport" content={viewport} />
      <meta charSet={charset} />
      <meta httpEquiv="Content-Language" content={language} />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Geo */}
      {geo && (
        <>
          {geo.region && <meta name="geo.region" content={geo.region} />}
          {geo.placename && <meta name="geo.placename" content={geo.placename} />}
          {geo.latitude && geo.longitude && (
            <meta name="geo.position" content={`${geo.latitude};${geo.longitude}`} />
          )}
        </>
      )}
      
      {/* Alternate languages */}
      {alternate && alternate.map((alt, index) => (
        <link key={index} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
      ))}
      
      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;