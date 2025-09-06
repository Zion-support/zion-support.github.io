import React, { useEffect } from 'react';
import Head from 'next/head';
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[],
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product',
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[],
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean
}

const SEO: React.FC<SEOProps> = ({
  title;
