'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  structuredData?: any;
  ogImage?: string;
  twitterCard?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ()
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  
  return ()
      <meta name="keywords" content={keywords.join(', ')} /></meta>
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}, {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} /></meta>
      <meta property="og:description" content={description} /></meta>
      <meta property="og:type" content="website" /></meta>
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}, {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Zion Tech Group" /></meta>
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} /></meta>
      <meta name="twitter:title" content={fullTitle} /></meta>
      <meta name="twitter:description" content={description} /></meta>
      {ogImage && <meta name="twitter:image" content={ogImage} />}, {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" /></meta>
      <meta name="author" content="Zion Tech Group" /></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /></meta>
      {/* Structured Data */}, {structuredData && ()
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;