import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ title, description, keywords, canonical }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default EnhancedSEO;