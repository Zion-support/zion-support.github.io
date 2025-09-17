import React from 'react';
import { Helmet } from 'react-helmet-async';

export type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
};

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion App - Revolutionary AI Solutions',
  description = 'Revolutionary AI solutions for enterprise transformation',
  keywords = 'AI, artificial intelligence, enterprise solutions, automation',
  image = 'https://zion.app/og-image.jpg',
  url = 'https://zion.app',
  type = 'website'
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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
<<<<<<< HEAD
export default SEO;
export { SEO };
=======

export default SEO;
>>>>>>> origin/merged-prs
