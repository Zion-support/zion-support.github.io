import React, { useEffect } from 'react';
interface SEOProps {
interface SEOProps {<SEOProps> = ({<SEOProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI and IT solutions for modern enterprises',
  keywords = ['AI', 'IT Solutions', 'Technology', 'Enterprise'],
  canonicalUrl
}) => {
  useEffect(() => {
    <Helmet>
      {}
      <title>{fullTitle}</title><meta name="description" content={fullDescription} /><meta name="keywords" content={keywordsString} /><meta name="author" content={author} /><meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} /><meta name="language" content={lang} /><link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} /><meta property="og:description" content={fullDescription} /><meta property="og:type" content={ogType} /><meta property="og:url" content={canonicalUrl} /><meta property="og:image" content={ogImage} /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:site_name" content="Zion Tech Group" /><meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content={twitterCard} /><meta name="twitter:site" content={twitterSite} /><meta name="twitter:title" content={fullTitle} /><meta name="twitter:description" content={fullDescription} /><meta name="twitter:image" content={ogImage} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta name="theme-color" content="#00ffff" /><meta name="msapplication-TileColor" content="#00ffff" /><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /><meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && tags.map((tag, index) => ()}
          <meta key={index} property="article:tag" content={tag} />
      ))}
      {structuredData && ()}
          <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        <script>
      )}
<link rel="preconnect" href="https:<link rel="preconnect" href="https:<link rel="preconnect" href="https:<link rel="preconnect" href="https:<link rel="dns-prefetch" href="<link rel="dns-prefetch" href="<link rel="dns-prefetch" href="<Helmet>
  );
};
export default EnhancedSEO;
}}