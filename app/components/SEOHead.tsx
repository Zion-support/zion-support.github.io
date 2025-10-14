import React from "react";
import { Helmet } from "react-helmet-async";
interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string";
  type?: 'website' | 'article' | 'product';
  structuredData?: any}

const SEOHead: React.FC<SEOHeadProps> = ({'
  title = 'Zion Tech Group - Advanced AI and IT Solutions''
  description = 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide.''
  keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions, Zion Tech Group''
  image = '/og-image.svg''
  url = 'https://ziontechgroup.com''
  type = 'website'
  structuredData
}) => {
  const structuredData = {
    '@context': 'https://schema.org','
    '@type': type === 'article' ? 'Article' : 'WebPage','
    headline: title,
    description,
    image,
    url,
author: {,
      '@type': 'Organization','
name: author,
    },
    publisher: {
      '@type': 'Organization','
      name: 'Zion Tech Group','
logo: {,
        '@type': 'ImageObject','
url: 'https://ziontechgroup.com/logo.png','
      }
    },
    ...(publishedTime && {datePublished: publishedTime,}),
    ...(modifiedTime && {dateModified: modifiedTime,}),
    ...(section && {articleSection: section,}),
    ...(tags.length > 0 && {keywords: tags.join(', '),})'
  };
  return (
    <Helmet />
      <title>{title}</title>
      <meta name="description" content={description} /></meta>"
      <meta name="keywords" content={keywords} /></meta>"
      <meta property="og:title" content={title} /></meta>"
      <meta property="og:description" content={description} /></meta>"
      <meta property="og:image" content={image} /></meta>"
      <meta property="og:url" content={url} /></meta>"
      <meta property="og:type" content={type} /></meta>"
      <meta name="twitter:card" content="summary_large_image" /></meta>"
      <meta name="twitter:title" content={title} /></meta>"
      <meta name="twitter:description" content={description} /></meta>"
      <meta name="twitter:image" content={image} /></meta>"
      <link rel="canonical" href={url} /></link>"
      {structuredData && (
        <script type="application/ld+json"></script>"
{JSON.stringify(structuredData)}
        </script>
)}
    </Helmet>
  )};

export default SEOHead;
'