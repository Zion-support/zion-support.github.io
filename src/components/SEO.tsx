import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading AI and Technology Solutions',
  description = 'Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.',
  keywords = ['AI', 'artificial intelligence', 'micro SaaS', 'IT services', 'technology', 'innovation'],
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
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

export const HomePageSEO: React.FC = () => {
  return (
    <SEO
      title="Zion Tech Group - Leading AI and Technology Solutions"
      description="Transform your business with cutting-edge AI and technology solutions from Zion Tech Group. Specializing in AI development, cybersecurity, and cloud computing."
      keywords={[
        'AI development',
        'artificial intelligence',
        'cybersecurity',
        'cloud computing',
        'micro SaaS',
        'IT services',
        'technology innovation',
        'business automation'
      ]}
    />
  );
};