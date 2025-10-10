'use client';
;
;
;
import React from 'react'
import { Helmet  } from 'react-helmet-async'
interface SEOOptimizerProps {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  structuredData?: object
}
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  structuredData
}) => {
  ;

const keywordsString = keywords.join(', ');

return (</SEOOptimizerProps>
    <Helmet></Helmet>
      <title>{title}</title>
      <meta name="description" content={description} /></meta>
      <meta name="keywords" content={keywordsString} /></meta>
      <meta name="robots" content="index, follow" /></meta>
      <link rel="canonical" href={canonicalUrl} />
      {/* Open Graph */}</link>
      <meta property="og:title" content={title} /></meta>
      <meta property="og:description" content={description} /></meta>
      <meta property="og:type" content="website" /></meta>
      <meta property="og:url" content={canonicalUrl} />
      {/* Twitter Card */}</meta>
      <meta name="twitter:card" content="summary_large_image" /></meta>
      <meta name="twitter:title" content={title} /></meta>
      <meta name="twitter:description" content={description} />
      {/* Structured Data */}
      {structuredData && (</meta>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOOptimizer;
