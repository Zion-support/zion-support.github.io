import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOEnhancerProps {
  title: string;
  description: string;
  keywords?: string[];
  type?: string;
  structured Data?: Record<string, unknown>;
}
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title,
  description,
  keywords = [],
  type = 'website',
  structured Data
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta="description" content={description} />
      {keywords.length > 0 && <meta="keywords" content={keywords.join(', ')} />}
      <metaproperty="og:title" content={title} />
      <metaproperty="og:description" content={description} />
      <metaproperty="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta="twitter:title" content={title} />
      <meta="twitter:description" content={description} />
      {structured Data && (
        <scripttype="application/ld+json">
          {JSON.stringify(structured Data)}
        </script>
      )}
    </Helmet>
  );
};
export default SEOEnhancer;