<<<<<<< HEAD
'use client'
import Navigation from './Navigation'
import React, { useEffect, useCallback, useRef } from 'react'
import { Helmet } from 'lucide-react';interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  structuredData?: Record<string, unknown>
  robots?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}
=======
import React from "react";

>>>>>>> origin/main
interface AdvancedSEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
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

export default AdvancedSEOOptimizer;
