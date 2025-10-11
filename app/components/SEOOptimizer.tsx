'use client';
import React from 'react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  structuredData?: any;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'IT services', 'digital transformation'],
  canonicalUrl = 'https://ziontechgroup.com',
  structuredData
}) => {
  // This component handles SEO optimization
  // The actual SEO meta tags are handled by EnhancedSEOHead
  return null;
};

export default SEOOptimizer;