'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
<<<<<<< HEAD
  structuredData,
  ogImage,
  twitterCard = 'summary_large_image'
=======
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  noFollow = false
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
}) => {
  return (
    <Helmet>
<<<<<<< HEAD
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
<<<<<<< HEAD
      <meta name="keywords" content={keywords.join(', ')} />
=======
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
<<<<<<< HEAD
<<<<<<< HEAD
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Zion Tech Group" />
=======
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
<<<<<<< HEAD
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
=======
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex" />}
      {noFollow && <meta name="robots" content="nofollow" />}
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    </Helmet>
  );
};

export default SEOHead;