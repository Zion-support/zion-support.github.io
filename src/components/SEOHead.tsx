import Head from "next/head";
import React from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title = "Zion Tech Group", description }) => {
  return (
    <Head>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
    </Head>
  );
};

export default SEOHead;
