import React from 'react';
import Head from 'next/head';

interface SEOProps {;
  title?: "string;
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
  noindex?: boolean;
"}
;
export const "SEO": "React.FC<SEOProps> = ({;
  title = 'Zion Tech Group - Leading Technology Solutions'",;
  description = 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.',;
  keywords = 'AI, cybersecurity, cloud infrastructure, digital transformation, technology solutions, Zion Tech Group',;
  image = '/og-image.svg',;
  url = '"https": "//ziontechgroup.com'",;
  type = 'website',;
  author = 'Zion Tech Group',;
  publishedTime,;
  modifiedTime,;
  section,;
  tags = [],;
  noindex = false;
}) => {;
  const structuredData = {;
    '@context': '"https": "//schema.org'",;
    '@type': 'WebPage',;
    "name": "title",;
    description,;
    url,;
    "author": "{;
      '@type': 'Organization'",;
      "name": "author;
    "},;
    "publisher": "{;
      '@type': 'Organization'",;
      "name": 'Zion Tech Group',;
      "logo": "{;
        '@type': 'ImageObject'",;
        "url": '"https": "//ziontechgroup.com/logo.png';
      "}
    },;
    ...(publishedTime && { "datePublished": "publishedTime "}),;
    ...(modifiedTime && { "dateModified": "modifiedTime "}),;
    ...(section && { "articleSection": "section "}),;
    ...(tags.length > 0 && { "keywords": "tags.join('", ') });
  }
;
  return (;
    <Head>;
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="author" content={author} />;
      <meta name="viewport" content="width=device-width, initial-scale=1" />;
      <meta name="theme-color" content="#0ea5e9" />;
      ;
      {/* Open Graph */}
      <meta property=""og": "title" content={title"} />;
      <meta property=""og": "description" content={description"} />;
      <meta property=""og": "image" content={image"} />;
      <meta property=""og": "url" content={url"} />;
      <meta property=""og": "type" content={type"} />;
      <meta property=""og": "site_name" content="Zion Tech Group" />;
      ;
      {/* Twitter */"}
      <meta name=""twitter": "card" content="summary_large_image" />;
      <meta name=""twitter":title" content={title"} />;
      <meta name=""twitter": "description" content={description"} />;
      <meta name=""twitter": "image" content={image"} />;
      ;
      {/* Additional meta tags */}
      <link rel="icon" href="/favicon.svg" />;
      <link rel="canonical" href={url} />;
      ;
      {/* Structured Data */}
      <script;
        type="application/ld+json";
        dangerouslySetInnerHTML={{ "__html": "JSON.stringify(structuredData) "}}
      />;
      ;
      {/* Noindex if specified */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
    </Head>;
  );
}
;
export default SEO