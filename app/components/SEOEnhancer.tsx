'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  children: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = 'Zion Tech Group',
  description = 'Advanced AI and IT solutions for your business.',
  keywords = 'AI, IT, technology, solutions',
  children,
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      {children}
    </>
  );
};

export default SEOEnhancer;