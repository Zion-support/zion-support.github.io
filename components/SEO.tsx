import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
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

<<<<<<< HEAD
const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'technology solutions, AI development, cloud services, web development, mobile development, blockchain, IoT, cybersecurity',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  siteName = 'Zion Tech Group'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
=======
const SEO: React.FC<SEOProps> = () => {
  return null;
>>>>>>> origin/main
};

export default SEO;