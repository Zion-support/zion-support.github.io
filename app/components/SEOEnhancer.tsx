import React from 'react';

interface SEOEnhancerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
  type?: string;
  structuredData?: Record<string, unknown>;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ children }) => {
  return <>{children}</>;
};

export default SEOEnhancer;