'use client'
import React from 'react'
import Head from 'next/head'
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  structuredData?: object;
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = '',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  siteName = 'Zion Tech Group',
  structuredData
}) => {
  const fullTitle = `${title} | ${siteName}`;
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={fullImage} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={siteName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullImage} />
        <link rel="canonical" href={fullUrl} />
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData)
            }}
          />
        )}
      </Head>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={fullImage} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={siteName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullImage} />
        <link rel="canonical" href={fullUrl} />
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData)
            }}
          />
        )}
      </Helmet>
    </>
  );
};

export default EnhancedSEOHead;