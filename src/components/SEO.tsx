import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile' | 'product';
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  robots?: string;
  noindex?: boolean;
  nofollow?: boolean;
  section?: string;
  tags?: string[];
}

export function SEO({
  title = 'Zion Tech Group - The Future of Tech Marketplace',
  description = 'Connect with AI experts, discover innovative services, and accelerate your digital transformation with Zion Tech Group\'s comprehensive platform.',
  keywords = 'AI services, tech marketplace, digital transformation, IT consulting, cloud solutions, cybersecurity, talent placement',
  image = '/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
  siteName = 'Zion Tech Group',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  canonical,
  robots = 'index, follow',
  noindex = false,
  nofollow = false,
  section,
  tags = []
}: SEOProps) {
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    robots
  ].filter(Boolean).join(', ');

<<<<<<< HEAD
const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
  keywords = 'AI, automation, technology, cloud, SaaS, innovation, 2025, breakthrough',
  image = '/og-image.jpg',
  url = 'https://zion.app',
  type = 'website'
}) => {
  return (
    <Head>
      <title>{title}</title>
=======
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
<<<<<<< HEAD
    </Head>
  );
};

export default SEO;

=======
      
      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
}

export default SEO;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
