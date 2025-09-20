import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
  canonical?: string;
}

export function SEO({ title, description, keywords, canonical }: SEOProps) {
=======
}

export function SEO({ title, description, keywords }: SEOProps) {
>>>>>>> 9c334060803f415d6d017f9e5353d20ebc0b1d26
  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
<<<<<<< HEAD
      {canonical && <link rel="canonical" href={canonical} />}
=======
>>>>>>> 9c334060803f415d6d017f9e5353d20ebc0b1d26
    </>
  );
}
