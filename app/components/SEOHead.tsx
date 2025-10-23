"use client";
import React from "react";
import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - AI Solutions & Technology Services",
  description = "Leading provider of AI solutions, cloud services, and technology consulting",
  keywords = "AI, artificial intelligence, cloud services, technology consulting",
  ogImage = "/og-image.jpg",
  url = "https://ziontechgroup.com",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

