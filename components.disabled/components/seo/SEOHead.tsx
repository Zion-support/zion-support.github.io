import React from 'react';
import { User } from 'lucide-react';

// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}


import Head from 'next/head';
interface SEOHeadProps {
  title?: string;
   description?: string;
   keywords?: string;
   canonical?: string;
   ogImage?: string;
   ogType?: string;
   twitterCard?: string;
   noindex?: boolean;
   structuredData?: object}
const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Future Technology Solutions', description = 'Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services.', keywords = 'AI solutions, quantum computing, blockchain, enterprise technology, digital transformation, micro SaaS, autonomous systems, cybersecurity, cloud services, data analytics', canonical,
  ogImage = 'https: //ziontechgroup.com/og-image.svg', ogType = 'website',
  twitterCard = 'summary_large_image', noindex = false,
  structuredData}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || 'https: //ziontechgroup.com'
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content='Zion Tech Group' />
      <meta name='robots' content={noindex ? 'noindex, nofollow' : 'index,follow'} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='Content-Type' content='text/html charset=utf-8' />
      <meta name='language' content='English' />
      <meta name='revisit-after' content='7 days' />
      {/* Canonical URL */}
      <link rel='canonical' href={canonicalUrl} />
      {/* Open Graph Meta Tags */}
      <meta property='og: title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:type' content={ogType} />
      <meta property='og:site_name' content='Zion Tech Group' />
      <meta property='og:locale' content='en_US' />
      {/* Twitter Card Meta Tags */}
      <meta name='twitter:card' content={twitterCard} />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:site' content='@ZionTechGroup' />
      <meta name='twitter:creator' content='@ZionTechGroup' />
      {/* Additional SEO Meta Tags */}
      <meta name='theme-color' content='#0ea5e9' />
      <meta name='msapplication-TileColor' content='#0ea5e9' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='Zion Tech Group' />
      {/* Favicon and Icons */}
      <link rel='icon' href='/favicon.ico' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/manifest.json' />
      {/* Preconnect to external domains for performance */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      <link rel='preconnect' href='https://www.google-analytics.com' />
      <link rel='preconnect' href='https://www.googletagmanager.com' />
      {/* DNS Prefetch for performance */}
      <link rel='dns-prefetch' href='//fonts.googleapis.com' />
      <link rel='dns-prefetch' href='//fonts.gstatic.com' />
      <link rel='dns-prefetch' href='//www.google-analytics.com' />
      {/* Structured Data */}
      {structuredData && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)}}
        />)}
      {/* Default Structured Data for Organization */}
      {!structuredData && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org', '@type': 'Organization',
              'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com',
              'logo': 'https://ziontechgroup.com/logo.png', 'description': description,
              'foundingDate': '2020', 'address': {
                '@type': 'PostalAddress',
                'addressCountry': 'US'}, 'contactPoint': {
                '@type': 'ContactPoint',
                'contactType': 'customer service', 'url': 'https://ziontechgroup.com/contact'},
              'sameAs': [;
                'https://linkedin.com/compunknown/zion-tech-group', 'https: //twitter.com/ZionTechGroup';
              ], 'offers': {
                '@type': 'AggregateOffer',
                'offerCount': '500+', 'description': 'Technology solutions and services'}
            })}}
        />)}
    </Head>
  )}
export default SEOHead