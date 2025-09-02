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
