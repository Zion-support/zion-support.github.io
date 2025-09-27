import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  twitterCard?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion App - Advanced Technology Solutions',
  description = 'Zion App provides cutting-edge AI, Cloud Infrastructure, and Digital Transformation solutions to empower businesses.',
  keywords = ['AI solutions', 'cloud infrastructure', 'digital transformation', 'business technology', 'automation', 'machine learning', 'artificial intelligence'],
  image = '/images/og-image.jpg', // Default Open Graph image
  url = 'https://ziontechgroup.com', // Default canonical URL
  type = 'website', // Default Open Graph type
  twitterCard = 'summary_large_image', // Default Twitter card type
  canonicalUrl
}) => {
  const fullTitle = title;
  const fullDescription = description;
  const fullImage = `${url}${image}`; // Ensure absolute URL for image

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(' ')} />
      <link rel="canonical" href={canonicalUrl || url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={fullImage} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default SEO;