import React, { useEffect, useState } from 'react';

interface AdvancedPerformanceEnhancerProps {
  children: React.ReactNode;
}

const AdvancedPerformanceEnhancer: React.FC<AdvancedPerformanceEnhancerProps> = ({ children }) => {
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Check if performance optimization is enabled
    const saved = localStorage.getItem('performance-optimization-enabled');
    if (saved === 'true') {
      setIsOptimized(true);
      applyOptimizations();
    }
  }, []);

  const applyOptimizations = () => {
    // Enable performance optimizations
    document.body.classList.add('performance-optimized');
    
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      document.head.appendChild(link);
    });
  };

  const toggleOptimization = () => {
    const newState = !isOptimized;
    setIsOptimized(newState);
    localStorage.setItem('performance-optimization-enabled', newState.toString());
    
    if (newState) {
      applyOptimizations();
    } else {
      document.body.classList.remove('performance-optimized');
    }
  };

  return (
    <>
      {children}
      <button
        onClick={toggleOptimization}
        className="fixed top-4 right-4 z-50 bg-green-600 text-white p-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors"
        aria-label="Toggle performance optimization"
      >
        {isOptimized ? 'Disable' : 'Enable'} Performance Optimization
      </button>
    </>
  );
};

export default AdvancedPerformanceEnhancer;
