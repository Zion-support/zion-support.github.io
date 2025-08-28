import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords?: string[] | string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const normalizedKeywords = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  const metaImage = image || '/images/zion-tech-group-og.jpg';
  const metaUrl = url || 'https://ziontechgroup.com/';
  const twitterCard = 'summary_large_image';

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'Organization',
    name: 'Zion Tech Group',
    description,
    url: metaUrl,
    logo: 'https://ziontechgroup.com/images/zion-logo.png'
  };

  const structuredDataScript = structuredData || defaultStructuredData;

  const robots = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;

  return (
    <Helmet>
      <title>{title} | Zion Tech Group</title>
      <meta name="description" content={description} />
      {normalizedKeywords && <meta name="keywords" content={normalizedKeywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />

      {canonical && <link rel="canonical" href={canonical} />} 

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content="Zion Tech Group" />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:site" content="@ziontechgroup" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22ddd2" />

      <script type="application/ld+json">{JSON.stringify(structuredDataScript)}</script>

      {publishedTime && <meta property="article:published_time" content={publishedTime} />} 
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />} 
      {author && <meta property="article:author" content={author} />} 
      {section && <meta property="article:section" content={section} />} 
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
    </Helmet>
  );
};

export default EnhancedSEO;