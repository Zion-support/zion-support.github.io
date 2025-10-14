'use client';

/**
 * SEO Component
 * Provides comprehensive SEO meta tags and structured data
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Article specific meta tags */},
    {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )},
    {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )},
    {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )},
    {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )},
    {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )},
    {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <meta name="color-scheme" content="dark light" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
);
};

export default SEO;

