<<<<<<< HEAD
import React from 'react';'
import { Helmet } from 'react-helmet-async';'

interface SEOProps {
  }
  "title": string;
  "description": string;
=======
import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const "SEO": React.FC<SEOProps> = ({
  }
  title,
  description = 'Zion Tech Group - Leading provider of AI-powered solutions, automation tools, and digital transformation services.',
  keywords = 'AI solutions, automation, digital transformation, software development, technology consulting',
<<<<<<< HEAD
      <title>{fullTitle}</title>
      <meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />"
      <meta name="viewport" content="width=device-width, initial-scale=1" />"
      <meta name="robots" content="index, follow" />"
      <link rel="canonical" href={fullUrl} />"

      {/* Open Graph */}
  );
};

export default SEO;
=======
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website'
}) => {
  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullUrl = url ? `https://ziontechgroup.com${url}` : 'https://ziontechgroup.com';
  const fullImage = image || 'https://ziontechgroup.com/og-image.jpg';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional SEO */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="theme-color" content="#000000" />
    </Head>
  );
};

export default SEO;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
