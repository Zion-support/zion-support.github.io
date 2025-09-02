import React from 'react';
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/main

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
<<<<<<< HEAD
  keywords = "AI, artificial intelligence, technology, automation, machine learning, cloud computing, cybersecurity, data analytics, business solutions",
  image = "https://ziontechgroup.com/api/placeholder/1200/630",
  url = "https://ziontechgroup.com",
  type = "website",
  siteName = "Zion Tech Group"
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} - Zion Tech Group`;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={fullUrl} />
    </>
=======
  keywords,
  image,
  url,
  type = 'website',
  siteName = 'Zion Tech Group'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
>>>>>>> origin/main
  );
};

export default SEO;