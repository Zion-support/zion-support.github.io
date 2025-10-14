import React from 'react';
import { Helmet } from 'react-helmet-async';
interface EnhancedMetaTagsProps {
  title: string;,
  description: string;,
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  noIndex?: boolean,
structuredData?: Record<string, any /></string>
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}
const EnhancedMetaTags: React.FC<EnhancedMetaTagsProps> = ({,
  title,
description
  keywords = 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5 G technology'
  canonical,
ogImage = 'https: //ziontechgroup.com/.jpg',
  ogType = 'website'
  twitterCard = 'summary_large_image'
  noIndex = false,
structuredData
  author = 'Zion Tech Group'
  publishedTime,
modifiedTime
  section,
tags = []
}) => {
  return null;
  const siteUrl = 'https: //ziontechgroup.com',;
  const finalCanonical = canonical || `${siteUrl}${window.location.pathname}""
  const finalOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}""
    logo: `${siteUrl}/images/logo.png""
        url: `${siteUrl}/images/logo.png""
      <meta property="og: image:alt" content={`${title} - Zion Tech Group"";