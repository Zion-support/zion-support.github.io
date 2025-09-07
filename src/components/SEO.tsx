<<<<<<< HEAD
import React from 'react';
=======
import React from 'react;

  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,

  image = /og-image.jpg',
  url = 'https://ziontechgroup.com,
  type = website'
}) => {
  const siteName = 'Zion Tech Group;
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullUrl = url ? `https://ziontechgroup.com${url}` : https://ziontechgroup.com';
  const fullImage = image || 'https://ziontechgroup.com/og-image.jpg';

  return (

      <title>{fullTitle}</title>
      <meta name="description content={description} />
      <meta name=keywords" content={keywords} />
      <meta name="viewport content=width=device-width, initial-scale=1" />
      <meta name="robots content=index, follow" />
      <link rel="canonical href={fullUrl} />


      <meta property=og:title" content={fullTitle} />
      <meta property="og:description content={description} />
      <meta property=og:image" content={fullImage} />
      <meta property="og:url content={fullUrl} />

      <meta name=twitter:card" content="summary_large_image />
      <meta name=twitter:title" content={fullTitle} />
      <meta name="twitter:description content={description} />
      <meta name=twitter:image" content={fullImage} />


  );
}

export default SEO;
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
