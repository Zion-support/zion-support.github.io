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

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = '',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website'
}) => {
  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullUrl = url ? `https://ziontechgroup.com${url}` : 'https://ziontechgroup.com';
  const fullImage = image || 'https://ziontechgroup.com/og-image.jpg';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
<<<<<<< HEAD
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
=======
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
<<<<<<< HEAD
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Tags */}
=======
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Meta Tags */}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional Meta Tags */}
<<<<<<< HEAD
      <meta name="author" content="Zion Tech Group" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteName,
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": description,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          }
        })}
      </script>
=======
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
    </Helmet>
  );
};

export default SEO;