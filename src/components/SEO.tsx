<<<<<<< HEAD
'use client'
/**
 * SEO Component
 * Provides comprehensive SEO meta tags and structured data
 */
import React from 'react'
import { Helmet } from 'lucide-react';export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product' | 'profile'
  author?: string
  publishDate?: string
  modifiedDate?: string
  canonical?: string
  noIndex?: boolean
  structuredData?: Record<string, unknown>
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  locale?: string
  alternateLocales?: { locale: string; url: string }[]
=======
import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
>>>>>>> origin/main
}

const SEO: React.FC<SEOProps> = ({
  title = "Default Title",
  description = "Default Description",
  keywords = "default, keywords"
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="{description}" />
      <meta name="keywords" content="{keywords}" />
    </>
  );
};

export default SEO;
