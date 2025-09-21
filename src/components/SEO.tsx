<<<<<<< HEAD
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  url?: string;
  image?: string;
}
=======
import React from "react";
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonical?: string, }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-7b54

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, url, image }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical || url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image || '/og-image.jpg'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
<<<<<<< HEAD
};
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-7b54
