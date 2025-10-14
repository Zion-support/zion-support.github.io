import React from "react";

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  children?: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  title: _title, 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  description: _description, 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  keywords: _keywords, 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canonicalUrl: _canonicalUrl,
  children 
}) => {
  return <>{children}</>;
};

export default SEOOptimizer;
