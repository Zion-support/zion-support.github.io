import React from 'react';
import { Helmet  } from 'react-helmet-async';

interface SEOEnhancer Props {
  title: string;
  description: string;
  keywords?: string[];
  type?: string;
  structuredData?: Record<string, unknown>;
}
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title,
  description,
  keyword s =[],
  type='website',
  structuredData;
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <met a ="description" content={description} />
      {keywords.length > 0 && <met a ="keywords" content={keywords.join(',')} />}
      <metapropert y ="og:title" content={title} />
      <metapropert y ="og:description" content={description} />
      <metapropert y ="og:type" content={type} />
      <meta name ="twitter:card" content="summary_large_image" />
      <met a ="twitter:title" content={title} />
      <met a ="twitter:description" content={description} />
      {structuredData && (
        <scripttype="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
export default SEOEnhancer;