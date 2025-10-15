import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions', description = 'Leading provider of AI-powered micro SAAS solutions, IT services, _and innovative technology solutions.', keywords = 'AI solutions, _micro SAAS, _IT services, _software development, _cloud computing, _cybersecurity, _data analytics', image = 'https://ziontechgroup.com/og-image.jpg', url = 'https://ziontechgroup.com', type = 'website', author = 'Zion Tech Group', _publishedTime, _modifiedTime, _section, tags = [], _canonical, _ogTitle, _ogDescription, _ogImage, _ogUrl, twitterCard = 'summary_large_image', twitterSite = '@ziontechgroup', twitterCreator = '@ziontechgroup', _structuredData, noindex = false, nofollow = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description || 'Leading provider of AI-powered micro SAAS solutions, IT services, and innovative technology solutions.';
  const fullImage = image || 'https://ziontechgroup.com/og-image.jpg';
  const fullUrl = url || 'https://ziontechgroup.com';
  const fullCanonical = canonical || fullUrl;

  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');

  return (<Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || fullDescription} />
      <meta property="og:image" content={ogImage || fullImage} />
      <meta property="og:url" content={ogUrl || fullUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || fullDescription} />
      <meta name="twitter:image" content={ogImage || fullImage} />

      {/* Article Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    </Helmet>
  );
};

export default SEOHead;