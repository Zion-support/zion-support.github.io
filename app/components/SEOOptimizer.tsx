'use client'
import React, { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  children: ReactNode;
  className?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children, className }) => {
  useEffect(() => {
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading technology solutions provider specializing in AI, IT services, and 5G solutions",
      "url": typeof window !== 'undefined' ? window.location.origin : '',
      "logo": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : '',
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={className}>
      <Helmet>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Helmet>
      {children}
    </div>
  );
};

export default SEOOptimizer;