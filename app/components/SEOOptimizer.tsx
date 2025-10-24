'use client';
import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - AI Solutions',
  description = 'Leading provider of AI solutions and technology services',
  keywords = 'AI, artificial intelligence, technology, solutions',
  canonical
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
};

export default SEOOptimizer;