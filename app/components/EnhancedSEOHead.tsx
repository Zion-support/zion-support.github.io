'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead: React.FC = () => {
  return (
    <Helmet>
      <title>Zion Tech Group - AI & IT Solutions</title>
      <meta name="description" content="Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture and innovative development services." />
      <meta name="keywords" content="AI solutions, cloud architecture, web development, mobile apps, technology consulting" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
      <meta property="og:description" content="Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture and innovative development services." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
      <meta name="twitter:description" content="Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture and innovative development services." />
    </Helmet>
  );
};

export default SEOHead;