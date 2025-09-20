import React from "react";

interface SEOProps {
<<<<<<< HEAD
title: string;
description: string;
canonical?: string;
url?: string;
image?: string;
};
export const SEO: React.FC<SEOProps> = ({ title, description, canonical, url, image }) => {
return (
<>
<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonical || url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={url} />
<meta property="og:image" content={image || "/og-image.jpg"} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
</>
);
};

export default SEO;
=======
  title: string;
  description: string;
  canonical?: string;
  url?: string;
  image?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, url, image, keywords }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
<<<<<<< HEAD
      {canonical && <link rel="canonical" href={canonical} />}
      {url && <meta property="og:url" content={url} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
=======
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical || url} />
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-5df3
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
