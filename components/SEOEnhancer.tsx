import React from 'react';
import Head from 'next/head';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ title, description, keywords, ogImage }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
    </Head>
  );
};

export default SEOEnhancer;