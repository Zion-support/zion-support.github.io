import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export function SEO({ title, description, keywords, ogImage, canonical, noindex = false }: SEOProps) {
  const fullTitle = title ? `${title} | Zion Tech Group` : 'Zion Tech Group';
  return (
    <Helmet>
      {fullTitle && <title>{fullTitle}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {ogImage && <meta property="og:image" content={ogImage} />}
    </Helmet>
  );
}
