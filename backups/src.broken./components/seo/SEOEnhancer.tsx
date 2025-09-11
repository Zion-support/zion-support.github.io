import React from "react";
import Head from "next/head";

type SEOEnhancerProps = {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: string;
};

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = "Zion Tech Group",
  description = "AI & Technology Solutions",
  keywords = "AI, technology, solutions",
  canonical,
  image = "/favicon-32x32.png",
  type = "website"
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default SEOEnhancer;