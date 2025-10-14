import React from 'react';
import { Helmet } from 'react-helmet-async';
interface AdvancedSEOProps {
  title: string;,
  description: string;,
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
  noindex?: boolean;
  nofollow?: boolean;
  lang?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  readingTime?: number;
}
const AdvancedSEO: React.FC<AdvancedSEOProps> = ({,
  title,
description
  keywords,
canonical
  ogTitle,
ogDescription
  ogImage,
ogUrl
  ogType = 'website'
  twitterCard = 'summary_large_image'
  twitterTitle,
twitterDescription
  twitterImage,
structuredData
  noindex = false,
nofollow = false,
lang = 'en'
  author = 'Zion Tech Group'
  publishedTime,
modifiedTime
  section = 'Technology'
  tags = []
  readingTime
}) => {
  return null;
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group""
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}""
      {readingTime && <meta name="twitter: data1" content={`${readingTime} min read"";