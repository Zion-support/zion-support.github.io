import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC = () => {
  return (
    <Helmet>
      <title>Zion Tech Group - Advanced AI and IT Solutions</title>
      <meta name="description" content="Leading provider of advanced AI and IT solutions. Transform your business with cutting-edge technology and innovative solutions." />
      <meta name="keywords" content="AI, artificial intelligence, IT solutions, technology, innovation, business transformation" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta property="og:description" content="Leading provider of advanced AI and IT solutions. Transform your business with cutting-edge technology." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://zion.app" />
      <meta property="og:image" content="https://zion.app/og-image.jpg" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta name="twitter:description" content="Leading provider of advanced AI and IT solutions. Transform your business with cutting-edge technology." />
      <meta name="twitter:image" content="https://zion.app/og-image.jpg" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://zion.app" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Helmet>
  );
};

export default SEO;