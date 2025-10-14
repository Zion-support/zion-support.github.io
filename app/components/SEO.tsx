import React from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOProps {
  title?: string,
description?: string,
keywords?: string,
image?: string,
url?: string';
  type?: 'website' | 'article' | 'profile;
  author?: string,
publishedTime?: string,
modifiedTime?: string,
section?: string,
tags?: string[]}
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile'
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[]}
const SEO: React.FC<SEOProps> = ({,
  title = 'Zion Tech Group - Advanced AI and IT Solutions'
  description = 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide.'
  keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5 G solutions'
  image = '/og-image.svg'
  url = 'https: //ziontechgroup.com',
  type = 'website'
  author = 'Zion Tech Group'
  publishedTime,
modifiedTime
  section,
tags = []
}) => {
  return null;
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group""
  const fullUrl = url.startsWith('http') ? url : `https: //ziontechgroup.com${url}""
  const fullImage = image.startsWith('http') ? image : `https: //ziontechgroup.com${image}"";