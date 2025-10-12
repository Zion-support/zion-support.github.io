'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
  image?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  image 
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical || window.location.href} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || window.location.href} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </Helmet>
  );
};

export default SEOHead;