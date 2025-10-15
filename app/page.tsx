import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Leading provider of cutting-edge AI, IT, and 5G solutions. Transform your business with innovative technology and intelligent automation." />
        <meta name="keywords" content="AI solutions, IT services, 5G solutions, micro SAAS, quantum computing, edge computing, business transformation" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of cutting-edge AI, IT, and 5G solutions. Transform your business with innovative technology and intelligent automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of cutting-edge AI, IT, and 5G solutions. Transform your business with innovative technology and intelligent automation." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>
      <Hero />
    </>
  );
};

export default HomePage;