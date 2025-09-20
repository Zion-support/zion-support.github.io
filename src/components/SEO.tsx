import React from "react";
<<<<<<< HEAD
=======

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export function SEO({ title, description, keywords, canonical }: SEOProps) {
  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </>
  );
}
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  url?: string;
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, url, image }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical || url} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};