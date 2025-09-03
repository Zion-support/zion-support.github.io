<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
=======

interface SEOProps {
  title: string;
  description: string;
>>>>>>> origin/main
  keywords?: string;
  image?: string;
  url?: string;
}

<<<<<<< HEAD
export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Transform your business with our AI services, micro SaaS solutions, and IT infrastructure. Expert team delivering cutting-edge technology solutions.',
  keywords = 'AI services, micro SaaS, IT solutions, cloud computing, cybersecurity, automation',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Head>
  );
};
=======
const SEO: React.FC<SEOProps> = () => {
  return null;
};

export { SEO };
export default SEO;
>>>>>>> origin/main
=======
import Head from "next/head"
import React from "react"

interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  siteName?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  siteName = "Zion Tech Group",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags
}) => {
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com')
  const defaultImage = image || 'https://ziontechgroup.com/og-image.jpg'
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={defaultImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      
      {/* Article specific */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={currentUrl} />
    </Head>
  )
}

export default SEO
>>>>>>> main
