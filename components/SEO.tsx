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
}

<<<<<<< HEAD
export const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
=======
const SEO: React.FC<SEOProps> = () => {
  return null;
>>>>>>> origin/main
};

export default SEO;