'use client';
import React from 'react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  structuredData?: any;
  children?: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = "Zion Tech Group - AI & IT Solutions",
  description = "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
  keywords = ["AI solutions", "quantum computing", "autonomous systems", "digital transformation"],
  canonicalUrl = "https://ziontechgroup.com",
  structuredData,
  children
}) => {
  return <>{children}</>;
};

export default SEOOptimizer;
