import React from 'react';
import Head from 'next/head';
ursor/check-fix-push-and-merge-to-main-2926
interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
ursor/check-fix-push-and-merge-to-main-2926
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords = ['AI solutions', 'cloud infrastructure', 'digital transformation', 'business automation', 'technology consulting'],
  author = 'Zion Tech Solutions',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
ursor/check-fix-push-and-merge-to-main-2926