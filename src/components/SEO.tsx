import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
}

export function SEO({
  title = 'Zion Tech Group - AI, Cloud Computing & Digital Transformation',
  description = 'Leading provider of AI, cloud computing, and digital transformation services. Expert consulting, implementation, and support for modern businesses.',
  keywords = ['AI', 'cloud computing', 'digital transformation', 'technology consulting'],
  image = '/images/og-image.jpg',
  url = '',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false
}: SEOProps) {
  const baseUrl = 'https://zion.app';
  const finalCanonicalUrl = url ? `${baseUrl}${url}` : baseUrl;

  return (
    <div>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={finalCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </div>
  );
}