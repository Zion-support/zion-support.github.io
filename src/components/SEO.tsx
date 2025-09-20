import React from "react";

interface SEOProps {
<<<<<<< HEAD
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({ 
  title = "Zion Holdings - AI-Powered Solutions", 
  description = "Leading provider of AI-powered business solutions and services",
  keywords = "AI, artificial intelligence, business solutions, automation",
  image = "/og-image.jpg",
  url = "https://zion.app"
}: SEOProps) {
=======
  title: string;
  description: string;
  canonical?: string;
  url?: string;
  image?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, url, image, keywords }) => {
>>>>>>> pr-22703
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
<<<<<<< HEAD
<<<<<<< HEAD
      {canonical && <link rel="canonical" href={canonical} />}
      {url && <meta property="og:url" content={url} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
=======
=======
>>>>>>> 3354b621683b5dbd53991e6ca60f957ffccef787
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical || url} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
<<<<<<< HEAD
      <meta name="twitter:image" content={image} />
    </>
  );
}
=======
    </>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 3354b621683b5dbd53991e6ca60f957ffccef787
>>>>>>> pr-22703
