import React from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
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

export default SEOHead;
