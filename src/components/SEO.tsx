import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}

const SEO = React.memo(function SEO({ 
  title = "Zion Tech Group", 
  description = "Leading technology solutions for modern businesses",
  keywords = ["technology", "solutions", "AI", "cloud"],
  image = "/api/placeholder/1200/630"
}: SEOProps) {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </head>
  );
}


export default SEO;