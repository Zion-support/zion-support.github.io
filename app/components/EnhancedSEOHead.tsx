'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  structuredData?: any;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  keywords = [], 
  canonicalUrl,
  structuredData,
  ogImage,
  twitterCard = 'summary_large_image'
}) => {
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
<<<<<<< HEAD
      <meta name="keywords" content={keywords.join(', ')} />
=======
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
<<<<<<< HEAD
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Zion Tech Group" />
=======
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
<<<<<<< HEAD
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;