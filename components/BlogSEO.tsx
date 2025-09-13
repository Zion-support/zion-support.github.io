import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BlogSEOProps {
  title: string;
  description: string;
  slug: string;
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  category?: string;
  readingTime?: number;
  wordCount?: number;
  featuredImage?: string;
}

const BlogSEO: React.FC<BlogSEOProps> = ({
  title,
  description,
  slug,
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  tags = [],
  category = 'Technology',
  readingTime,
  wordCount,
  featuredImage = '/images/blog-default.jpg'
}) => {
  const fullTitle = `${title} | Zion Tech Group Blog`;
  const fullUrl = `https://zion.app/blog/${slug}`;
  const fullImage = featuredImage.startsWith('http') ? featuredImage : `https://zion.app${featuredImage}`;

  // Generate breadcrumb data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://zion.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://zion.app/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": fullUrl
      }
    ]
  };

  // Generate article structured data
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": fullImage,
    "url": fullUrl,
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://zion.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://zion.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zion.app/images/zion-tech-group-logo.png",
        "width": 600,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "articleSection": category,
    "keywords": tags.join(', '),
    "wordCount": wordCount,
    "timeRequired": readingTime ? `PT${readingTime}M` : undefined,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "genre": "Technology",
    "about": tags.map(tag => ({
      "@type": "Thing",
      "name": tag
    }))
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:published_time" content={publishedTime} />
      <meta property="article:modified_time" content={modifiedTime || publishedTime} />
      <meta property="article:author" content={author} />
      <meta property="article:section" content={category} />
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
      <meta property="twitter:site" content="@ZionTechGroup" />
      <meta property="twitter:creator" content="@ZionTechGroup" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Reading time and word count */}
      {readingTime && <meta name="twitter:label1" content="Reading time" />}
      {readingTime && <meta name="twitter:data1" content={`${readingTime} min read`} />}
      {wordCount && <meta name="twitter:label2" content="Word count" />}
      {wordCount && <meta name="twitter:data2" content={`${wordCount} words`} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(articleData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
    </Helmet>
  );
};

export default BlogSEO;