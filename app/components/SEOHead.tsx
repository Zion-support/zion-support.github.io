import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONSTANTS, STRUCTURED_DATA, META_TAGS, OPEN_GRAPH_TAGS, TWITTER_TAGS } from '../utils/seoConstants';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
  breadcrumbs?: Array<{ name: string; url: string }>;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  breadcrumbs,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const fullTitle = title.includes(SEO_CONSTANTS.SITE_NAME) ? title : `${title} - ${SEO_CONSTANTS.SITE_NAME}`;
  const fullDescription = description || SEO_CONSTANTS.DEFAULT_DESCRIPTION;
  const fullKeywords = keywords || SEO_CONSTANTS.DEFAULT_KEYWORDS;
  const fullOgImage = ogImage || `${SEO_CONSTANTS.SITE_URL}${SEO_CONSTANTS.DEFAULT_OG_IMAGE}`;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : SEO_CONSTANTS.SITE_URL);

  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: fullTitle,
    description: fullDescription,
    url: currentUrl,
    publisher: STRUCTURED_DATA.ORGANIZATION,
    ...(breadcrumbs && { breadcrumb: STRUCTURED_DATA.BREADCRUMB(breadcrumbs) }),
    ...(author && { author: { '@type': 'Person', name: author } }),
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
    ...(section && { articleSection: section }),
    ...(tags.length > 0 && { keywords: tags.join(', ') }),
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Standard Meta Tags */}
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : META_TAGS.ROBOTS} />
      <meta name="viewport" content={META_TAGS.VIEWPORT} />
      <meta httpEquiv="Content-Type" content={META_TAGS.CHARSET} />
      <meta name="author" content={author || META_TAGS.AUTHOR} />
      <meta name="generator" content={META_TAGS.GENERATOR} />
      <meta name="theme-color" content={META_TAGS.THEME_COLOR} />
      <meta name="msapplication-TileColor" content={META_TAGS.MSAPPLICATION_TILECOLOR} />
      
      {/* Apple Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content={META_TAGS.APPLE_MOBILE_WEB_APP_CAPABLE} />
      <meta name="apple-mobile-web-app-status-bar-style" content={META_TAGS.APPLE_MOBILE_WEB_APP_STATUS_BAR_STYLE} />
      <meta name="apple-mobile-web-app-title" content={META_TAGS.APPLE_MOBILE_WEB_APP_TITLE} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content={OPEN_GRAPH_TAGS.IMAGE_WIDTH} />
      <meta property="og:image:height" content={OPEN_GRAPH_TAGS.IMAGE_HEIGHT} />
      <meta property="og:image:alt" content={OPEN_GRAPH_TAGS.IMAGE_ALT} />
      <meta property="og:site_name" content={OPEN_GRAPH_TAGS.SITE_NAME} />
      {author && <meta property="og:author" content={author} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={TWITTER_TAGS.SITE} />
      <meta name="twitter:creator" content={TWITTER_TAGS.CREATOR} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={TWITTER_TAGS.IMAGE_ALT} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(STRUCTURED_DATA.ORGANIZATION)}
      </script>
      
      {/* Website Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(STRUCTURED_DATA.WEBSITE)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
