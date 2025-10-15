import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateMetaTags, generateStructuredData } from '../../utils/seoUtils';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
  noindex = false,
  canonical
}) => {
  const metaTags = generateMetaTags({
    title: title || 'Zion Tech Group',
    description: description || 'Leading provider of AI and IT solutions for businesses worldwide.',
    keywords: keywords || [],
    image: image || 'https://ziontechgroup.com/og-image.jpg',
    url: url || 'https://ziontechgroup.com',
    type,
    publishedTime,
    modifiedTime,
    author,
    section,
    tags
  });

  const structuredData = generateStructuredData({
    title: title || 'Zion Tech Group',
    description: description || 'Leading provider of AI and IT solutions for businesses worldwide.',
    image: image || 'https://ziontechgroup.com/og-image.jpg',
    url: url || 'https://ziontechgroup.com',
    type,
    publishedTime,
    modifiedTime,
    author
  });

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      <meta name="viewport" content={metaTags.viewport} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : metaTags.robots} />
      <meta name="language" content={metaTags.language} />
      <meta name="revisit-after" content={metaTags['revisit-after']} />
      
      {/* Keywords */}
      {keywords && keywords.length > 0 && metaTags.keywords && (
        <meta name="keywords" content={metaTags.keywords} />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={canonical || metaTags['og:url']} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={metaTags['og:title'] || metaTags.title} />
      <meta property="og:description" content={metaTags['og:description'] || metaTags.description} />
      <meta property="og:image" content={metaTags['og:image'] || ''} />
      <meta property="og:url" content={metaTags['og:url'] || ''} />
      <meta property="og:type" content={metaTags['og:type'] || 'website'} />
      <meta property="og:site_name" content={metaTags['og:site_name'] || 'Zion Tech Group'} />
      <meta property="og:locale" content={metaTags['og:locale'] || 'en_US'} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={metaTags['twitter:card'] || 'summary_large_image'} />
      <meta name="twitter:title" content={metaTags['twitter:title'] || metaTags.title} />
      <meta name="twitter:description" content={metaTags['twitter:description'] || metaTags.description} />
      <meta name="twitter:image" content={metaTags['twitter:image'] || metaTags['og:image']} />
      {metaTags['twitter:site'] && (
        <meta name="twitter:site" content={metaTags['twitter:site']} />
      )}
      {metaTags['twitter:creator'] && (
        <meta name="twitter:creator" content={metaTags['twitter:creator']} />
      )}

      {/* Facebook App ID */}
      {metaTags['fb:app_id'] && (
        <meta property="fb:app_id" content={metaTags['fb:app_id']} />
      )}

      {/* Article-specific tags */}
      {type === 'article' && (
        <>
          {publishedTime && (
            <>
              <meta property="article:published_time" content={metaTags['article:published_time']} />
              <meta property="og:article:published_time" content={metaTags['og:article:published_time']} />
            </>
          )}
          {modifiedTime && (
            <>
              <meta property="article:modified_time" content={metaTags['article:modified_time']} />
              <meta property="og:article:modified_time" content={metaTags['og:article:modified_time']} />
            </>
          )}
          {author && (
            <>
              <meta property="article:author" content={metaTags['article:author']} />
              <meta property="og:article:author" content={metaTags['og:article:author']} />
            </>
          )}
          {section && (
            <>
              <meta property="article:section" content={metaTags['article:section']} />
              <meta property="og:article:section" content={metaTags['og:article:section']} />
            </>
          )}
          {tags && tags.map((tag, index) => (
            <meta key={index} property={`article:tag:${index}`} content={tag} />
          ))}
        </>
      )}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#00ffff" />
      <meta name="msapplication-TileColor" content="#00ffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};

export default SEOHead;