import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOEnhancerProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
  type?: string;
  structuredData?: Record<string, unknown>;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  children,
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI and IT solutions. Transform your business with cutting-edge technology.',
  keywords = ['AI', 'IT solutions', 'automation', 'digital transformation'],
  type = 'website',
  structuredData
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>
      {children}
    </>
  );
};

export default SEOEnhancer;