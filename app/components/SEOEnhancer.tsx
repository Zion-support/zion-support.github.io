import React, { ReactNode } from "react";

interface SEOEnhancerProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
  type?: string;
  structuredData?: Record<string, unknown>;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ children, title, description, keywords, type, structuredData }) => {
  return <>{children}</>;
};

export default SEOEnhancer;
