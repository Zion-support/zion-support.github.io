import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC = () => {
  return (
    <Helmet>
      <title>Zion Tech Group - Advanced AI & IT Solutions</title>
      <meta name="description" content="Transform your business with cutting-edge artificial intelligence and innovative technology solutions from Zion Tech Group." />
      <meta name="keywords" content="AI, artificial intelligence, IT solutions, technology, business transformation" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
      <meta property="og:description" content="Transform your business with cutting-edge artificial intelligence and innovative technology solutions." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
      <meta name="twitter:description" content="Transform your business with cutting-edge artificial intelligence and innovative technology solutions." />
    </Helmet>
  );
};

export default SEO;