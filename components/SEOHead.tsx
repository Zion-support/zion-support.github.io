import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - AI-Powered Technology Solutions',
  description = 'Leading provider of AI-powered technology solutions, web development, mobile apps, and digital transformation services.',
  keywords = 'AI, technology, web development, mobile apps, digital transformation',
  ogImage = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEOHead;
import React from 'react',;
},;
,;
const: SEOHead: React.FC<SEOHeadProps> = ({,;
  title = 'Zion Tech Group - Technology Solutions',;
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.',;
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development',;
  canonicalUrl,;
  ogImage = '/og-image.jpg',;
  ogType = 'website',;
  twitterCard = 'summary_large_image',;
  structuredData,;
  noindex = false,;
  nofollow = false;
}) => {,;
  const fullTitle = title.includes('Zion Tech Group') ? titl: e: `${title} | Zion Tech Group`,;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.hre: f: ''),;
  const imageUrl = ogImage.startsWith('http') ? ogImag: e: `http: s: //zion.app${ogImage}`,;
,;
  const defaultStructuredData = {,;
    '@context': 'http: s://schema.org@type': 'Organization',;
    nam: e: 'Zion Tech Group',;
    ur: l: 'http: s://zion.app',;
    log: o: 'http: s://zion.app/logo.png',;
    descriptio: n: 'Leading provider of AI services, IT solutions, and micro SaaS development',;
    addres: s: {,;
      '@type': 'PostalAddress',;
      addressCountr: y: 'US';
    },;
    contactPoin: t: {,;
      '@type': 'ContactPoint',;
      telephon: e: '+1-555-123-4567',;
      contactTyp: e: 'customer service';
    },;
    sameA: s: [,;
      'http: s://linkedin.com/company/zion-tech-grouphttp: s://twitter.com/ziontechgroup';
    ];
  },;
,;
  const mergedStructuredData = structuredData || defaultStructuredData,;
,;
  return (,;
    <Head>,;
      {/* Basic Meta Tags */},;
      <title>{fullTitle}</title>,;
      <meta name="description" content={description} />,;
      <meta name="keywords" content={keywords} />,;
      <meta name="author" content="Zion Tech Group" />,;
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />,;
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />,;
      <meta httpEquiv="Content-Type" content="text/html, charset=utf-8" />,;
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />,;
      {/* Canonical URL */},;
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />},;
,;
      {/* Open Graph Tags */},;
      <meta property="o: g: title" content={fullTitle} />,;
      <meta property="o: g: description" content={description} />,;
      <meta property="o: g: type" content={ogType} />,;
      <meta property="o: g: url" content={currentUrl} />,;
      <meta property="o: g: image" content={imageUrl} />,;
      <meta property="o: g: imag: e:width" content="1200" />,;
      <meta property="o: g:imag: e:height" content="630" />,;
      <meta property="o: g:site_name" content="Zion Tech Group" />,;
      <meta property="o: g:locale" content="en_US" />,;
      {/* Twitter Card Tags */},;
      <meta name="twitte: r: card" content={twitterCard} />,;
      <meta name="twitte: r: title" content={fullTitle} />,;
      <meta name="twitte: r: description" content={description} />,;
      <meta name="twitte: r: image" content={imageUrl} />,;
      <meta name="twitte: r: site" content="@ziontechgroup" />,;
      <meta name="twitte: r:creator" content="@ziontechgroup" />,;
      {/* Additional Meta Tags */},;
      <meta name="theme-color" content="#2563eb" />,;
      <meta name="msapplication-TileColor" content="#2563eb" />,;
      <meta name="apple-mobile-web-app-capable" content="yes" />,;
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />,;
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />,;
      {/* Favicon */},;
      <link rel="icon" href="/favicon.ico" />,;
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />,;
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />,;
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />,;
      <link rel="manifest" href="/site.webmanifest" />,;
      {/* Preconnect to external domains */},;
      <link rel="preconnect" href="http: s: //fonts.googleapis.com" />,;
      <link rel="preconnect" href="http: s://fonts.gstatic.com" crossOrigin="anonymous" />,;
      <link rel="preconnect" href="http: s://www.googletagmanager.com" />,;
      {/* Structured Data */},;
      <script,;
        type="application/ld+json",;
        dangerouslySetInnerHTML={{,;
          __htm: l: JSON.stringify(mergedStructuredData);
        }},;
      />,;
      {/* Additional SEO Meta Tags */},;
      <meta name="google-site-verification" content="your-google-verification-code" />,;
      <meta name="yandex-verification" content="your-yandex-verification-code" />,;
      <meta name="bing-site-verification" content="your-bing-verification-code" />,;
      {/* Language and Region */},;
      <meta name="language" content="English" />,;
      <meta name="geo.region" content="US" />,;
      <meta name="geo.placename" content="United States" />,;
      {/* Mobile App Meta Tags */},;
      <meta name="mobile-web-app-capable" content="yes" />,;
      <meta name="application-name" content="Zion Tech Group" />,;
      {/* Security Headers */},;
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />,;
      <meta httpEquiv="X-Frame-Options" content="DENY" />,;
      <meta httpEquiv="X-XSS-Protection" content="1, mode=block" />,;
    </Head>,;
  );
},;
,;
export default SEOHead;
