'use client';
import React  from 'react';
import {Helmet} from 'react-helmet-async';

interface SEOHeadProps {title: string;,}
  description: string;,
  keywords?: string[]
  canonicalUrl?: string;
  structuredData?: any;
  ogImage?: string;
  twitterCard?: string;}const SEOHead: React.FC<SEOHeadProps> = ({,
  title,
  description,
  keywords = [],
  canonicalUrl,
  structuredData,
  ogImage = '/og-image.jpg',
  twitterCard = 'summary_large_image'}) => {const fullTitle = title.includes('Zion Tech Group') ? title : `${title}| Zion Tech Group`;
  
  return(<Helmet />)
      {/* Basic Meta Tags */} <title>{fullTitle}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords.join(', ')}/>
      <link rel="canonical" href={canonicalUrl}/>
      
      {/* Open Graph Tags */} <meta property="og: title" content={fullTitle,}/>
      <meta property="og: description" content={description,}/>
      <meta property="og: type" content="website" />,
      <meta property="og: url" content={canonicalUrl,}/>
      <meta property="og: image" content={ogImage,}/>
      <meta property="og: site_name" content="Zion Tech Group" />,
      
      {/* Twitter Card Tags */} <meta name="twitter: card" content={twitterCard,}/>
      <meta name="twitter: title" content={fullTitle,}/>
      <meta name="twitter: description" content={description,}/>
      <meta name="twitter: image" content={ogImage,}/>
      
      {/* Additional SEO Tags */} <meta name="robots" content="index, follow" />
interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology, AI automation, cloud infrastructure, and cybersecurity solutions.",
  keywords = "AI solutions, IT services, artificial intelligence, machine learning, cloud computing, cybersecurity, automation, business intelligence, data analytics, digital transformation",
  image = "https://ziontechgroup.com/images/og-image.jpg",
  url = "https://ziontechgroup.com",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/logo.png",
    "description": description,
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
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "50+",
      "lowPrice": "199",
      "highPrice": "5000",
      "priceCurrency": "USD"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}{structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)} </script>
      )}
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#00ffff" />
      <meta name="msapplication-TileColor" content="#00ffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Helmet>
  );
};

export default EnhancedSEOHead;