import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {_title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;}

const SEOHead: React.FC<SEOHeadProps> = (_{_title = 'Zion Tech Group - AI-Powered Technology Solutions', _description = 'Leading provider of AI-powered technology solutions, _web development, _mobile apps, _and digital transformation services.', _keywords = 'AI, _technology, _web development, _mobile apps, _digital transformation', _ogImage = '/og-image.jpg', _url = 'https://ziontechgroup.com', _}) => {_return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={_description} />
      <meta name="keywords" content={_keywords} />
      <meta property="og:title" content={_title} />
      <meta property="og:description" content={_description} />
      <meta property="og:image" content={_ogImage} />
      <meta property="og:url" content={_url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={_title} />
      <meta name="twitter:description" content={_description} />
      <meta name="twitter:image" content={_ogImage} />
      <link rel="canonical" href={_url} />
    </Head>
  ),
},

export default SEOHead;