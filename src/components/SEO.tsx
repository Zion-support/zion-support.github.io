import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.',
  keywords = 'AI, cybersecurity, cloud infrastructure, digital transformation, technology solutions, Zion Tech Group',
  image = '/og-image.svg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  section,
  tags,
  noindex = false
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.svg',
    description: 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Technology Drive',
      addressLocality: 'Wilmington',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    }
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0ea5e9" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional meta tags */}
      {section && <meta name="article:section" content={section} />}
      {tags && <meta name="article:tag" content={tags.join(', ')} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default SEO;