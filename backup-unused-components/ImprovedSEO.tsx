import React from 'react';
<<<<<<< HEAD

interface ImprovedSEOProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedSEO({ className = '', children }: ImprovedSEOProps) {
=======
import { Helmet } from 'react-helmet-async';
interface ImprovedSEOProps;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;

const ImprovedSEO: React.FC<ImprovedSEOProps> = (
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.',
  keywords = 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting',
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = '/images/og-image.jpg',
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noindex = false,
  nofollow = false;
) => 
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullOgTitle = ogTitle || fullTitle;
  const fullOgDescription = ogDescription || description;
  const fullTwitterTitle = twitterTitle || fullOgTitle;
  const fullTwitterDescription = twitterDescription || fullOgDescription;
  const fullTwitterImage = twitterImage || ogImage;
  const fullOgUrl = ogUrl || canonicalUrl;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}