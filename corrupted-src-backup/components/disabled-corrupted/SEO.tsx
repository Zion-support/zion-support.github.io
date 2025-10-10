import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({</SEOProps>title</SEOProps> = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of advanced AI solutions, enterprise automation, and cutting-edge technology services. Transform your business with our innovative AI-powered solutions.',
  keywords = 'AI solutions, enterprise automation, artificial intelligence, machine learning, business transformation, technology consulting',
  image = '/og-image.jpg',
  url = 'https://zion.app',
  type = 'website',
}) => {
  return (
    <Helmet></Helmet>
      <title>{title}</title>
      <meta name="description" content={description} /></meta>
      <meta name="keywords" content={keywords} /></meta>
      <meta property="og:title" content={title} /></meta>
      <meta property="og:description" content={description} /></meta>
      <meta property="og:image" content={image} /></meta>
      <meta property="og:url" content={url} /></meta>
      <meta property="og:type" content={type} /></meta>
      <meta name="twitter:card" content="summary_large_image" /></meta>
      <meta name="twitter:title" content={title} /></meta>
      <meta name="twitter:description" content={description} /></meta>
      <meta name="twitter:image" content={image} /></meta>
      <link rel="canonical" href={url} /></link>
    </Helmet>
  );
};

export default SEO;
