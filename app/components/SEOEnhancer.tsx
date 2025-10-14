import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOEnhancer Props {
  title: string;
  description: string;
  keywords?: string[];
  type?: string;
  structured Data?: Record<string, unknown>;
  },
constSEOEnhancer: React.FC<SEOEnhancer Props> = ({
  title,
  description,
  keywords = [],
  type = 'website',
  structured Data
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />  },
      <metapropert y="og:title" content={title} />
      <metapropert y="og:description" content={description} />
      <metapropert y="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {structured Data && (
        <scripttyp e="application/ld+json">
          {JSO N.stringify(structured Data)  },
        </script>
      )  },
    </Helmet>
  );
};
exportdefault SEO Enhancer;