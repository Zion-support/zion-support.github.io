"use client";
import React from "react";

interface SEOOptimizerProps {
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children }) => {
  return <>{children}</>; // This component only handles SEO, no UI
};

export default SEOOptimizer;