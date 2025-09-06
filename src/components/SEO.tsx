
import React from 'react';
import { Helmet } from 'react-helmet-async';



interface SEOProps {
  title: string;
  description: string;
  keywords?: string;


  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website'
}: SEOProps) => {
  const fullTitle = `${title} | Zion Tech Group`;
  const fullUrl = url ? `https://ziontechgroup.com${url}` : 'https://ziontechgroup.com';
  const fullImage = image || 'https://ziontechgroup.com/og-image.jpg';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional SEO */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="theme-color" content="#000000" />
    </Head>
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
  url?: string;
  image?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = '',
  url = '',
  image = '/og-image.jpg',
  type = 'website'
}) => {
  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullUrl = url ? `https://ziontechgroup.com${url}` : 'https://ziontechgroup.com';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading provider of AI-powered technology solutions and enterprise services",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "contact@ziontechgroup.com"
          },
          "sameAs": [
            "https://facebook.com/ziontechgroup",
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup"
          ]
        })}
      </script>
    </Helmet>


  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {url && <link rel="canonical" href={url} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;