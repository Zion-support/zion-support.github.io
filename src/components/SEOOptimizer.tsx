import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ 
  children, 
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered enterprise solutions, quantum computing, and autonomous systems. Transform your business with cutting-edge technology.",
  keywords = ["AI", "Artificial Intelligence", "Enterprise Solutions", "Quantum Computing", "Automation", "IT Services"],
  canonicalUrl
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      {children}
    </>
  );
};

export default SEOOptimizer;