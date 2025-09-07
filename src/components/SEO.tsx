import React from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOProps {
  // TODO: Implement
}
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;

const SEO: React.FC<SEOProps> = ({

    <Helmet>

      <title>{title}</title>
      <meta name="description" content={description} />"
</meta>"
      <meta name="keywords" content={keywords} />"
      <link rel="canonical" href={canonical} />"
</link>"
      <meta property="og:title" content={title} />"
      <meta property="og:description" content={description} />"
      <meta property="og:image" content={ogImage} />"
      <meta property="og:type" content={ogType} />"
      <meta property="og:url" content={canonical} />"
      <meta name="twitter:card" content={twitterCard} />"
      <meta name="twitter:title" content={title} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={ogImage} />"
      <meta name="robots" content="index,follow" />"
      <meta name="author" content="Zion Tech Group" />"
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />"
</meta>
    )"