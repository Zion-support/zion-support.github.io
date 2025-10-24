import React from "react";

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
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

export default SEOEnhancer;
