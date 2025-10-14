import React from 'react';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords: string[];
  type: string;
  structuredData?: Record<string, unknown>;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ 
  title, 
  description, 
  keywords, 
  type, 
  structuredData 
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  );
};

export default SEOOptimizer;