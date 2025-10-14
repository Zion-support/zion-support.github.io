import React from 'react';
import { Helmet } from 'react-helmet-async';
interface EnhancedMetaTagsProps {
  title: string;
    headline: title,
    description,
    author: {
      '@type': 'Organization',';
      name: author,
    },
    publisher: {
      logo: {
        '@type': 'ImageObject',';
        url: `${siteUrl}/images/logo.png`,````
      },
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    mainEntityOfPage: {
'@type': 'WebPage',',
'@id': finalCanonical,',
    },
    image: finalOgImage,
    ...(section && {articleSection: section,}),
    ...(tags.length > 0 && {keywords: tags.join(', '),}),'
  } : null;
  return (
<>    <Helmet></Helmet>
      { /* Basic Meta Tags */ }
      <title>{title}</title>`
      <meta name="description" content={description} />"``
      <meta name="keywords" content={keywords} />"```
      <meta name="author" content={author} />"````
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow",} />"`````
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow",} />"``````
      ;```````
        tags.map((tag, index) => (````````
          <meta key={index} property="article:tag" content={tag} />"`````````
        )})``````````
```````````