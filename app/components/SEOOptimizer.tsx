import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Advanced AI and IT solutions by Zion Tech Group" />
        <meta name="keywords" content="AI solutions, IT services, 5G solutions, cloud computing, cybersecurity" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI and IT solutions" />
      </Helmet>
      {children}
    </>
  );
};

export default SEOOptimizer;