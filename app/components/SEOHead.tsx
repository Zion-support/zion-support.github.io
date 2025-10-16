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
  // Generate full title
  const fullTitle = title === SEO_CONSTANTS.DEFAULT_TITLE 
    ? title 
    : `${title} | ${SEO_CONSTANTS.SITE_NAME}`;

  // Generate canonical URL
  const canonical = canonicalUrl || `${SEO_CONSTANTS.SITE_URL}${typeof window !== 'undefined' ? window.location.pathname : ''}`;

  // Generate Open Graph image
  const ogImageUrl = ogImage || `${SEO_CONSTANTS.SITE_URL}/og-image.jpg`;

  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: fullTitle,
    description,
    url: canonical,
    mainEntity: {
      '@type': 'Organization',
      name: SEO_CONSTANTS.SITE_NAME,
      url: SEO_CONSTANTS.SITE_URL,
    },
    breadcrumb: breadcrumbs ? STRUCTURED_DATA.BREADCRUMB_LIST(breadcrumbs) : undefined,
    author: author ? {
      '@type': 'Person',
      name: author,
    } : undefined,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    section,
    keywords: tags.length > 0 ? tags.join(', ') : keywords,
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : META_TAGS.ROBOTS} />
      <meta name="author" content={author || META_TAGS.AUTHOR} />
      <meta name="theme-color" content={META_TAGS.THEME_COLOR} />
      <meta name="viewport" content={META_TAGS.VIEWPORT} />
      <meta charSet={META_TAGS.CHARSET} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content={OPEN_GRAPH_TAGS.IMAGE_WIDTH} />
      <meta property="og:image:height" content={OPEN_GRAPH_TAGS.IMAGE_HEIGHT} />
      <meta property="og:image:type" content={OPEN_GRAPH_TAGS.IMAGE_TYPE} />
      <meta property="og:site_name" content={OPEN_GRAPH_TAGS.SITE_NAME} />
      <meta property="og:locale" content={OPEN_GRAPH_TAGS.LOCALE} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={TWITTER_TAGS.SITE} />
      <meta name="twitter:creator" content={TWITTER_TAGS.CREATOR} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={TWITTER_TAGS.IMAGE_ALT} />

      {/* Additional Meta Tags */}
      <meta name="googlebot" content="index, follow" />
      <meta name="msapplication-TileColor" content={META_TAGS.MSAPPLICATION_TILECOLOR} />

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

      {/* Breadcrumb Structured Data */}
      {breadcrumbs && (
        <script type="application/ld+json">
          {JSON.stringify(STRUCTURED_DATA.BREADCRUMB_LIST(breadcrumbs))}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;