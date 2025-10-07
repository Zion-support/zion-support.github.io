import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Revolutionary AI solutions for enterprise",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Zion Tech Group — Revolutionary AI Solutions for Enterprise</title>
        <meta name="description" content="Transform your business with cutting-edge AI micro SaaS services, cloud automation, and enterprise IT solutions." />
        <meta name="keywords" content="AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, AI solutions, business transformation" />
        <meta property="og:title" content="Zion Tech Group — Revolutionary AI Solutions for Enterprise" />
        <meta property="og:description" content="Transform your business with cutting-edge AI micro SaaS services, cloud automation, and enterprise IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group — Revolutionary AI Solutions for Enterprise" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI micro SaaS services, cloud automation, and enterprise IT solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>
      {children}
    </>
  );
};

export default SEOOptimizer;