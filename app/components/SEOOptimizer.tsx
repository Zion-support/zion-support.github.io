<<<<<<< HEAD
import React from 'react';
'use client';
interface SEOOptimizerProps {title: string;,}
  description: string;,
  keywords?: string[]
=======
'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string[];
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
  canonicalUrl?: string;
  structuredData?: object;}const SEOOptimizer: React.FC<SEOOptimizerProps> = ({,
  title,
  description,
  keywords = [],
  canonicalUrl,
  structuredData;}) => {
  const keywordsString = keywords.join(', ');

  return(<Helmet />)
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywordsString}/>
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl}/>
      
      {/* Open Graph */} <meta property="og: title" content={title,}/>
      <meta property="og: description" content={description,}/>
      <meta property="og: type" content="website" />,
      <meta property="og: url" content={canonicalUrl,}/>
      
<<<<<<< HEAD
      {/* Twitter Card */} <meta name="twitter: card" content="summary_large_image" />,
      <meta name="twitter: title" content={title,}/>
      <meta name="twitter: description" content={description,}/>
=======
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
    </Helmet>
  );
};

export default SEOOptimizer;
