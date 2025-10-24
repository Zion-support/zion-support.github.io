import React from "react";

interface DefaultSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const DefaultSEO: React.FC<DefaultSEOProps> = ({
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

export default DefaultSEO;
