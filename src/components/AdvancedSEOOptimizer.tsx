import React from "react";

interface AdvancedSEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({
  title = "Default Title",
  description = "Default Description",
  keywords = "default, keywords"
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="{description}" />
      <meta name="keywords" content="{keywords}" />
    </>
  );
};

export default AdvancedSEOOptimizer;
