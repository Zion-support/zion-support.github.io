'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  className?: string;
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({ 
  title = 'Zion Tech Group',
  description = 'Professional AI and IT solutions for your business',
  keywords = 'AI, artificial intelligence, IT solutions, business automation',
  className = '' // eslint-disable-line @typescript-eslint/no-unused-vars 
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default EnhancedSEOHead;
