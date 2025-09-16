import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOStructuredDataProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOStructuredData: React.FC<SEOStructuredDataProps> = ({
  title,
  description,
  keywords,
  url,
  type = 'website',
  image = 'https://ziontechgroup.com/og-image.jpg',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : type === 'product' ? 'Product' : 'WebSite',
    "name": title,
    "description": description,
    "url": url,
    "image": image,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ziontechgroup.com/logo.png"
      }
    },
    ...(type === 'article' && publishedTime && {
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime
    }),
    ...(type === 'product' && {
      "brand": {
        "@type": "Brand",
        "name": "Zion Tech Group"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": "0",
        "priceCurrency": "USD"
      }
    })
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ziontechgroup.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": url
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOStructuredData;