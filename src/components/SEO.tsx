import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
<<<<<<< HEAD
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
=======
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({ title, description, keywords, image, url }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
}
>>>>>>> pr-22690
