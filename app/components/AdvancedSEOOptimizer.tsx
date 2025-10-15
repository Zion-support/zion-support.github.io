import React, { useEffect, useState } from 'react';

interface AdvancedSEOOptimizerProps {
  children: React.ReactNode;
}

const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps> = ({ children }) => {
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Check if SEO optimization is enabled
    const saved = localStorage.getItem('seo-optimization-enabled');
    if (saved === 'true') {
      setIsOptimized(true);
      applySEOOptimizations();
    }
  }, []);

  const applySEOOptimizations = () => {
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Advanced AI and IT Solutions",
      "url": window.location.origin,
      "logo": `${window.location.origin}/images/logo.svg`
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Optimize meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Zion Tech Group - Advanced AI and IT Solutions for modern businesses');
    }

    // Add canonical URL
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = window.location.href;
    document.head.appendChild(canonical);
  };

  const toggleOptimization = () => {
    const newState = !isOptimized;
    setIsOptimized(newState);
    localStorage.setItem('seo-optimization-enabled', newState.toString());
    
    if (newState) {
      applySEOOptimizations();
    }
  };

  return (
    <>
      {children}
      <button
        onClick={toggleOptimization}
        className="fixed top-60 right-4 z-50 bg-purple-600 text-white p-2 rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
        aria-label="Toggle SEO optimization"
      >
        {isOptimized ? 'Disable' : 'Enable'} SEO Optimization
      </button>
    </>
  );
};

export default AdvancedSEOOptimizer;
