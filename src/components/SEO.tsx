import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI & Technology Solutions',
  description = 'Leading AI & Technology Solutions for a Smarter Future. Micro SaaS, AI Services, IT Solutions, Blockchain, and Data Analytics.',
  keywords = 'AI, artificial intelligence, technology solutions, micro SaaS, IT services, blockchain, data analytics, cloud computing',
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
=======
import { Helmet  } from 'react-helmet-async';
interface SEOProps  {title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}const SEO: React.FC<SEOProps> = ({title,description,keywords = '',image = '/og-image.jpg',url = 'https://ziontechgroup.com',type = 'website';
}) => {const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullUrl = url ? `https://ziontechgroup.com${url}` : 'https://ziontechgroup.com';
  const fullImage  = image || 'https://ziontechgroup.com/og-image.jpg';return (<Helmet>;
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="viewport" content="width=device-width, initial-scale=1" />;
      <meta name="robots" content="index, follow" />;
      <link rel="canonical" href={fullUrl} />;
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />;
      <meta property="og:description" content={description} />;
      <meta property="og:image" content={fullImage} />;
      <meta property="og:url" content={fullUrl} />;
      <meta property="og:type" content={type} />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />;
      <meta name="twitter:title" content={fullTitle} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={fullImage} />;
      {/* Additional SEO */}
      <meta name="author" content="Zion Tech Group" />;
      <meta name="theme-color" content="#000000" />;
    </Helmet>;
  )}export default SEO;
import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'Zion Tech Group - Leading provider of AI-powered solutions, automation tools, and digital transformation services.',
  keywords = 'AI solutions, automation, digital transformation, software development, technology consulting',
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

<<<<<<< HEAD
export default SEO;
=======
export default SEO;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
