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
export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
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