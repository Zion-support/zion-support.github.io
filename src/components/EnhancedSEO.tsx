import React from 'react';
import { Helmet } from 'react-helmet-async';

type EnhancedSEOProps = {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  type?: 'website' | 'article' | string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: Record<string, unknown>;
};

export default function EnhancedSEO(props: EnhancedSEOProps) {
  const {
    title,
    description,
    keywords = [],
    image = '/og-image.svg',
    url,
    canonical,
    noindex = false,
    nofollow = false,
    type = 'website',
    publishedTime,
    modifiedTime,
    author = 'Zion Tech Group',
    section,
    tags = [],
    structuredData
  } = props;

  const robots = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="robots" content={robots} />
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />} 

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}